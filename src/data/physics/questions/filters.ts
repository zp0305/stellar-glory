export const LEVEL_OPTIONS = [
  { value: 'L1', label: 'L1 诊断', desc: '概念辨析' },
  { value: 'L2', label: 'L2 模型题', desc: '套路套用' },
  { value: 'L3', label: 'L3 综合', desc: '跨模型综合' },
] as const

export const TARGET_OPTIONS = [
  { value: 'SYNC', label: '同步学习', desc: '跟课堂进度' },
  { value: 'EXAM', label: '期末考试', desc: '阶段性检测' },
  { value: 'GAOKAO', label: '高考备考', desc: '高考真题' },
  { value: 'FOUNDATION', label: '强基校测', desc: '超纲拓展' },
  { value: 'COMPETE', label: '学科竞赛', desc: '竞赛训练' },
] as const

export const FUNCTION_OPTIONS = [
  { value: 'DIAG', label: '诊断题', desc: '检测掌握度' },
  { value: 'PRACTICE', label: '巩固题', desc: '重复训练' },
  { value: 'VARIATION', label: '变式题', desc: '条件变化' },
  { value: 'INTEGRATED', label: '综合题', desc: '多知识混合' },
  { value: 'REAL', label: '真题', desc: '考试原题' },
  { value: 'METHOD', label: '方法题', desc: '一题多解' },
] as const

export const DIFFICULTY_D_OPTIONS = [
  { value: 1, label: 'D1 识记', color: 'bg-gray-100 text-gray-600' },
  { value: 2, label: 'D2 辨析', color: 'bg-green-100 text-green-600' },
  { value: 3, label: 'D3 应用', color: 'bg-green-200 text-green-700' },
  { value: 4, label: 'D4 综合', color: 'bg-yellow-100 text-yellow-600' },
  { value: 5, label: 'D5 高考', color: 'bg-red-100 text-red-600' },
  { value: 6, label: 'D6 压轴', color: 'bg-red-200 text-red-700' },
] as const

export const PHYSICS_TYPE_OPTIONS = [
  { value: '选择题', label: '选择题' },
  { value: '多选题', label: '多选题' },
  { value: '填空题', label: '填空题' },
  { value: '计算题', label: '计算题' },
  { value: '图像分析题', label: '图像分析题' },
  { value: '多过程综合计算题', label: '多过程综合计算题' },
  { value: '实验设计题', label: '实验设计题' },
  { value: '选做题', label: '选做题' },
] as const

export type LevelType = typeof LEVEL_OPTIONS[number]['value']
export type TargetType = typeof TARGET_OPTIONS[number]['value']
export type FunctionType = typeof FUNCTION_OPTIONS[number]['value']
export type DifficultyDType = typeof DIFFICULTY_D_OPTIONS[number]['value']
export type PhysicsType = typeof PHYSICS_TYPE_OPTIONS[number]['value']

export interface FilterState {
  level: LevelType | 'all'
  target: TargetType | 'all'
  function: FunctionType | 'all'
  difficultyD: DifficultyDType | 'all'
  type: PhysicsType | 'all'
}