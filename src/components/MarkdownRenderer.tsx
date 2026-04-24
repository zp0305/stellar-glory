// KaTeX 本地资源已准备好（CSS + 字体 + JS）
// 但 CDN/jsdelivr 在部分网络下不稳定，暂不自动渲染
// 如需启用 KaTeX 渲染：把 ENABLE_KATEX 改为 true
const ENABLE_KATEX = false

import React, { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'

interface Props {
  content: string
  enableKaTeX?: boolean
  className?: string
}

function preProcess(content: string): string {
  return content
}

export function MarkdownRenderer({ content, enableKaTeX = false, className }: Props) {
  const processed = useMemo(() => preProcess(content), [content])

  if (enableKaTeX && !ENABLE_KATEX) {
    // KaTeX 暂不启用，原文显示 LaTeX
    return <div className={className}>{content}</div>
  }

  return (
    <div className={className}>
      <ReactMarkdown>{processed}</ReactMarkdown>
    </div>
  )
}
