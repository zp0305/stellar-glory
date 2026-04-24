// M01 匀变速直线运动 - 完整七模块
export const M01 = {
  id: 'PHY-M01',
  title: '匀变速直线运动',
  module: '运动学',
  chapter: '运动的描述',
  difficulty: 1,
  subtitle: 'v = v0 + at,  x = v0t + 1/2 at²',
  description: '物体在直线上速度均匀变化,是高中物理第一个完整的动力学模型.',

  // ===== 七模块内容 =====
  // 1. 定位与本质
  positioning: {
    core: '速度均匀变化的直线运动,加速度a是恒定不变的.',
    essence: 'a = (v - v0) / t 为常数,方向与初速度方向共线.',
    keyInsight: '匀变速是「等加速度」运动,加速度不变 = 速度变化快慢均匀.'},

  // 2. 核心原理
  principle: `## 核心公式

**速度-时间关系**
$$v = v_0 + at$$

**位移-时间关系**
$$x = v_0 t + \\frac{1}{2}at^2$$

**速度-位移关系(无t公式)**
$$v^2 - v_0^2 = 2ax$$

**位移-平均速度公式**
$$\\bar{v} = \\frac{v_0 + v}{2}, \\quad x = \\bar{v} \\cdot t$$`,

  // 3. 分层变形
  variations: {
    basic: [
      { label: '匀加速', formula: 'v = v0 + at', note: 'a>0,速度随时间均匀增大' },
      { label: '匀减速', formula: 'v = v0 - at', note: 'a<0,速度随时间均匀减小' },
      { label: '刹车问题', formula: 'x_max = v0²/(2a)', note: '先判停:t_stop = v0/|a|' }],
    advanced: [
      { label: '含位移', formula: 'x = (v² - v0²)/(2a)', note: '不含时间t' },
      { label: '平均速度法', formula: 'x = (v0+v)/2 × t', note: '先算平均速度' },
      { label: '推论式', formula: 'Δx = aT²', note: '相邻相等时间间隔的位移差' }],
    challenge: [
      { label: '多段衔接', formula: 'v前段末 = v后段初', note: '找速度衔接点' },
      { label: '往返运动', formula: '返回原点:v = -v0', note: '对称性' },
      { label: '综合图像', formula: 'v-t图面积=位移', note: '配合图像分析' }]},

  // 4. 知识网络
  knowledgeNetwork: {
    parents: [] as string[],
    children: ['PHY-M02', 'PHY-M03', 'PHY-M04', 'PHY-M05', 'PHY-M06'],
    related: ['PHY-M09'],
    coreFormula: 'v = v0 + at'},

  // 5. 方法论
  methodology: {
    approach: '有t用基本,无t用变形位移,告知v0v用无t公式.',
    decisionTree: [
      '有t?→ 用 v = v0 + at',
      '有x和v?→ 用 v² - v0² = 2ax',
      '有v0,v,t?→ 代入平均速度 x = (v0+v)/2 × t'],
    commonPitfalls: [
      '混淆v和v0:代入时看清楚是初速度还是瞬时速度',
      '刹车忘记判断停止时间:t_stop = v0/|a|',
      '单位不统一:先把所有量换成m/s和s再代入']},

  // 6. 自我检测
  selfCheck: {
    questions: [
      { q: '汽车以20m/s行驶,刹车加速度大小3m/s²,求刹车距离', a: 'x = v0²/(2a) = 400/6 ≈ 66.7m', type: '基础' },
      { q: '物体做匀加速直线运动,初速度4m/s,加速度2m/s²,求第3秒位移', a: 'x = v0t + ½at² = 4×3 + ½×2×9 = 21m', type: '基础' },
      { q: '匀加速物体,第1秒位移6m,第3秒位移14m,求加速度', a: 'Δx = aT² → a = (14-6)/4 = 2m/s²', type: '进阶' }],
    confidenceLevel: 3},

  // 7. 生活应用
  lifeApplication: `## 刹车距离

汽车刹车是匀减速的典型案例.安全停车距离 = 反应距离 + 刹车距离.

**反应距离** = v0 × t反应(t反应约0.5~1s)

**刹车距离** = v0²/(2μg)(μ为摩擦系数,g=9.8m/s²)

超速驾驶时,刹车距离随速度平方增长——时速100km/h的刹车距离是50km/h的4倍!`}
