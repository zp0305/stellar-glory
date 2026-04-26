import { Link } from 'react-router-dom'
import { thinkingMethods } from '@/data/physics/thinkingMethods'
import { ArrowLeft, Lightbulb, Target, Zap, Layers } from 'lucide-react'

const METHOD_COLORS: Record<string, string> = {
  'P-TM01': 'from-blue-500 to-cyan-500',
  'P-TM02': 'from-emerald-500 to-teal-500',
  'P-TM03': 'from-violet-500 to-purple-500',
  'P-TM04': 'from-amber-500 to-orange-500',
  'P-TM05': 'from-rose-500 to-pink-500',
  'P-TM06': 'from-indigo-500 to-blue-500',
  'P-TM07': 'from-green-500 to-emerald-500',
}

export function ThinkingMethodList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* 顶部标题区 */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/physics"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            返回物理模块
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">物理思维方法</h1>
              <p className="text-blue-200 text-sm mt-1">
                7个核心认知维度，贯穿物理学习的全过程
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 方法卡片网格 */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {thinkingMethods.map((method) => (
            <Link
              key={method.id}
              to={`/physics/thinking/${method.id}`}
              className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              {/* 编号 + 图标 */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${METHOD_COLORS[method.id]} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {method.id.replace('P-TM', 'TM')}
                </div>
                <div className="text-xs text-slate-400 font-medium">v1.0</div>
              </div>

              {/* 名称 */}
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {method.name}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                {method.subtitle}
              </p>

              {/* 一句话定义 */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 line-clamp-2">
                {method.definition}
              </p>

              {/* 底部标签 */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Layers className="w-3.5 h-3.5" />
                  <span>关联 {method.relatedModels.length} 个模型</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Target className="w-3.5 h-3.5" />
                  <span>B/J/T 三级训练</span>
                </div>
              </div>

              {/* 底部横条 */}
              <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${METHOD_COLORS[method.id]} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </Link>
          ))}
        </div>

        {/* 底部说明 */}
        <div className="mt-8 p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">如何使用这些思维方法？</strong>
              </p>
              <p className="text-sm text-slate-500 mt-1">
                每张卡片包含：学科本质 → 触发信号 → B/J/T三级训练阶梯 → 跨板块应用 → 费曼式自我检测。
                推荐结合物理模型和分析范式一起学习，形成完整的物理思维体系。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
