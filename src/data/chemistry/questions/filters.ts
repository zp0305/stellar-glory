// 化学题库五维筛选常量
// 适配化学题型

export const LEVEL_OPTIONS = [
  { value: 'L1', label: 'L1 记忆理解' },
  { value: 'L2', label: 'L2 方法运用' },
  { value: 'L3', label: 'L3 迁移创新' },
]

export const TARGET_OPTIONS = [
  { value: 'SYNC', label: '同步练习' },
  { value: 'EXAM', label: '期中期末' },
  { value: 'GAOKAO', label: '高考真题' },
  { value: 'FOUNDATION', label: '基础巩固' },
  { value: 'COMPETE', label: '竞赛拓展' },
]

export const FUNCTION_OPTIONS = [
  { value: 'DIAG', label: '诊断' },
  { value: 'PRACTICE', label: '练习' },
  { value: 'VARIATION', label: '变式' },
  { value: 'INTEGRATED', label: '综合' },
  { value: 'REAL', label: '真实情境' },
  { value: 'METHOD', label: '方法' },
]

export const DIFFICULTY_D_OPTIONS = [
  { value: 1, label: 'D1', color: 'text-gray-500 bg-gray-50' },
  { value: 2, label: 'D2', color: 'text-green-600 bg-green-50' },
  { value: 3, label: 'D3', color: 'teal-600 bg-teal-50' },
  { value: 4, label: 'D4', color: 'text-amber-600 bg-amber-50' },
  { value: 5, label: 'D5', color: 'text-red-600 bg-red-50' },
  { value: 6, label: 'D6', color: 'text-purple-600 bg-purple-50' },
]

export const CHEMISTRY_TYPE_OPTIONS = [
  { value: '选择题', label: '选择题' },
  { value: '填空题', label: '填空题' },
  { value: '计算题', label: '计算题' },
  { value: '多选题', label: '多选题' },
  { value: '图像分析题', label: '图像分析题' },
  { value: '实验设计题', label: '实验设计题' },
  { value: '无机推断题', label: '无机推断题' },
  { value: '有机推断题', label: '有机推断题' },
  { value: '流程分析题', label: '流程分析题' },
]
