import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { generatePhysicsGraphData } from '@/data/physics/physicsData'
import { physicsModels } from '@/data/physics/physicsModels'
import type { GraphNode } from '@/types'
import { AppLayout } from '@/components/layout/Navigation'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  ZoomIn, ZoomOut, GitBranch, BookOpen, ChevronRight, Layers, ArrowLeft
} from 'lucide-react'

const DIFFICULTY_COLORS: Record<number, string> = { 1: '#10b981', 2: '#f59e0b', 3: '#ef4444' }

export function CognitionGraphPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const graphRef = useRef<any>(null)
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null)
  const [loading, setLoading] = useState(true)
  const [graphType, setGraphType] = useState<'all' | 'module'>('all')
  const navigate = useNavigate()
  const graphData = generatePhysicsGraphData()

  useEffect(() => {
    let destroyed = false
    async function initGraph() {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const G6: any = (await import('@antv/g6')).default
        if (destroyed || !containerRef.current) return
        const width = containerRef.current.offsetWidth || 600
        const height = containerRef.current.offsetHeight || 400

        const data = graphData
        const filteredNodes = graphType === 'module'
          ? data.nodes.filter((n) => n.type === 'module')
          : data.nodes
        const nodeIds = new Set(filteredNodes.map((n) => n.id))
        const filteredEdges = data.edges.filter(
          (e) => nodeIds.has(e.source) && nodeIds.has(e.target)
        )

        const g6Nodes = filteredNodes.map((node) => ({
          id: node.id,
          label: node.label,
          type: node.type === 'module' ? 'rect' : 'circle',
          size: node.type === 'module' ? [130, 44] : 42,
          style: {
            fill: node.type === 'module' ? '#ede9fe' : `${DIFFICULTY_COLORS[node.difficulty || 1]}22`,
            stroke: node.type === 'module' ? '#8b5cf6' : DIFFICULTY_COLORS[node.difficulty || 1],
            lineWidth: node.type === 'module' ? 2 : 1.5,
            cursor: 'pointer',
            radius: node.type === 'module' ? 8 : 20,
          },
          labelCfg: {
            style: {
              fontSize: node.type === 'module' ? 12 : 10,
              fill: node.type === 'module' ? '#6d28d9' : DIFFICULTY_COLORS[node.difficulty || 1],
              fontWeight: node.type === 'module' ? 600 : 500,
            },
          },
        }))

        const g6Edges = filteredEdges.map((edge) => ({
          source: edge.source,
          target: edge.target,
          style: {
            stroke: edge.type === 'prerequisite' ? '#f59e0b' : '#c7d2fe',
            lineWidth: edge.type === 'prerequisite' ? 2 : 1,
            endArrow: edge.type === 'prerequisite' ? { path: 'M 0,0 L 5,4 L 0,8 Z', fill: '#f59e0b' } : false,
          },
        }))

        const graph = new G6.Graph({
          container: containerRef.current!,
          width,
          height,
          modes: { default: ['drag-canvas', 'zoom-canvas', 'drag-node'] },
          layout: {
            type: graphType === 'module' ? 'dagre' : 'force',
            rankdir: 'TB',
            nodesep: graphType === 'module' ? 50 : 20,
            ranksep: graphType === 'module' ? 70 : 40,
            preventOverlap: true,
          },
        })

        graph.data({ nodes: g6Nodes, edges: g6Edges })
        await graph.render()
        if (destroyed) { graph.destroy(); return }
        graph.on('node:click', (e: { item: { getID: () => string } }) => {
          const id = e.item.getID()
          setSelectedNode(data.nodes.find((n) => n.id === id) || null)
        })
        graphRef.current = graph
        setLoading(false)
      } catch (err) {
        console.error('G6 error:', err)
        setLoading(false)
      }
    }

    graphRef.current?.destroy()
    graphRef.current = null
    setSelectedNode(null)
    setLoading(true)
    initGraph()
    return () => { destroyed = true; graphRef.current?.destroy() }
  }, [graphType])

  const handleZoomIn = () => {
    if (graphRef.current) graphRef.current.zoomTo(graphRef.current.getZoom() + 0.15)
  }
  const handleZoomOut = () => {
    if (graphRef.current) graphRef.current.zoomTo(Math.max(0.1, graphRef.current.getZoom() - 0.15))
  }

  const selModel = selectedNode?.type === 'knowledge' && selectedNode.knowledgeId
    ? physicsModels.find((m) => m.id === selectedNode.knowledgeId) : null
  const prereqs = selectedNode?.type === 'knowledge'
    ? graphData.edges.filter((e) => e.target === selectedNode.id && e.type === 'prerequisite')
        .map((e) => graphData.nodes.find((n) => n.id === e.source)).filter(Boolean) as GraphNode[]
    : []

  return (
    <AppLayout showSubjectNav>
      <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* 顶栏 */}
      <div className="flex items-center justify-between px-4 py-2 border-b bg-card sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <GitBranch className="w-5 h-5 text-primary" />
          <h1 className="text-base font-bold">物理 · 认知图谱</h1>
          <span className="text-xs text-muted-foreground hidden sm:block">
            {graphData.nodes.length} 节点 · {graphData.edges.length} 条关系
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Tabs value={graphType} onValueChange={(v) => setGraphType(v as typeof graphType)}>
            <TabsList className="h-8">
              <TabsTrigger value="all" className="text-xs gap-1 h-7 px-3">
                <Layers className="w-3 h-3" /> 全部
              </TabsTrigger>
              <TabsTrigger value="module" className="text-xs gap-1 h-7 px-3">
                <GitBranch className="w-3 h-3" /> 模块
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={handleZoomIn}><ZoomIn className="w-4 h-4" /></Button>
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={handleZoomOut}><ZoomOut className="w-4 h-4" /></Button>
        </div>
      </div>

      {/* 图例条 */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-1.5 text-xs text-muted-foreground border-b bg-muted/10">
        <span className="w-2.5 h-1.5 rounded-sm bg-purple-400 inline-block" />模块
        <span className="w-2 h-1.5 rounded-full bg-green-500 inline-block" />基础
        <span className="w-2 h-1.5 rounded-full bg-yellow-500 inline-block" />进阶
        <span className="w-2 h-1.5 rounded-full bg-red-500 inline-block" />综合
        <span className="w-4 h-0.5 bg-yellow-500 inline-block align-middle" />前置
        
      </div>

      {/* 主体 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 图谱区 */}
        <div className="flex-1 relative min-h-0">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
              <div className="text-center">
                <div className="w-7 h-7 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">加载中...</p>
              </div>
            </div>
          )}
          <div ref={containerRef} className="w-full h-full" />
        </div>

        {/* 侧边 */}
        <div className="w-72 border-l bg-card overflow-y-auto">
          {selectedNode ? (
            <div className="p-4 space-y-4">
              <div>
                <Badge variant="outline" className="mb-2 text-xs">
                  {selectedNode.type === 'module' ? '📚 模块' : '💡 知识点'}
                </Badge>
                <CardTitle className="text-base leading-snug">{selectedNode.label}</CardTitle>
              </div>

              {selectedNode.type === 'knowledge' && (
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge style={{ backgroundColor: `${DIFFICULTY_COLORS[selectedNode.difficulty || 1]}22`, color: DIFFICULTY_COLORS[selectedNode.difficulty || 1] }} className="text-xs">
                    {selectedNode.difficulty === 1 ? '⭐ 基础' : selectedNode.difficulty === 2 ? '⭐⭐ 进阶' : '⭐⭐⭐ 综合'}
                  </Badge>
                  {selectedNode.status && (
                    <Badge className={selectedNode.status === 'mastered' ? 'bg-green-100 text-green-700' : selectedNode.status === 'learning' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-500'}>
                      {selectedNode.status === 'mastered' ? '✅ 已掌握' : selectedNode.status === 'learning' ? '🔄 学习中' : '○ 未学'}
                    </Badge>
                  )}
                </div>
              )}

              {selModel && (
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-muted"><div className="text-muted-foreground">模块</div><div className="font-medium truncate">{selModel.module}</div></div>
                  <div className="p-2 rounded-lg bg-muted"><div className="text-muted-foreground">章节</div><div className="font-medium truncate">{selModel.chapter}</div></div>
                </div>
              )}

              {selectedNode.type === 'knowledge' && selectedNode.knowledgeId && (
                <div className="space-y-2">
                  <Button size="sm" className="w-full gap-1" onClick={() => navigate(`/physics/models/${selectedNode.knowledgeId}`)}>
                    <BookOpen className="w-4 h-4" /> 开始学习 <ChevronRight className="w-3 h-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-full gap-1" onClick={() => navigate(`/physics/practice?model=${selectedNode.knowledgeId}`)}>
                    开始练习 <ChevronRight className="w-3 h-3" />
                  </Button>
                </div>
              )}

              {prereqs.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">前置知识</p>
                  <div className="flex flex-wrap gap-1">
                    {prereqs.map((p) => (
                      <Badge key={p.id} variant="secondary" className="text-xs cursor-pointer"
                        onClick={() => setSelectedNode(p)}>
                        {p.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-6">
                <GitBranch className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm font-medium">点击节点查看详情</p>
                <p className="text-xs text-muted-foreground mt-1">拖拽移动 · 滚轮缩放</p>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </AppLayout>
  )
}
