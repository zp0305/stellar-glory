// 知识节点 K06：命题的否定
import type { ConceptData } from './types'

export const K06: ConceptData = {
  id: 'K06',
  title: '命题的否定',
  subtitle: '真假相对的智慧',
  module: '集合与逻辑',
  chapter: '命题的否定',
  difficulty: 2,

  preCheck: [
    {
      question: '命题"∀x∈R, x²>0"的否定是？',
      options: ['A. ∀x∈R, x²≤0', 'B. ∃x∈R, x²≤0', 'C. ∃x∈R, x²>0', 'D. ∀x∈R, x²<0'],
      answer: 'B',
      explanation: '全称命题的否定是存在命题，且谓词取反。',
    },
  ],

  narrative: {
    context: '在反证法中，我们通过否定结论来构造矛盾。',
    confusion: '命题的否定与否定之否定容易混淆。',
    experiment: '比较"p"与"非p"的真假关系。',
    concept: '命题的否定是将判断词取反，保持主语不变。',
    derivation: 'p 真 ⟹ ¬p 假；p 假 ⟹ ¬p 真',
    transfer: '反证法：证明 p 为真，先假设 ¬p 成立，推出矛盾。',
  },

  variations: {
    basic: [
      { label: '简单否定', formula: '¬p', note: '真假相对' },
      { label: '且的否定', formula: '¬(p∧q) ≡ ¬p∨¬q', note: '德·摩根' },
      { label: '或的否定', formula: '¬(p∨q) ≡ ¬p∧¬q', note: '德·摩根' },
    ],
    advanced: [
      { label: '充分条件的否定', note: 'p⇒q 的否定是 p∧¬q' },
      { label: '存在命题的否定', formula: '¬∃x, P(x) ≡ ∀x, ¬P(x)', note: '量词互换' },
    ],
    challenge: [
      { label: '反证法框架', note: '假设¬q，推翻假设，得q成立' },
    ],
  },

  formulas: [
    { name: '否定运算', formula: '¬(p∧q) ≡ ¬p∨¬q', usage: '德·摩根定律' },
    { name: '蕴含否定', formula: '¬(p⇒q) ≡ p∧¬q', usage: '充分条件否定' },
  ],

  selfEval: [
    { question: '"p 且 q"为真时，"非p 或 非q"的真假是？', level: 'A', description: '假' },
  ],

  relatedModels: ['MATH-L02'],
  crossLinks: [],
}
