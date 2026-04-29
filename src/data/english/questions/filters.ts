export const LEVEL_OPTIONS = [
  { value: 'L1', label: 'L1 基础' },
  { value: 'L2', label: 'L2 进阶' },
  { value: 'L3', label: 'L3 挑战' },
];

export const TARGET_OPTIONS = [
  { value: 'SYNC', label: '同步学习' },
  { value: 'EXAM', label: '期中期末' },
  { value: 'GAOKAO', label: '高考专项' },
  { value: 'COMP', label: '竞赛拓展' },
];

export const FUNCTION_OPTIONS = [
  { value: 'PRAC', label: '巩固练习' },
  { value: 'REV', label: '复习检测' },
  { value: 'DIAG', label: '诊断评估' },
  { value: 'REAL', label: '真题演练' },
];

export const DIFFICULTY_OPTIONS = [
  { value: 'B', label: 'B 基础', color: 'bg-green-100 text-green-700' },
  { value: 'J', label: 'J 进阶', color: 'bg-blue-100 text-blue-700' },
  { value: 'T', label: 'T 挑战', color: 'bg-red-100 text-red-700' },
];

export const TYPE_OPTIONS = [
  { value: 'CHOICE', label: '选择题' },
  { value: 'FILL', label: '填空题' },
  { value: 'JUDGE', label: '判断题' },
  { value: 'ANSWER', label: '解答题' },
];

export const DIFF_COLOR: Record<string, string> = {
  B: 'bg-green-100 text-green-700',
  J: 'bg-blue-100 text-blue-700',
  T: 'bg-red-100 text-red-700',
};