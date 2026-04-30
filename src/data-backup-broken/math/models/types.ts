// 数学模型数据类型定义
// 数学模型是解决某类数学问题的标准范式和解法框架

export interface ModelChapter {
  id: string
  title: string
  subtitle: string
  module: string
  content: string
  examples: ModelExample[]
  relatedConcepts: string[]
}

export interface ModelExample {
  title: string
  problem: string
  solution: string
  key: string
}

export interface MathModel {
  id: string
  title: string
  module: string
  chapter: ModelChapter
}
