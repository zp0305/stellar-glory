// KaTeX 公式渲染组件
// 使用 katex.renderToString 预处理公式，ReactMarkdown 渲染其余 Markdown
import React, { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface Props {
  content: string
  className?: string
}

function preProcess(content: string): string {
  // 先处理行间公式 $$...$$
  let result = content.replace(/\$\$([\s\S]*?)\$\$/g, (_m, eq) => {
    try {
      return katex.renderToString(eq.trim(), { displayMode: true, throwOnError: false })
    } catch {
      return `<code>$${eq}$$</code>`
    }
  })
  // 再处理行内公式 $...$
  result = result.replace(/\$([^\$\n]+?)\$/g, (_m, eq) => {
    try {
      return katex.renderToString(eq.trim(), { displayMode: false, throwOnError: false })
    } catch {
      return `<code>$${eq}$</code>`
    }
  })
  return result
}

export function MarkdownRenderer({ content, className }: Props) {
  const processed = useMemo(() => preProcess(content), [content])

  return (
    <div className={className}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{processed}</ReactMarkdown>
    </div>
  )
}
