/**
 * 星耀平台核心数据类型
 * 基于《星耀内容模板规范 v1.0》
 */

// ==================== 学科与结构 ====================
export type SubjectCode = 'PHY' | 'CHE' | 'MAT' | 'BIO' | 'CHN' | 'ENG'
export type SubjectName = '物理' | '化学' | '数学' | '生物' | '语文' | '英语'

export interface Subject {
  id: SubjectCode
  name: SubjectName
  name_en: string
  color: string
  modules: LearningModule[]
}

export interface LearningModule {
  id: string
  title: string
  order: number
  chapters: Chapter[]
}

export interface Chapter {
  id: string
  name: string
  order: number
  knowledgeIds: string[]
}

// ==================== 知识点 ====================
export type KnowledgeStatus = 'undone' | 'learning' | 'mastered'

export interface KnowledgePoint {
  id: string
  subject: SubjectCode
  module: string
  chapter: string
  title: string
  difficulty: 1 | 2 | 3
  prerequisiteIds: string[]
  relatedIds: string[]
  estimatedTime: number
  status: KnowledgeStatus
  principle: PrincipleSection
  knowledgeNetwork: KnowledgeNetwork
  methodology: Methodology
  lifeApplications: LifeApplication[]
}

export interface PrincipleSection {
  situation: string
  confusion: string
  experiment: string
  concept: string
  derivation: string
  application: string
}

export interface KnowledgeNode {
  id: string
  label: string
  type: 'core' | 'prerequisite' | 'extension'
}

export interface KnowledgeEdge {
  source: string
  target: string
  label?: string
}

export interface KnowledgeNetwork {
  nodes: KnowledgeNode[]
  edges: KnowledgeEdge[]
}

export interface Methodology {
  steps: string[]
  tips: string[]
  commonMistakes: string[]
}

export interface LifeApplication {
  title: string
  description: string
}

// ==================== 解题套路 ====================
export interface Strategy {
  id: string
  subject: SubjectCode
  title: string
  applicableTypes: string[]
  difficulty: 1 | 2 | 3 | 4 | 5
  coreIdea: string
  steps: StrategyStep[]
  techniques: string[]
  commonMistakes: string[]
  relatedStrategies: string[]
  relatedKnowledge: string[]
  templateQuestion?: Question
}

export interface StrategyStep {
  order: number
  title: string
  description: string
}

// ==================== 题目 ====================
export type QuestionType = 'single' | 'multiple' | 'fill' | 'calculation'
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5

export interface Question {
  id: string
  subject: SubjectCode
  module: string
  knowledgeIds: string[]
  strategyIds: string[]
  type: QuestionType
  difficulty: DifficultyLevel
  content: string
  options?: QuestionOption[]
  answer: string
  explanation: string
  hint?: string
  source?: string
  year?: number
  tags: string[]
}

export interface QuestionOption {
  id: string
  content: string
}

// ==================== 学习状态 ====================
export interface UserProgress {
  knowledgeId: string
  status: KnowledgeStatus
  progress: number
  lastAccessed: string
}

export interface WrongQuestionRecord {
  questionId: string
  wrongReason?: string
  isReviewed: boolean
  createdAt: string
  reviewCount: number
}

// ==================== 认知图谱 ====================
export interface GraphNode {
  id: string
  label: string
  type: 'module' | 'chapter' | 'knowledge'
  status?: KnowledgeStatus
  difficulty?: number
  knowledgeId?: string
}

export interface GraphEdge {
  source: string
  target: string
  type: 'prerequisite' | '包含' | '关联'
}

export interface GraphData {
  nodes: GraphNode[]
  edges: GraphEdge[]
}
