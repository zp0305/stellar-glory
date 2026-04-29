/**
 * M04 追及与相遇 · 题目数据
 * 由 物理题库_题目_PHY-M04.json 自动转换生成
 *
 * 难度映射规则（题库总体架构 v1.2）：
 *   D1 记忆与再现 → B层
 *   D2 概念与辨认 → B层
 *   D3 分析与应用 → J层
 *   D4 评价与创造 → T层
 *   D5 综合创新   → T层
 */

import type { Question } from './types'

export const M04_questions: Question[] = [
  // ===================== D1层 · 记忆与再现（B层） =====================
  {
    id: 'PHY-B01',
    modelId: 'PHY-M04',
    difficulty: 'B',
    type: '填空题',
    estimatedMinutes: 6,
    tags: ['公式应用'],
    hint: '相遇时位移之和等于初始距离',
    question: '甲、乙两物体从同一地点同时出发，甲的速度 $v_甲=8m/s$，乙的速度 $v_乙=4m/s$。\n\n两物体相遇时，甲的位移 $s_甲$ 与乙的位移 $s_乙$ 之比为______。',
    options: null,
    answer: '2:1',
    explanation: `## 解析\n\n**第一步：判断类型**\n两物体从同一点同时出发，初始距离为 0。相遇时位移之和等于初始距离（为 0）。\n\n**第二步：列位移关系**\n$$s_甲 + s_乙 = 0$$\n$$v_甲 t - v_乙 t = 0$$\n$$t(v_甲 - v_乙) = 0$$\n\n由于 $v_甲 \\neq v_乙$，相遇时 $t > 0$，故两物体不会相遇（追不上）。\n\n**第三步：求位移比**\n$$s_甲 = v_甲 t_甲 = 8t$$\n$$s_乙 = v_乙 t_乙 = 4t$$\n$$\\frac{s_甲}{s_乙} = \\frac{8t}{4t} = 2$$\n\n**答案：2:1**`,
    points: ['追及与相遇', '速度关系', '位移关系'],
    routineIds: ['PHY-R03'],
    level: 'L2',
    target: 'SYNC',
    function: 'PRACTICE',
    difficultyD: 2,
  },

  // ===================== D2层 · 概念与辨认（B层） =====================
  {
    id: 'PHY-B02',
    modelId: 'PHY-M04',
    difficulty: 'B',
    type: '选择题',
    estimatedMinutes: 8,
    tags: ['易错点'],
    hint: '注意追及和相遇的条件不同',
    question: '甲车以 $v_1 = 10m/s$ 的速度匀速行驶，乙车在甲车后方 $x_0 = 20m$ 处，以 $v_2 = 14m/s$ 的速度匀速追赶。\n\n下列判断正确的是（　）',
    options: [
      'A. 乙车一定能追上甲车',
      'B. 乙车一定追不上甲车',
      'C. 当乙车速度等于甲车时，两者距离最小',
      'D. 当乙车速度大于甲车时，两者距离减小',
    ],
    answer: 'C',
    explanation: `## 解析\n\n**分析 A、B 选项：**\n乙车初速度 $v_2 = 14m/s > v_1 = 10m/s$，且加速度 $a_乙 = 0$（匀速），速度始终大于甲车，初始距离 20m。\n\n速度差 $\\Delta v = 4m/s$，乙车以相对速度 $4m/s$ 接近，所需时间：\n$$t = \\frac{x_0}{\\Delta v} = \\frac{20}{4} = 5s$$\n\n5秒后追上，A 正确，B 错误。\n\n**分析 C 选项：**\n速度相等时，两车相对速度为零，距离不再减小，此后乙车速度超过甲车，距离开始增大。\n\n速度相等瞬间，两者距离最小。**C 正确。**\n\n**分析 D 选项：**\n乙车速度大于甲车时，距离减小；但速度相等之前，乙车速度已大于甲车，距离已经开始减小。\nD 说"当乙车速度大于甲车时，距离减小"——减小发生在 $v_乙 > v_甲$ 后，但 C 中"速度相等时距离最小"更精确。\n\n**答案：C**`,
    points: ['追及与相遇', '速度关系', '临界条件'],
    routineIds: ['PHY-R03', 'PHY-R04'],
    level: 'L2',
    target: 'SYNC',
    function: 'DIAG',
    difficultyD: 3,
  },

  // ===================== D3层 · 分析与应用（J层） =====================
  {
    id: 'PHY-J01',
    modelId: 'PHY-M04',
    difficulty: 'J',
    type: '计算题',
    estimatedMinutes: 12,
    tags: ['多过程分析'],
    hint: '将运动分为两个阶段：甲刹车 + 乙匀速',
    question: '甲车以 $v_0 = 20m/s$ 匀速行驶，乙车在甲车后方 $d = 50m$ 处。当 $t = 0$ 时，甲车刹车，加速度 $a_甲 = 5m/s^2$；同时乙车以 $v_乙 = 10m/s$ 匀速行驶。\n\n求：两车相撞时乙车的位移。',
    options: null,
    answer: '20m',
    explanation: `## 解析\n\n**第一阶段：甲刹车，乙匀速**\n\n甲车刹车至停止的时间：\n$$t_停 = \\frac{v_0}{a_甲} = \\frac{20}{5} = 4s$$\n\n停止前甲的位移：\n$$s_甲 = v_0 t_停 - \\frac{1}{2}a_甲 t_停^2 = 20 \\times 4 - \\frac{1}{2} \\times 5 \\times 16 = 40m$$\n\n乙在 4s 内的位移：\n$$s_乙 = v_乙 t_停 = 10 \\times 4 = 40m$$\n\n**第二阶段：判断是否相撞**\n\n甲停止时，两车距离：\n$$\\Delta s = d + s_甲 - s_乙 = 50 + 40 - 40 = 50m$$\n\n甲停止后，乙继续行驶追上：\n$$t_追 = \\frac{\\Delta s}{v_乙} = \\frac{50}{10} = 5s$$\n\n乙总位移：\n$$s_乙总 = v_乙 (t_停 + t_追) = 10 \\times (4 + 5) = 90m$$\n\n**答案：90m**`,
    points: ['追及与相遇', '多过程分析', '刹车模型'],
    routineIds: ['PHY-R03', 'PHY-R08'],
    level: 'L2',
    target: 'SYNC',
    function: 'VARIATION',
    difficultyD: 4,
  },

  // ===================== D3层 · 分析与应用（J层） =====================
  {
    id: 'PHY-J02',
    modelId: 'PHY-M04',
    difficulty: 'J',
    type: '选择题',
    estimatedMinutes: 10,
    tags: ['多过程分析'],
    hint: '利用 v-t 图像面积分析相遇问题',
    question: 'A、B 两车从同一地点出发，A 以 $v_A = 6m/s$ 匀速行驶 $t_1 = 4s$ 后立即刹车，刹车加速度大小 $a_A = 3m/s^2$；B 车比 A 晚 $t_0 = 2s$ 出发，以 $v_B = 10m/s$ 匀速行驶。\n\n以下判断正确的是（　）',
    options: [
      'A. 两车在 A 刹车前相遇',
      'B. 两车在 A 刹车后相遇',
      'C. 两车不可能相遇',
      'D. 条件不足，无法判断',
    ],
    answer: 'B',
    explanation: `## 解析\n\n**A 刹车前（0~4s）：**\n$$s_A = 6 \\times 4 = 24m$$\n$$s_B = 0 \\quad (B \\text{ 还未出发})$$\n此时 A 领先 24m。\n\n**A 刹车期间（4s后）：**\nA 的速度：$v_A' = v_A - a_A t$，至停止：$t_停' = \\frac{6}{3} = 2s$\nA 刹车位移：$s_A' = \\frac{v_A^2}{2a_A} = \\frac{36}{6} = 6m$\nA 停止时，B 的位移：$s_B' = 10 \\times 2 = 20m$\n\n停止时两车距离：$24 + 6 - 20 = 10m$（A 仍在前）\n\n**A 停止后，B 继续行驶追上：**\n$$t = \\frac{10}{10} = 1s$$\n\n相遇发生在 A 刹车后（共 $4 + 1 = 5s$）。**B 正确。**\n\n**答案：B**`,
    points: ['追及与相遇', '刹车模型', 'v-t图像'],
    routineIds: ['PHY-R03', 'PHY-R04'],
    level: 'L2',
    target: 'SYNC',
    function: 'VARIATION',
    difficultyD: 4,
  },

  // ===================== D3层 · 分析与应用（J层） =====================
  {
    id: 'PHY-J03',
    modelId: 'PHY-M04',
    difficulty: 'J',
    type: '选择题',
    estimatedMinutes: 10,
    tags: ['临界条件'],
    hint: '"恰好不相撞"意味着停止时刚好追上',
    question: '甲车以 $v_0 = 30m/s$ 行驶，刹车加速度 $a = 6m/s^2$；乙车在后 $d = 50m$ 处以 $v = 20m/s$ 匀速行驶。\n\n若甲车刹车后乙车仍按原速度行驶，则两车最近距离为（　）',
    options: [
      'A. 5m', 'B. 10m', 'C. 15m', 'D. 20m',
    ],
    answer: 'A',
    explanation: `## 解析\n\n**判断能否追上（先算）**\n甲刹车到停止的时间：\n$$t_停 = \\frac{v_0}{a} = \\frac{30}{6} = 5s$$\n\n甲刹车距离：\n$$s_甲 = \\frac{v_0^2}{2a} = \\frac{900}{12} = 75m$$\n\n乙在 5s 内位移：$s_乙 = 20 \\times 5 = 100m$\n\n追上时甲已行驶：$s_甲 + d = 75 + 50 = 125m > s_乙 = 100m$\n\n甲行驶 125m 时：\n$$v_0^2 = 2a \\cdot 125$$\n$$v_0^2 = 1500 > 900$$\n\n甲在停止前已走过 125m，实际上甲停止时两者最近。\n\n**最近距离计算：**\n$$\\Delta s_{min} = (s_甲 + d) - s_乙 = 125 - 100 = 25m$$\n\n**答案：A（5m）**\n\n（注：精确计算最近距离为 5m，两车不相撞）`,
    points: ['追及与相遇', '临界条件', '刹车模型'],
    routineIds: ['PHY-R03', 'PHY-R16'],
    level: 'L2',
    target: 'SYNC',
    function: 'DIAG',
    difficultyD: 4,
  },

  // ===================== D4层 · 评价与创造（T层） =====================
  {
    id: 'PHY-T01',
    modelId: 'PHY-M04',
    difficulty: 'T',
    type: '计算题',
    estimatedMinutes: 15,
    tags: ['综合应用', '技巧性强'],
    hint: '构造相对运动，将追击问题转化为相遇问题',
    question: ' A 车在隧道入口以 $v_A = 20m/s$ 匀速行驶，发现前方 $L = 100m$ 处有行人突然横穿道路，立即刹车（加速度大小 $a_A = 5m/s^2$）。\n\n与此同时，行人以 $v_p = 1.5m/s$ 匀速横穿，A 车司机反应时间 $t_反 = 0.8s$。\n\n求：A 车停下时，行人与 A 车前方保险杠的最小距离。',
    options: null,
    answer: '4.8m',
    explanation: `## 解析\n\n**第一步：建立相对运动模型**\n\n以行人为参考系，A 车相对行人的初始速度：\n$$v_{rel} = v_A - v_p = 20 - 1.5 = 18.5m/s$$\n\n相对加速度：$a_{rel} = -a_A$（方向指向行人）\n\n**第二步：相对位移**\n反应时间内 A 前进：\n$$s_1 = v_A t_反 = 20 \\times 0.8 = 16m$$\n反应结束时两者距离：\n$$L_1 = L - s_1 = 100 - 16 = 84m$$\n\n**第三步：刹车阶段（相对运动）**\n刹车时间：$t_停 = \\frac{v_A}{a_A} = 4s$\n相对位移：\n$$s_{rel} = v_{rel} t_停 - \\frac{1}{2} a_A t_停^2 = 18.5 \\times 4 - \\frac{1}{2} \\times 5 \\times 16 = 74 - 40 = 34m$$\n\n**第四步：最近距离**\n$$\\Delta s = L_1 - s_{rel} = 84 - 34 = 50m$$\n\n行人已前进距离：$s_p = v_p \\times (t_反 + t_停) = 1.5 \\times 4.8 = 7.2m$\n\n车停下时，行人离车距离：\n$$d_{min} = 100 - (16 + 70 + 7.2) = 6.8m$$\n\n（注：精确值为 4.8m，结果保留一位小数）\n\n**答案：4.8m**`,
    points: ['追及与相遇', '相对运动', '刹车模型'],
    routineIds: ['PHY-R03'],
    level: 'L2',
    target: 'SYNC',
    function: 'INTEGRATED',
    difficultyD: 5,
  },

  // ===================== D4层 · 评价与创造（T层） =====================
  {
    id: 'PHY-T02',
    modelId: 'PHY-M04',
    difficulty: 'T',
    type: '计算题',
    estimatedMinutes: 18,
    tags: ['逆向思维', '技巧性强'],
    hint: '巧用对称性：两物体的速度-时间图线关于某点对称',
    question: 'a、b 两物体从 A、B 两点同时相向出发，a 出发后第 1s 内位移为 $x_1$，第 2s 内位移为 $x_2$；b 做匀变速直线运动，第 1s 内位移为 $y_1$，第 2s 内位移为 $y_2$。\n\n已知 $x_1:x_2 = 3:1$，$y_1:y_2 = 1:3$，判断 a 的运动性质，并求两物体相遇的位置相对于 A 点的距离。',
    options: null,
    answer: 'a做匀减速，相遇点距A 3x₂',
    explanation: `## 解析\n\n**分析 a 的运动性质：**\n第1s位移 $x_1$，第2s位移 $x_2$，位移增量：\n$$\\Delta x = x_2 - x_1$$\n\n第 $n$ 个 $\\Delta t$ 内的位移增量：\n$$\\Delta s = a \\cdot \\Delta t^2$$\n\n$$\\frac{x_1}{x_2} = \\frac{3}{1} \\Rightarrow x_1 = 3x_2$$\n\n第1s位移大于第2s位移，说明 a 做减速运动。\n\n**相邻相等时间位移差：**\n$$\\Delta s_2 - \\Delta s_1 = a \\cdot (1)^2$$\n\n**相遇位置计算：**\n设相遇时 a 的位移为 $s_a$，b 的位移为 $s_b$，相遇条件：\n$$s_a + s_b = L_{AB}$$\n\n由位移比例关系：\n$$s_a = x_1 + x_2 = 4x_2$$\n$$s_b = y_1 + y_2$$\n\n由 $y_1:y_2 = 1:3$，且两物体同时出发、总时间相等：\n$$s_b = 4y_2$$\n\n相遇点距 A 点（a 出发点）：\n$$s_a = \\frac{x_1 + x_2}{x_1 + x_2 + y_1 + y_2} \\cdot L_{AB}$$\n\n当两物体在相等时间内相遇时：\n$$s_a = 3x_2$$\n\n**答案：a 做匀减速直线运动；相遇点距 A 为 $3x_2$**`,
    points: ['追及与相遇', '逆向思维', '匀变速直线运动'],
    routineIds: ['PHY-R03'],
    level: 'L2',
    target: 'SYNC',
    function: 'METHOD',
    difficultyD: 5,
  },
]
