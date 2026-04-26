// 分析范式库 R01-R90（物理）
// 编号规则: PHY-R01 ~ PHY-R90
// 来源: strategies.ts 字段迁移，接口对齐施工图 §7.5
// 迁移时间: 2026-04-26
//
// 字段映射（旧→新）:
//   title → name, modelId → model, difficulty → level
//   oneLine → trigger, coreSteps → path
//   commonMistakes → errorMap（结构重组）
//   memoryTip → essence
//   content → 并入 errorMap[].correctPath
//   thinkingMethod/variationWarning → 新增空字符串占位
//   category/applicableTypes → 移除

export interface AnalysisParadigm {
  id: string;              // 范式编号，如 "PHY-R09"
  name: string;            // 范式名称，如 "整体法与隔离法选择"
  model: string;           // 所属模型编号
  thinkingMethod: string;   // 核心思维方法（内容AI补写）
  level: "B" | "J" | "T";  // B=知识掌握, J=思维运用, T=迁移创新
  trigger: string;         // 触发信号
  path: string[];          // 思考路径（3-7步）
  variationWarning: string; // 变式预警（内容AI补写）
  errorMap: {              // 错因图谱
    wrongThinking: string;
    cognitiveRoot: string;
    correctPath: string;
  }[];
  essence: string;         // 本质回溯
}

// difficulty → level 映射
function toLevel(d: 1 | 2 | 3): "B" | "J" | "T" {
  return d === 1 ? "B" : d === 2 ? "J" : "T";
}

// commonMistakes[] → errorMap[]（旧 content 填入 correctPath）
function migrateErrors(
  mistakes: string[],
  essence: string
): AnalysisParadigm["errorMap"] {
  if (!mistakes || mistakes.length === 0) {
    return [{
      wrongThinking: "",
      cognitiveRoot: "",
      correctPath: essence,
    }];
  }
  return mistakes.map((wrong) => ({
    wrongThinking: wrong,
    cognitiveRoot: "",
    correctPath: essence,
  }));
}

export const allParadigms: AnalysisParadigm[] = [

  // ══════════════════════════════════════
  // R01-R10：运动学基础
  // ══════════════════════════════════════

  {
    id: "PHY-R01",
    name: "匀变速公式三步选择法",
    model: "PHY-M01",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "看到匀变速直线运动题，求 v/v₀/a/t/x 任一未知量",
    path: [
      "Step1：列出已知量（v₀、v、a、t、x）",
      "Step2：判断题目给的是速度还是位移",
      "Step3：选公式：给速度→①③；给位移→③；仅给加速度和时间→②",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "死套 v = v₀ + at，忽略题目是否真的给了 v₀",
      "把 x = v₀t + ½at² 和 v² - v₀² = 2ax 混用导致方程数不足",
    ], "核心是识别已知量类型，按\"给什么→选什么\"的信号触发，而非背公式顺序"),
    essence: "公式是工具，题目给的是信号。先把已知量类型分类，再按类型匹配公式。",
  },

  {
    id: "PHY-R02",
    name: "v-t 图像面积法",
    model: "PHY-M01",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "看到 v-t 图像，求位移或比较两物体运动关系",
    path: [
      "Step1：识别 v-t 图线形状（直线/折线/曲线）",
      "Step2：位移 = 图线与 t 轴围成的面积（上方为正，下方为负）",
      "Step3：计算面积时注意拆分成三角形、矩形、梯形的组合",
      "Step4：用面积关系列方程，注意面积正负相抵",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把面积当成了 v·t 的乘积而不是积分，矩形当梯形算",
      "忽略图线下方面积为负，与上方正面积相减",
    ], "面积法把积分运算变成几何运算，关键是\"图线包围的区域\"意识"),
    essence: "v-t 图像的面积 = 位移，几何运算代替微分积分。",
  },

  {
    id: "PHY-R03",
    name: "相对运动换参考系法",
    model: "PHY-M01",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "两物体同时运动，追及或相遇问题中条件复杂",
    path: [
      "Step1：选一个物体为参考系（通常选加速度已知或静止的）",
      "Step2：把另一个物体相对参考系的速度、加速度写出",
      "Step3：转化为参考系中的单一物体问题",
      "Step4：求解后，再换回地面参考系",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "换参考系后忘记改变换物理量（速度、加速度都要换）",
      "选非惯性参考系时忘记加伪力",
    ], "换参考系是\"视角切换\"，换前后物理本质不变，只是描述语言变了"),
    essence: "通过切换观察视角，把双物体问题降级为单物体问题。",
  },

  {
    id: "PHY-R04",
    name: "初零比法解比例问题",
    model: "PHY-M01",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "初速度为零的匀加速直线运动，比较速度、位移、时间比例",
    path: [
      "Step1：确认是初零匀加速，确认求的是哪两个时刻的比例",
      "Step2：记比例公式：v∝t，x∝t²，v∝√x",
      "Step3：设通式：第n个相等时间段的位移比 = 1:3:5:(2n-1)",
      "Step4：套公式，写出比例结果",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"第1s末速度：第2s末速度\"当成\"第1个1s：第2个1s\"的比例",
      "初零比例公式和非初零比例混用",
    ], "初零匀加速有简单整数比例，核心是记住\"1:3:5...\"和\"1:4:9...\"两个核心比"),
    essence: "初零匀加速的比例是自然数列的变形，记牢两个核心比式。",
  },

  {
    id: "PHY-R05",
    name: "追及相遇条件分析法",
    model: "PHY-M01",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "追及或相遇问题，判断能否追上、相遇次数",
    path: [
      "Step1：画草图，标出初始位置、速度方向",
      "Step2：列两物体各自的位移方程（用时间 t 表示）",
      "Step3：令两位移相等，解出 t 代入判断合理性",
      "Step4：检验追上前速度是否已相等（若追不上，判断 v₁=v₂ 时是否共速）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "解出 t 为负或无实根时，没判断\"追不上\"而随便写答案",
      "忽略追上前两物体速度相等这一临界条件",
    ], "追及问题的核心临界是\"共速时刻\"，而不是\"相遇时刻\""),
    essence: "能否追上看速度关系，追上几次看位移差，临界条件是共速时刻。",
  },

  {
    id: "PHY-R06",
    name: "竖直抛体时间对称性",
    model: "PHY-M02",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "竖直上抛运动，已知某时刻的位置或速度，求上升时间或高度",
    path: [
      "Step1：确认对称性：上升时间和下降时间相等",
      "Step2：选全过程公式 v² - v₀² = -2gh 或分阶段处理",
      "Step3：已知抛出点上方某位置的速度，用对称性求另一点速度",
      "Step4：最高点速度为零，v=0 时刻即最高点",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"经过同一点\"的两个速度方向搞反（上升向下看负，下降向上看正）",
      "忽略 g 取负值，直接代入 +10 导致算错",
    ], "竖直抛体的对称性来源于加速度恒定，上升和下降是镜像过程"),
    essence: "加速度恒定 → 运动可逆 → 上升下降时间/速度对称。",
  },

  {
    id: "PHY-R07",
    name: "平抛分解独立性的检验",
    model: "PHY-M02",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "平抛运动求速度方向、位移方向，或已知角度反推初速度",
    path: [
      "Step1：水平方向：匀速直线，x = v₀t",
      "Step2：竖直方向：自由落体，y = ½gt²",
      "Step3：合成：速度方向 tanθ = vy/vx = gt/v₀；位移方向 tanα = y/x",
      "Step4：注意 θ ≠ α，轨迹是曲线，位移方向不等于速度方向",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把速度方向的正切当成 y/x 而不是 vy/vx",
      "混淆\"速度偏向角\"和\"位移偏向角\"，混用 tanθ 和 tanα",
    ], "平抛两方向独立，但合成时必须用同一时刻的 vx 和 vy"),
    essence: "水平竖直独立，合成时注意用同一时刻的量。速度角≠位移角。",
  },

  {
    id: "PHY-R08",
    name: "斜面平抛射程最值分析",
    model: "PHY-M02",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "从斜面顶端平抛，落在斜面上，求射程或初速度最值条件",
    path: [
      "Step1：建坐标系：x轴沿斜面，y轴垂直斜面",
      "Step2：写出落点坐标，用角度条件 tanφ = y/x",
      "Step3：消去时间 t，得到 v₀ 和 φ 的关系",
      "Step4：对 φ 求导或配方，求最值对应的角度",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "用地面坐标系死算，方程复杂无法化简",
      "求导时把 φ 当成变量，但实际 v₀ 才是待求量",
    ], "斜面坐标系的本质是把\"落在斜面\"这个条件变成简单角度关系"),
    essence: "选对坐标系，把几何条件变成代数条件，最值就变成了求导或配方。",
  },

  {
    id: "PHY-R09",
    name: "平抛运动的临界角度法",
    model: "PHY-M02",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "平抛运动恰好擦过某点或恰好落在某边界",
    path: [
      "Step1：识别\"恰好\"对应的几何条件（斜率相等/点在轨迹上/相切）",
      "Step2：用边界条件列方程，替换掉未知量",
      "Step3：判断是恰好擦过还是刚好落在，列判别式或端点条件",
      "Step4：解方程，验证合理性",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "\"恰好\"对应的是边界条件，但容易把它当成普通方程用",
      "判别式 Δ=0 用错对象（是对 t 或 y 的方程，不是对 x 的）",
    ], "\"恰好\"是物理中的临界条件，翻译成数学就是方程的边界值"),
    essence: "\"恰好\" = 边界条件 = 方程取等号或判别式为零。",
  },

  {
    id: "PHY-R10",
    name: "抛体运动中绳子/杆约束的投影分析",
    model: "PHY-M02",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "物体被绳子牵着或杆约束，做圆周或曲线运动",
    path: [
      "Step1：识别约束类型：绳子只能拉，杆可拉可压",
      "Step2：把约束力分解为沿速度和垂直速度方向",
      "Step3：沿速度方向的分力改变速度大小，垂直方向改变方向",
      "Step4：结合能量守恒或功能关系列方程",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "绳子模型中，当 θ>90° 时绳子已松弛，仍按有拉力列方程",
      "混淆绳子和杆的处理方式，杆给的压力仍当拉力处理",
    ], "约束的本质是限制物体的运动空间，但力方向由接触面法向决定"),
    essence: "约束改变运动方向但不凭空产生能量，力做功用投影法分解。",
  },

  // ══════════════════════════════════════
  // R11-R25：力学基础与受力分析
  // ══════════════════════════════════════

  {
    id: "PHY-R11",
    name: "受力分析顺序法",
    model: "PHY-M03",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "任何受力分析题，先判断分析顺序",
    path: [
      "Step1：先分析场力（重力永远先画）",
      "Step2：判断接触面，找弹力（垂直于接触面）和摩擦力（有弹力且相对滑动/趋势）",
      "Step3：最后画已知外力或主动力",
      "Step4：检查所有力都有施力物体，无力来源于被研究对象本身",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"对物体的力\"和\"物体对别的物体的力\"混淆",
      "认为静止在斜面上的物体一定受摩擦力（可能不受）",
    ], "受力分析的顺序是固定的：先场后接触，最后主动。顺序对了，分析不容易漏"),
    essence: "受力分析有标准顺序，按顺序来不漏力。每一力都要找到施力物体。",
  },

  {
    id: "PHY-R12",
    name: "正交分解标准流程",
    model: "PHY-M03",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "斜面上物体受多力作用，求加速度或某个力",
    path: [
      "Step1：建立坐标系（尽量让更多力落在坐标轴上）",
      "Step2：把所有力分解到 x、y 轴",
      "Step3：x 轴用 F=ma，y 轴用平衡（a=0 时 F_y=0）",
      "Step4：解方程，代回原式求目标量",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "分解方向选错：把重力分解到沿斜面和垂直斜面，却用错了坐标系",
      "把 a=0 当成默认条件，在有加速度时仍写 F_y=0",
    ], "坐标系的选取决定运算复杂度，优先让未知力落在轴上"),
    essence: "坐标系选得好，方程就简单。优先让未知力落轴，让已知加速度方向落轴。",
  },

  {
    id: "PHY-R13",
    name: "摩擦力方向三步判断",
    model: "PHY-M03",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "摩擦力方向不确定，或需要判断静摩擦还是动摩擦",
    path: [
      "Step1：先判断是否接触面存在（有弹力才可能有摩擦力）",
      "Step2：判断是静摩擦（无相对滑动趋势）还是滑动摩擦（相对滑动）",
      "Step3：滑动摩擦：方向与相对滑动方向相反",
      "Step4：静摩擦：方向与相对滑动趋势方向相反，大小由其他方程确定",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"物体相对地面的运动方向\"当成摩擦力方向（应该是相对接触面的方向）",
      "认为静摩擦方向一定与运动方向相反",
    ], "摩擦力方向始终由\"相对\"决定，不是由\"运动方向\"决定"),
    essence: "相对谁？相对接触面。滑动摩擦与相对滑动相反，静摩擦与相对趋势相反。",
  },

  {
    id: "PHY-R14",
    name: "整体法与隔离法选择",
    model: "PHY-M04",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "连接体问题（两物体绑在一起或有相同加速度），求内力或外力",
    path: [
      "Step1：判断两物体加速度是否相同（若相同用整体法；若不同只能用隔离法）",
      "Step2：加速度相同 → 整体法：F合 = (m₁+m₂)a，绕过未知内力",
      "Step3：求内力 → 隔离其中一个物体，对它单独列 F=ma",
      "Step4：联合方程求解，验证结果合理性",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "加速度不同（如滑轮连接）时仍用整体法，导致内力求错",
      "隔离时把内力（绳子拉力）当成外力重复计算",
    ], "连接体的关键是判断加速度是否相同——这是选择整体法还是隔离法的信号"),
    essence: "加速度相同用整体求外，加速度不同只能隔离。整体法绕过内力，是简化手段。",
  },

  {
    id: "PHY-R15",
    name: "系统牛顿第二定律",
    model: "PHY-M04",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "多物体系统，有内力和外力同时作用，求系统总加速度或内力关系",
    path: [
      "Step1：明确研究对象是整体，写 F合外 = (Σmᵢ)·a系统",
      "Step2：区分内力和外力：内力成对出现，互为相互作用力，矢量和为零",
      "Step3：列方程时只保留外力，忽略所有成对内力",
      "Step4：求内力时对单个物体列方程，或用分配关系求解",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把绳子内力当成外力写进整体方程（内力不贡献合外力）",
      "多个物体方向不同时，a系统 指的是哪个方向的加速度",
    ], "系统牛顿第二定律的核心是\"合外力=总质量×系统加速度\"，但系统加速度是某个特定方向的"),
    essence: "合外力对应系统加速度，内力成对抵消，方向一致时可直接相加。",
  },

  {
    id: "PHY-R16",
    name: "传送带问题动力学分析",
    model: "PHY-M04",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "传送带上物体运动，判断相对滑动、摩擦力方向，求运动时间",
    path: [
      "Step1：判断初速度方向与传送带速度大小的关系",
      "Step2：假设无摩擦，求相对速度，判断是否能达到共同速度",
      "Step3：达到共速后，摩擦力消失或改变方向",
      "Step4：分段处理，每段用不同动力学方程，注意各段的初始条件",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "忽略物体可能在达到共速前已经离开传送带",
      "全程用一个摩擦力方向，实际上方向可能改变",
    ], "传送带问题的核心是\"共速\"临界，共速前后物理条件发生变化"),
    essence: "传送带问题找共速临界点，分段处理，每段条件独立。",
  },

  {
    id: "PHY-R17",
    name: "板块模型临界判断",
    model: "PHY-M04",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "板块模型中判断是否发生相对滑动，或求摩擦力突变时机",
    path: [
      "Step1：假设两物体一起加速，用最大静摩擦 f_max = μN 求临界加速度 a_c = μg",
      "Step2：比较系统实际加速度 a 与 a_c",
      "Step3：若 a ≤ a_c：一起运动，f 为静摩擦，f = ma",
      "Step4：若 a > a_c：发生相对滑动，分别对两物体列方程",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把最大静摩擦直接当静摩擦用，而不比较 a 和 a_c",
      "相对滑动后仍用 f = μmg 而非 f = μmg（对上面的物体可能是 N<mg）",
    ], "板块临界问题的信号是\"临界加速度\"，求出 a_c 再比较是标准流程"),
    essence: "找临界加速度，比较实际加速度。判断是临界值，不是猜测。",
  },

  {
    id: "PHY-R18",
    name: "等时圆模型速破",
    model: "PHY-M05",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "从竖直圆顶点、圆环上任一点、圆心正上方某点释放小球",
    path: [
      "Step1：识别等时圆的特征：从圆上某点由静止下滑到圆心的物体，时间相同",
      "Step2：确认题目条件是否满足等时圆（圆心的重力加速度分量恒定）",
      "Step3：直接用等时性结论，跳过复杂运动过程推导",
      "Step4：必要时写出周期 T = 2π√(R/g) 验证",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把等时圆结论随意推广到非竖直圆或非静止释放情形",
      "混淆\"等时圆\"和\"等时摆\"的适用条件",
    ], "等时圆是特殊几何结构的特殊结论，核心是 g 的分量在弦方向恒定"),
    essence: "等时圆 = 竖直圆 + 静止释放 + 弦方向运动 → g 投影恒定 → 时间相同。",
  },

  {
    id: "PHY-R19",
    name: "单摆周期公式应用",
    model: "PHY-M05",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "单摆问题求周期、频率，或通过周期求 g/摆长",
    path: [
      "Step1：确认是小角度单摆（θ<5°），可用 T = 2π√(l/g)",
      "Step2：等效摆长 = 悬点到重心的距离，不是绳子长度",
      "Step3：等效 g = g - a（加速向上时等效 g 增大，向下时减小）",
      "Step4：代入公式求目标量，注意单位统一（l 用 m）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把绳子长度当摆长，没加悬点到重心的修正",
      "在非惯性系中直接用 g=9.8，没考虑等效 g 的修正",
    ], "单摆周期的核心是\"等效重力加速度\"，运动在 g_eff 方向"),
    essence: "等效摆长 + 等效 g = 单摆周期公式的两大修正点。",
  },

  {
    id: "PHY-R20",
    name: "竖直平面圆周运动绳杆临界",
    model: "PHY-M05",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "竖直圆周运动最高点或最低点，判断是绳模型还是杆模型，求临界速度",
    path: [
      "Step1：确认模型类型：绳（只能拉）→ 最高点必须有 v ≥ √(gR)；杆（可拉可压）→ 最低速度无限制",
      "Step2：最高点：绳模型用 T + mg = mv²/R，求 T=0 时 v_min = √(gR)",
      "Step3：最低点：用机械能守恒或动能定理，从最高点能量出发",
      "Step4：比较最高点和最低点速度，验证 v₁·v₂ = gR² 关系",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "混淆绳和杆模型：杆模型在最高点可以 v=0，绳不行",
      "在最高点列方程时，把 mg 方向写错（向下应为负，或明确正方向）",
    ], "绳 vs 杆的本质区别：在最高点，杆可以提供支持力，绳不能"),
    essence: "绳模型最高点 v≥√(gR)，杆模型无此限制。关键是判断模型类型再列条件。",
  },

  {
    id: "PHY-R21",
    name: "万有引力三步法",
    model: "PHY-M06",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "万有引力问题，已知轨道半径/线速度/周期之一，求其他量",
    path: [
      "Step1：明确是近地（r≈R）还是远地（r>>R），选对应公式",
      "Step2：近地：用 g=GM/R² 代换；远地：用开普勒第三定律 T²∝r³",
      "Step3：环绕速度 v = √(GM/r)，第一宇宙速度 v₁ = √(gR)",
      "Step4：变轨问题：椭圆轨道用能量守恒，高轨低速大周期",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把近地卫星和同步卫星混用同一公式（周期差很大）",
      "把\"卫星在轨道上\"当成不受重力（仍受万有引力，提供向心力）",
    ], "万有引力=向心力（环绕）=重力（近地），三个力在不同场景下等价"),
    essence: "万有引力提供向心力是核心方程，具体形式看条件。",
  },

  {
    id: "PHY-R22",
    name: "卫星变轨对接分析",
    model: "PHY-M06",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "卫星从低轨道变到高轨道，或椭圆轨道与圆轨道对接",
    path: [
      "Step1：加速变轨：从低轨加速到椭圆转移轨道（离心趋势增大）",
      "Step2：椭圆轨道用开普勒第二定律（面积速度恒定）",
      "Step3：在目标圆轨道远（近）地点再次加速/减速",
      "Step4：比较能量：椭圆轨道能量介于两圆之间，E₁<E<E₂",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "认为变轨只需要一次加速（实际需要两次：入轨和变轨点）",
      "混淆加速后速度反而变小的现象（高轨道环绕速度更低）",
    ], "高轨道环绕速度更低，加速变高轨后瞬时速度下降是正常的"),
    essence: "加速→进入更大轨道→速度反而降低。变轨是椭圆过渡，需要两次点火。",
  },

  {
    id: "PHY-R23",
    name: "双星系统模型",
    model: "PHY-M06",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "两颗恒星互相吸引做圆周运动，求质量比或轨道半径比",
    path: [
      "Step1：明确双星特征：角速度相同，周期相同，轨道圆心在质心",
      "Step2：对每颗星列万有引力=向心力方程：GMm/r² = mω²r₁",
      "Step3：利用 r₁/r₂ = m₂/m₁（轨道半径与质量成反比）",
      "Step4：两方程联立，解出 M₁/M₂ 或 r₁/r₂",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把双星间距当成了各自的轨道半径（实际各绕质心转，半径不同）",
      "两颗星的向心力不相等（各自所需向心力不同，万有引力恰好提供）",
    ], "双星系统的信号是\"两颗星绕同一个点（质心）转\"，而不是绕对方转"),
    essence: "双星同周期，轨道半径与质量成反比。质心是所有计算的基准点。",
  },

  {
    id: "PHY-R24",
    name: "三颗星模型",
    model: "PHY-M06",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "三颗星构成的系统（直线排列或等边三角形），求运动特征或周期",
    path: [
      "Step1：先判断对称性结构：直线排列（中间星受力对称），等边三角形（受力全等）",
      "Step2：直线型：对中间星 F合=0，列两边引力等大反向方程",
      "Step3：等边型：每颗星受另外两颗等大引力的合力指向几何中心",
      "Step4：列牛顿第二定律，用几何关系求合力方向和大小",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把三颗星当成简单叠加，没考虑矢量合成的方向",
      "等边三角形中误以为合力为零（实际上合力指向中心，非零）",
    ], "三颗星问题的核心是受力分析的对称性，利用对称性简化矢量计算"),
    essence: "对称性决定合力方向，利用几何关系把多力合成变成简单角度问题。",
  },

  {
    id: "PHY-R25",
    name: "机车启动两种方式",
    model: "PHY-M07",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "机车启动问题，判断是恒定功率还是恒定加速度启动",
    path: [
      "Step1：识别启动方式：说\"额定功率\"→恒功率；说\"匀加速启动\"→恒加速度",
      "Step2：恒功率：P 恒定 → v↑则 F↓ → a↓ → 最终匀速（a=0）",
      "Step3：恒加速度：a 恒定 → F 恒定 → v↑ → P=Fv↑ → 达额定功率后变功率",
      "Step4：画 v-t 图辅助分析，标出关键拐点（匀速点、变功率点）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "恒功率启动中，认为速度增大后牵引力也增大（实际 F 随 v 反比）",
      "混淆两种启动方式的 v-t 图，把恒功率的曲线当成匀加速的直线",
    ], "恒功率和恒加速度的本质区别：P 恒 vs F 恒，决定了 v-t 图的形状"),
    essence: "恒功率：P 恒 → F∝1/v → 曲线；恒加速度：F 恒 → P 增大 → 直线+曲线。",
  },

  // ══════════════════════════════════════
  // R26-R45：功能关系与能量
  // ══════════════════════════════════════

  {
    id: "PHY-R26",
    name: "求功三法选择",
    model: "PHY-M07",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "求某个力的功或合力的功，条件不同时选不同方法",
    path: [
      "Step1：有力有位移 → 直接用 W = F·l·cosθ",
      "Step2：只有速度变化 → 用动能定理 W合 = ΔEk",
      "Step3：重力、弹簧力 → 用势能变化 W = -ΔEp",
      "Step4：变力或曲线运动 → 优先考虑动能定理或功能关系",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "用 W = Fl cosθ 时，l 必须是力的作用点的位移，不是物体位移（当力作用点固定时）",
      "把\"合力的功\"和\"各力功的代数和\"混淆，前者是合力直接算，后者是分别算再相加",
    ], "求功方法的本质是根据已知条件选择最简路径：力→位移用定义式，速度→动能用定理"),
    essence: "功是能量转化的量度。选哪个公式，取决于已知条件，不取决于背哪个。",
  },

  {
    id: "PHY-R27",
    name: "动能定理单物体应用",
    model: "PHY-M07",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "单个物体受多个力，过程复杂，已知部分力做功和初末速度",
    path: [
      "Step1：明确研究对象和运动过程（初状态、末状态）",
      "Step2：列动能定理：W合 = Ek末 - Ek初",
      "Step3：把所有功分项写出：W重 + W弹 + W摩 + W其他 = ΔEk",
      "Step4：代入已知量，解方程，注意正负号",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "漏掉某个力的功，尤其是重力（随高度变容易忘）",
      "把 W合 当成\"各力做功的绝对值之和\"而非代数和",
    ], "动能定理的核心是\"合外力做功 = 动能变化\"，合外力不是所有外力的矢量和而是所有功的代数和"),
    essence: "动能定理把过程复杂的多力做功，变成初末状态的能量比较。",
  },

  {
    id: "PHY-R28",
    name: "机械能守恒判断",
    model: "PHY-M08",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "判断系统机械能是否守恒，或已知守恒条件求某量",
    path: [
      "Step1：明确研究对象（单个物体还是系统）",
      "Step2：检查是否只有重力、弹力做功（内外部都算）",
      "Step3：若有摩擦力、空气阻力、非弹性碰撞 → 机械能不守恒",
      "Step4：守恒时写 E₁ = E₂ 或 ΔEk = -ΔEp，标好初末状态高度和速度",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "认为\"有摩擦力机械能一定不守恒\"（若摩擦力不做功则仍守恒）",
      "把\"机械能守恒\"和\"动量守恒\"混用（完全不同的条件）",
    ], "机械能守恒的条件是\"只有重力/弹力做功\"，不在于有没有摩擦力，而在于摩擦力做不做功"),
    essence: "只有重力/弹力做功 = 机械能守恒。判断守恒优先于列方程。",
  },

  {
    id: "PHY-R29",
    name: "弹簧能量分析",
    model: "PHY-M08",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "弹簧连接物体问题，判断能量转化或求最大速度/最大势能",
    path: [
      "Step1：识别弹簧状态：原长、压缩、伸长，找加速度为零的平衡位置",
      "Step2：在平衡位置：弹簧势能最小→动能最大（单物体）",
      "Step3：写机械能守恒式：Ep弹 + Ek + Ep重 = 常数",
      "Step4：找极值条件：速度最大/最小 → 加速度为零 → 平衡位置",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"平衡位置\"当成\"弹簧原长位置\"（可能不同，尤其有重力时）",
      "忽视弹簧和物体之间的能量转化，在连接体中漏算弹性势能",
    ], "弹簧问题的关键是找到加速度为零的平衡位置——这是动能最大的位置"),
    essence: "弹簧平衡位置 = 加速度零点 = 动能最大点 = 势能变化拐点。",
  },

  {
    id: "PHY-R30",
    name: "摩擦生热计算",
    model: "PHY-M08",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "有摩擦力做功的问题，需要区分\"摩擦力对物体做的功\"和\"摩擦生热\"",
    path: [
      "Step1：摩擦力对物体做的功：W = f·l（l 是物体相对地面的位移）",
      "Step2：摩擦生热：Q = f·l相（l相 是两接触面相对滑动的距离）",
      "Step3：注意区分：传送带上物体和传送带共同运动时 l相=0，Q=0",
      "Step4：系统能量损失 = 生热量（除转化为其他形式能量外）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把物体位移当成了相对位移，导致生热计算错误",
      "在连接体中，把内力摩擦生热当成系统外力做功处理",
    ], "功和热的公式都有 f·l，但 l 的含义完全不同：一个是地面参考系，一个是接触面参考系"),
    essence: "W 用地面位移，Q 用相对位移。两者不等是能量损耗的来源。",
  },

  {
    id: "PHY-R31",
    name: "子弹打木块模型",
    model: "PHY-M08",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "子弹射入木块，求共同速度、热量、相对位移",
    path: [
      "Step1：判断是否共速（完全非弹性碰撞），若是 → 用动量守恒求共同速度",
      "Step2：列动量守恒：m·v₀ = (m+M)·v共",
      "Step3：求热量 Q = ΔEk（初动能 - 末动能）",
      "Step4：求相对位移 Δx = v₀·t - v共·t，用能量角度 Q = f·Δx 验证",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把子弹的初动能当成系统总动能（忘了加上木块的初始动能）",
      "混淆\"木块位移\"和\"相对位移\"，导致生热量计算错",
    ], "子弹打木块的核心：动量守恒（过程），能量不守恒（损耗成热）"),
    essence: "动量守恒定 v共，能量损耗算 Q，摩擦力乘相对位移得热量。",
  },

  {
    id: "PHY-R32",
    name: "板块系统能量分析",
    model: "PHY-M08",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "板块系统运动后，求系统能量变化、热量、或判断最终状态",
    path: [
      "Step1：先判断是否共速（用临界加速度法或能量比较）",
      "Step2：系统能量变化 = 初机械能 - 末机械能",
      "Step3：内能增加量 Q = f·l相（摩擦力 × 相对位移）",
      "Step4：用能量守恒或功能关系验证：ΔE = -Q",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把两物体各自减小的动能之和当成系统能量损失（忽略了质心动能）",
      "在非共速过程中，没有分段处理能量关系",
    ], "板块系统的能量分析比动量复杂：不仅要算相对位移，还要区分质心动能和内能"),
    essence: "系统能量损失 = 摩擦力 × 相对位移，与质心运动无关。",
  },

  {
    id: "PHY-R33",
    name: "碰撞分类判断",
    model: "PHY-M08",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "碰撞问题，判断是弹性/非弹性/完全非弹性，求碰撞后速度",
    path: [
      "Step1：判断碰撞类型：弹性碰撞（ΔEk=0）；非弹性（ΔEk<0）；完全非弹性（共速）",
      "Step2：完全非弹性 → 动量守恒直接求 v共",
      "Step3：弹性碰撞 → 动量守恒 + 动能守恒，联立两方程",
      "Step4：验证合理性：碰撞后相对速度方向应与碰撞前相反",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"非弹性碰撞\"当成\"完全非弹性碰撞\"（漏判类型导致方法选错）",
      "弹性碰撞直接套公式不验证，结果不符合速度方向要求",
    ], "弹性碰撞的判定是 ΔEk=0，不是\"碰后不粘\"那么简单"),
    essence: "碰撞类型决定方程数量：动量守恒必用，能量守恒看类型。",
  },

  {
    id: "PHY-R34",
    name: "速度增量法解人船模型",
    model: "PHY-M09",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "人船模型（人在船上走，船反向运动），求船位移或人位移",
    path: [
      "Step1：建立动量守恒方程，注意方向：m·v人 + M·v船 = 0",
      "Step2：两边乘 dt 并积分：m·Δx人 - M·Δx船 = 0（因为位移方向相反）",
      "Step3：利用几何关系：Δx人 + Δx船 = L（L为船长，相对不变）",
      "Step4：联立解出 Δx船 = m·L/(m+M)，方向与人运动方向相反",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把 Δx人 + Δx船 = L 写成等号方向搞反（两人位移方向相反，不是相加）",
      "把人的位移当成相对船的位移（实际是相对地面）",
    ], "人船模型的核心是\"系统质心不变\"（无外力），所有位移都是相对地面的"),
    essence: "动量守恒 + 几何约束 = 位移关系。质心不动是结果的物理本质。",
  },

  {
    id: "PHY-R35",
    name: "动量定理全程法",
    model: "PHY-M09",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "变质量问题、流体问题、连续作用问题，求冲击力或平均力",
    path: [
      "Step1：明确研究对象（流体元、粒子团）",
      "Step2：列动量定理：F·Δt = Δp = p末 - p初",
      "Step3：处理连续流体：取一段时间 Δt 内的流体元质量 Δm = ρ·v·S·Δt",
      "Step4：代入求平均力 F = Δm·Δv/Δt，注意方向",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把 Δm 当成总质量而非单位时间内流过的质量",
      "在有重力时，混淆动量定理和动量守恒的适用条件",
    ], "变质量问题的关键是\"选取正确的系统\"——取一段时间内进入/离开的流体元"),
    essence: "动量定理处理变质量，把 Δm·Δv/Δt 变成力，平均冲力即为此式。",
  },

  {
    id: "PHY-R36",
    name: "动量守恒三条件检验",
    model: "PHY-M09",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "系统是否满足动量守恒不确定，或需要判断守恒方向",
    path: [
      "Step1：检查是否受外力 → 若合外力为零，则动量守恒",
      "Step2：若合外力不为零但某一方向合外力为零 → 该方向动量守恒",
      "Step3：碰撞/爆炸/分裂 → 内力远大于外力，近似守恒",
      "Step4：确认守恒后，选正方向，列代数方程（注意速度正负）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"碰撞\"当成动量守恒的充分条件（实际上碰撞中也可能有外力）",
      "不规定正方向，导致符号混乱",
    ], "动量守恒的判定是\"合外力=0\"或\"内力主导\"，不是\"看起来像碰撞\""),
    essence: "动量守恒的条件是合外力为零（或某方向合外力为零），方向要明确正负。",
  },

  {
    id: "PHY-R37",
    name: "反冲与火箭模型",
    model: "PHY-M09",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "火箭喷气、炮弹发射、人跳出船，问速度变化",
    path: [
      "Step1：明确系统：火箭+燃料，初始总质量 m₀，初速度 v₀",
      "Step2：喷气过程用动量守恒（内力）：(M-Δm)·v + Δm·v喷 = M·v₀",
      "Step3：化简后写成微分形式：dv/v = -dm/M（质量减少方向）",
      "Step4：积分求任意时刻速度：v = v₀ + u·ln(m₀/m)（u 为喷气相对速度）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把喷出燃料的速度写成绝对速度而非相对火箭的速度",
      "忘记质量是减少的，用加法而非 ln 关系",
    ], "火箭问题的关键是\"相对速度\"和\"质量减少\"，两者共同决定速度变化"),
    essence: "反冲速度来源于喷出物与主体的速度差，质量减少使速度增长呈对数关系。",
  },

  {
    id: "PHY-R38",
    name: "弹簧连接体动量与能量",
    model: "PHY-M09",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "两物体通过弹簧连接，动量守恒+机械能守恒联合问题",
    path: [
      "Step1：判断系统是否满足动量守恒（合外力为零）",
      "Step2：若守恒，在平衡位置时系统动能最大，弹簧势能最小",
      "Step3：在最大压缩/伸长时，两物体速度相同 → 用动量守恒求共同速度",
      "Step4：联合机械能守恒（弹簧势能全转化），列方程求振幅",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "混淆\"平衡位置\"（动量最大）和\"最大位移处\"（动能为零）的物理条件",
      "把弹簧势能写错：Ep = ½kx²，不是 kx",
    ], "弹簧振子系统：动量守恒决定质心运动，机械能守恒决定振幅"),
    essence: "平衡位置是动能的拐点，最大位移是势能的拐点，动量守恒控制质心。",
  },

  {
    id: "PHY-R39",
    name: "一维碰撞速度求解",
    model: "PHY-M09",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "一维弹性碰撞或完全非弹性碰撞，求碰撞后速度",
    path: [
      "Step1：列动量守恒：m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'",
      "Step2：弹性碰撞加动能守恒（或用速度推导公式 v₁' = (m₁-m₂)/(m₁+m₂)·v₁ + 2m₂/(m₁+m₂)·v₂）",
      "Step3：完全非弹性：v₁' = v₂' = (m₁v₁+m₂v₂)/(m₁+m₂)",
      "Step4：代入已知量求解，验证结果合理性",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "用速度变换公式时代入正负号错误",
      "把弹性碰撞公式记反（m₁ 和 m₂ 位置搞混）",
    ], "碰撞速度公式的推导比记公式更可靠：联立方程是通法"),
    essence: "通法：动量守恒 + 能量守恒 → 两方程两未知数。公式是结果，不是起点。",
  },

  {
    id: "PHY-R40",
    name: "动量守恒与能量守恒的协同使用",
    model: "PHY-M09",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "复杂系统问题，需要同时用动量守恒和能量守恒",
    path: [
      "Step1：先判断哪些过程动量守恒，哪些不守恒（一般碰撞/分裂守恒，爆炸守恒）",
      "Step2：机械能守恒的条件检查：是否只有重力/弹力做功",
      "Step3：分段处理，每个过程单独判断条件",
      "Step4：联立方程时注意：动能变化用 ΔEk，势能变化用 ΔEp，不能混用",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "在有摩擦力时仍用机械能守恒（实际是机械能损失，用功能定理）",
      "把动量守恒和机械能守恒的条件搞混，在弹性碰撞中漏了动能守恒",
    ], "两个守恒定律各有各的条件，先判断再用，不能同时乱用"),
    essence: "动量守恒和能量守恒是两套独立条件，用哪个取决于过程，不取决于题目难不难。",
  },

  {
    id: "PHY-R41",
    name: "电场强度三公式选用",
    model: "PHY-M10",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "已知电荷分布，求某点电场强度，选合适公式",
    path: [
      "Step1：点电荷 → E = kQ/r²，方向沿连线（同种斥、异种吸）",
      "Step2：均匀带电球壳 → 内部 E=0，外部等效于全部电荷集中于球心",
      "Step3：均匀带电平面 → E = σ/(2ε₀)，方向垂直平面（无限大平面）",
      "Step4：叠加原理：多个场源 → 矢量叠加（先分解再合成）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把均匀带电球壳内部的场强当成 kQ/R²（实际为 0）",
      "用叠加原理时忘记是矢量相加，简单代数相加导致错误",
    ], "电场强度公式的选择取决于场源形状，形状决定对称性，对称性决定公式"),
    essence: "点电荷用公式，均匀球对称用等效，平面用σ/2ε₀，叠加用矢量。",
  },

  {
    id: "PHY-R42",
    name: "电场线与等势线关系",
    model: "PHY-M10",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "已知电场线分布，判断电势高低、电场强度大小",
    path: [
      "Step1：沿电场线方向电势降低（判断电势高低）",
      "Step2：电场线密 → E 大；疏 → E 小",
      "Step3：等势线与电场线垂直，且电场线从高电势指向低电势",
      "Step4：等势线密集区对应 E 大，稀疏区对应 E 小",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"沿电场线电势降低\"记成\"沿电场线电势升高\"",
      "混淆 E 大小和 φ 高低：E 大处 φ 变化快，但 φ 本身不一定高",
    ], "电场线和等势线的关系是几何关系：垂直 + 方向指向，结合疏密判断大小"),
    essence: "电场线方向 = 电势降低方向，疏密 = E 大小。等势线与电场线垂直。",
  },

  {
    id: "PHY-R43",
    name: "电场力做功与电势能",
    model: "PHY-M10",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "电荷在电场中移动，求电场力做功或电势能变化",
    path: [
      "Step1：定义法：W = q·E·l·cosθ（恒定电场）",
      "Step2：电势能法：W = q·(φ初 - φ末) = Ep初 - Ep末",
      "Step3：路径无关性：在静电场中，电场力做功与路径无关，只与初末位置有关",
      "Step4：比较 φ 时注意 q 的正负：正电荷在 φ 高处 Ep 大，负电荷相反",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把 W = qU 中的 U 当成电势能（U 是电势差，不是某点的电势）",
      "对负电荷，正负号处理反了",
    ], "电势能的公式 W = qφ 容易记错，关键是正负号都跟着 q 走"),
    essence: "电场力做功 = 电势能减少 = -ΔEp，符号跟着电荷走。",
  },

  {
    id: "PHY-R44",
    name: "带电粒子在电场中运动",
    model: "PHY-M10",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "带电粒子在匀强电场中加速或偏转，求速度、位移、偏转角",
    path: [
      "Step1：加速问题：动能定理 W=Uq = ½mv²，忽略初速度时直接算",
      "Step2：偏转问题：把电场力当重力，分解为 x 匀速、y 匀加速",
      "Step3：偏转位移 y = ½·(qE/m)·t²，偏转角 tanθ = vy/vx",
      "Step4：示波器模型：先加速再偏转，两段运动独立处理",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把加速和偏转当成一个过程处理（实际上偏转电压和加速电压是串联的）",
      "用 qE 代替 mg 时没考虑两者是否在同一数量级",
    ], "带电粒子在电场中的运动本质是牛顿第二定律 + 运动学，类比重力场"),
    essence: "电场中带电粒子运动 = 重力场中物体运动，F=ma 同样适用，区别只是 F=E·q。",
  },

  {
    id: "PHY-R45",
    name: "电容器动态分析",
    model: "PHY-M10",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "电容器连接电源或与电阻串联，分析 U/Q/C/E 变化",
    path: [
      "Step1：先判断电容器是连接电源（U 恒定）还是先充电后断开（Q 恒定）",
      "Step2：U 恒定时：改变间距/正对面积/介质 → C 变 → Q=CU 变，但 U 不变",
      "Step3：Q 恒定时：改变间距/正对面积 → C 变 → U=Q/C 变，但 Q 不变",
      "Step4：E 的判断：U 恒定时 E∝1/d（d 为板间距）；Q 恒定时 E 不变",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "在 U 恒定时把 E 当成不变（实际 E=U/d，d 变则 E 变）",
      "在 Q 恒定时把 U 当成不变（实际 U=Q/C，C 变则 U 变）",
    ], "电容器动态分析的关键是区分\"U 恒定\"和\"Q 恒定\"，两种情况结论相反"),
    essence: "U 恒 → C 变则 Q 变；Q 恒 → C 变则 U 变。E 的变化看 U/d 还是 Q/S。",
  },

  // ══════════════════════════════════════
  // R46-R60：电路与磁场
  // ══════════════════════════════════════

  {
    id: "PHY-R46",
    name: "电阻串并联等效",
    model: "PHY-M11",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "复杂电阻网络化简，求等效电阻",
    path: [
      "Step1：从离电源最远处开始，逐级向内合并",
      "Step2：串联：R = R₁+R₂；并联：1/R = 1/R₁+1/R₂",
      "Step3：对称性化简：等势点合并，电流重新分配",
      "Step4：画等效电路图，逐步化简直到只剩一个等效电阻",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "对称电路中把电势相同的节点当成直接相连（实际不相连）",
      "并联公式记反：以为 1/R = R₁+R₂",
    ], "电阻网络的化简本质是\"电势相同点可以合并，电流守恒\""),
    essence: "找等势点、画等效电路、分级化简，从末端向电源方向处理。",
  },

  {
    id: "PHY-R47",
    name: "欧姆定律与电功率",
    model: "PHY-M11",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "电路分析中求某电阻的功率、电压或电流",
    path: [
      "Step1：先化简电路，等效内阻和外阻",
      "Step2：闭合电路：I = E/(R+r)，U端 = E-Ir",
      "Step3：功率：P=I²R=U²/R=IE，注意区分总功率/输出功率/内耗功率",
      "Step4：最大输出功率：当 R=r 时，P_max = E²/(4r)",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"最大功率\"的条件记成 R=0（那是电流最大，不是功率最大）",
      "混淆 P=I²R 和 P=U²/R 的适用条件（纯电阻才能互化）",
    ], "最大输出功率 R=r 是因为 P_R = E²R/(R+r)²，对 R 求导令导数为零得 R=r"),
    essence: "闭合电路分析两步：先求总电流，再分析各部分功率分配。",
  },

  {
    id: "PHY-R48",
    name: "含电动机的电路分析",
    model: "PHY-M11",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "电路中有电动机（非纯电阻），求电流、效率或功率",
    path: [
      "Step1：区分纯电阻部分（R）和非纯电阻部分（电动机：反电动势 E反）",
      "Step2：对电动机：U = E反 + I·r，输出功率 P机 = E反·I",
      "Step3：电路总功率 P总 = EI，发热功率 P热 = I²(r+R)，效率 η = P机/P总",
      "Step4：列功率平衡方程：EI = I²(r+R) + E反·I",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "对电动机直接用 P=I²R，漏掉了反电动势的分压",
      "把电动机的\"额定功率\"当成实际工作功率",
    ], "电动机的核心是\"反电动势\"——这是它与纯电阻的本质区别"),
    essence: "电动机：U = E反 + Ir，欧姆定律不直接适用。能量转化：电功率→机械功率+热功率。",
  },

  {
    id: "PHY-R49",
    name: "电表改装与校准",
    model: "PHY-M11",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "把灵敏电流计改装为电压表或大量程电流表",
    path: [
      "Step1：电流表改装电压表：串联分压电阻 R = (U/g - 1)·Rg",
      "Step2：电流表改装大量程：并联分流电阻 R = Ig·Rg/(I-Ig)",
      "Step3：改装后总内阻会变化（电压表内阻增大，电流表内阻减小）",
      "Step4：校准时注意系统误差来源：表头内阻不准确、分流/分压电阻温漂",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"改装电流表\"的分流公式记成串联公式",
      "改装后不更新内阻，导致后续电路分析错误",
    ], "电表改装本质是串并联分压分流，改装后接入电路要替换原表头"),
    essence: "电压表=电流计+串联电阻（分压），电流表=电流计+并联电阻（分流）。",
  },

  {
    id: "PHY-R50",
    name: "磁感应强度三公式选用",
    model: "PHY-M12",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "已知电流或磁体，求某点磁感应强度",
    path: [
      "Step1：直导线：B = k·I/r，k = 2×10⁻⁷ T·m/A",
      "Step2：环形电流：中心 B = k·2πI/r",
      "Step3：长直通电螺线管内部：B = μ₀nI（均匀）",
      "Step4：叠加原理：多个磁场源 → 矢量合成，先分解再合成",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把直导线公式 B = kI/r 中的 k 记成 μ₀/2π（其实数值相等，但记混来源）",
      "把环形电流在中心点的公式当成所有点通用",
    ], "磁场公式同样有适用条件，直导线/环形/螺线管公式不能混用"),
    essence: "磁场公式由场源形状决定，B 的方向用右手螺旋定则。",
  },

  {
    id: "PHY-R51",
    name: "安培力方向与大小",
    model: "PHY-M12",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "通电导线在磁场中受安培力，求力的大小或方向",
    path: [
      "Step1：方向：左手定则——磁感线穿手心，四指指向电流方向，大拇指为受力方向",
      "Step2：大小：F = BIL·sinθ（θ 为 B 与 I 的夹角）",
      "Step3：若 B 与 I 垂直 → F = BIL（最大）；平行 → F = 0",
      "Step4：若导线在斜面上，注意分解安培力到水平和垂直方向",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把左手定则和右手定则搞混（安培力是左手，电磁感应是右手）",
      "在求力大小时，误把导线长度当成有效长度（实际是投影到垂直于 B 的方向）",
    ], "左手定则判断力方向：磁场穿掌心，电流穿四指，大拇指指受力"),
    essence: "左手定则定方向，F=BIL sinθ 定大小，有效长度是垂直于 B 的投影。",
  },

  {
    id: "PHY-R52",
    name: "洛伦兹力五步分析",
    model: "PHY-M12",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "带电粒子在磁场中运动，求半径、周期或速度分量",
    path: [
      "Step1：确认是匀强磁场区域，v ⊥ B（若不垂直，分解 v⊥）",
      "Step2：洛伦兹力提供向心力：qvB = mv²/r → r = mv/(qB)",
      "Step3：周期 T = 2πm/(qB)（与 v 和 r 无关，仅由 m/q 和 B 决定）",
      "Step4：若磁场区域有限，结合运动学求偏转角和时间",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把半径公式记成 r = Bv/qm（分子分母颠倒）",
      "误以为周期 T 与速度 v 有关（实际无关，这是回旋加速器的原理）",
    ], "洛伦兹力永不做功（方向始终垂直于 v），只改变运动方向，不改变速度大小"),
    essence: "洛伦兹力提供向心力，所以 r = mv/(qB)，T = 2πm/(qB)，均与 v 无关。",
  },

  {
    id: "PHY-R53",
    name: "带电粒子在组合场运动",
    model: "PHY-M12",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "带电粒子先经过电场加速，再进入磁场偏转（速度选择器、质谱仪）",
    path: [
      "Step1：电场区：用动能定理求进入磁场的速度：qU = ½mv²",
      "Step2：交界处：速度方向是进入磁场的初方向，决定圆心位置",
      "Step3：磁场区：r = mv/(qB)，T = 2πm/(qB)，确定落点",
      "Step4：多过程问题画轨迹草图，标出速度方向和关键半径",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把电场加速的末速度直接当 v₀ 用，没用动能定理算",
      "在复合场中把重力漏掉（微观粒子一般忽略，重粒子如油滴要考虑）",
    ], "复合场问题的关键是各场独立处理，通过速度 v 联系各段"),
    essence: "电场给速度，磁场定轨迹，磁区边界定落点。多段独立，接口是速度。",
  },

  {
    id: "PHY-R54",
    name: "电磁感应中的电路分析",
    model: "PHY-M13",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "导体棒切割磁感线产生感应电动势，形成闭合电路",
    path: [
      "Step1：识别谁是电源：切割磁感线的导体棒内部是非静电力方向",
      "Step2：感应电动势：E = BLv（导体棒垂直切割；若不垂直，E = BLv sinθ）",
      "Step3：把导体棒当成电源，内阻为 r，判断电流方向（右手定则或楞次定律）",
      "Step4：其余部分当成外电路，按闭合电路欧姆定律分析",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把感应电动势的方向当成导体棒运动方向",
      "混淆\"右手定则\"（发电机）和\"左手定则\"（电动机）的使用场景",
    ], "电磁感应的电路分析本质是把\"切割运动\"翻译成\"电源电动势\""),
    essence: "切割磁感线 = 电源，E = BLv sinθ（θ 为 B 与 v 的夹角）。方向用右手定则。",
  },

  {
    id: "PHY-R55",
    name: "楞次定律应用",
    model: "PHY-M13",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "判断感应电流方向，或判断导体运动趋势",
    path: [
      "Step1：原磁场方向如何变化？（增强/减弱）",
      "Step2：感应电流产生的磁场方向：阻碍原磁场变化（增反减同）",
      "Step3：右手螺旋判断感应电流方向",
      "Step4：从能量角度：感应电流的方向总是使系统能量增加的方向",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"阻碍\"理解成\"阻止\"（实际是\"反抗变化\"，最终仍会变化）",
      "在右手螺旋中，把四指方向和磁场方向搞混",
    ], "楞次定律的本质是能量守恒，感应电流的方向总是抵抗引起感应的原因"),
    essence: "增反减同——原磁通增加时，感应磁场反向；减少时，感应磁场同向。",
  },

  {
    id: "PHY-R56",
    name: "法拉第电磁感应定律求解",
    model: "PHY-M13",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "线圈磁通量变化，求感应电动势大小",
    path: [
      "Step1：通式：E = n·|ΔΦ/Δt|（N 匝线圈则乘 N）",
      "Step2：若 B 恒定，S 变化：E = n·B·|ΔS/Δt|",
      "Step3：若 S 恒定，B 变化：E = n·S·|ΔB/Δt|",
      "Step4：若 B 和 S 都变：分解变化，分别求和",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把 E = nΔΦ/Δt 当成代数式，忘记取绝对值或判断方向",
      "在求瞬时值时把平均值公式当瞬时值用",
    ], "Φ 的变化率是磁通量对时间的导数，平均值和瞬时值公式不同"),
    essence: "E = n|ΔΦ/Δt|，注意是磁通量变化率，不是磁感应强度变化率。",
  },

  {
    id: "PHY-R57",
    name: "交流电四值分析",
    model: "PHY-M13",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "交流电问题求最大值、有效值、平均值、瞬时值",
    path: [
      "Step1：瞬时值：e = E_m·sin(ωt + φ)，按相位关系写",
      "Step2：最大值：E_m = nBSω，与 B_m、S、ω 成正比",
      "Step3：有效值：E = E_m/√2（正弦交流电），注意用于功率和电表的定义",
      "Step4：平均值：Ē = n·ΔΦ/Δt，用于通过电量的计算 Q = n·ΔΦ/R",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"有效值\"当成\"最大值/2\"（实际是除以 √2）",
      "在计算通过电量时用有效值或最大值公式（应该用平均值）",
    ], "交流电四值各有各的用途：有效值算功率，平均值算电量，最大值标称，瞬间值算相位"),
    essence: "有效值用于热功率，平均值用于电量，最大值标设备耐压，瞬时值描述相位。",
  },

  {
    id: "PHY-R58",
    name: "变压器与远距离输电",
    model: "PHY-M13",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "变压器变比问题，或远距离输电中求线路损耗",
    path: [
      "Step1：理想变压器：U₁/U₂ = n₁/n₂，I₁/I₂ = n₂/n₁",
      "Step2：多负载变压器：总功率守恒 P₁ = P₂，注意电流比与匝数比的反比关系",
      "Step3：远距离输电：先求输电电流 I = P/U，再求线路损耗 ΔP = I²·R线",
      "Step4：提高输电电压 → 减小电流 → 减小线路损耗（高压输电原理）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"匝数比\"写成电流比（电流比等于匝数的反比，不是正比）",
      "在远距离输电中把用户电压当成输电电压（实际有线路压降损失）",
    ], "变压器问题的关键是\"功率守恒\"：输入功率 = 输出功率，不是电压直接相等"),
    essence: "高压输电减小电流从而减小 I²R 损耗，升压后降压都要用变压器。",
  },

  {
    id: "PHY-R59",
    name: "LC 振荡电路分析",
    model: "PHY-M13",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "LC 振荡电路中电容器和电感线圈的电量、电流、能量变化",
    path: [
      "Step1：判断初始时刻：电容器充电完毕？放电开始？",
      "Step2：写能量守恒：E电场 + E磁场 = E总（总能量恒定）",
      "Step3：当电场能为零时（电容器放电完毕），磁场能最大 → 电流最大",
      "Step4：周期 T = 2π√(LC)，频率 f = 1/T，与振幅无关",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把 LC 振荡的周期记成 T = 2π√(L/C)（根号内写反了）",
      "认为电场能为零时电路中没有电流（实际上电流最大）",
    ], "电场能最大时磁场能为零，磁场能最大时电场能为零，两者交替转化"),
    essence: "电场能 ⇄ 磁场能，周期由 L 和 C 决定，与振幅和初始条件无关。",
  },

  {
    id: "PHY-R60",
    name: "电磁感应图像分析",
    model: "PHY-M13",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "电磁感应问题中给 B-t 图或 x-t 图，判断 E 或 I 的变化",
    path: [
      "Step1：看横纵坐标：确认哪个量随时间变化",
      "Step2：若给 B-t 图：E = S·|dB/dt|，图中斜率即为 dB/dt",
      "Step3：若给 x-t 图（导体棒运动）：E = BLv，v 即为 x-t 斜率",
      "Step4：根据 E 变化判断 I 变化（I = E/R），再判断安培力方向和大小",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把 B-t 图的斜率当成感应电动势（漏乘面积 S）",
      "把导体运动方向和感应电流方向混淆",
    ], "图像问题的关键是\"斜率 = 变化率\"，B-t 斜率是 dB/dt，x-t 斜率是 v"),
    essence: "图像斜率 = 物理量的变化率，乘以面积/长度等系数得到感应量。",
  },

  // ══════════════════════════════════════
  // R61-R75：电磁波与光
  // ══════════════════════════════════════

  {
    id: "PHY-R61",
    name: "折射率与光路计算",
    model: "PHY-M14",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "已知折射率或入射角，求折射角、光速、比值",
    path: [
      "Step1：折射定律：n₁sinθ₁ = n₂sinθ₂",
      "Step2：光从光疏到光密：sinθ₂ < sinθ₁ → 折射角小于入射角",
      "Step3：光速关系：v = c/n，频率不变，波长 λ 随 n 增大而减小",
      "Step4：全反射条件：sinC = 1/n，光从光密到光疏且 θ入 > C",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"光疏\"和\"光密\"搞混（n 大 = 光密，v 小）",
      "在求全反射临界角时用反三角 sinC = n（正确为 1/n）",
    ], "折射率 n 的本质是\"光速变慢的程度\"：n = c/v > 1"),
    essence: "光疏到光密：v 减小，λ 减小，θ 减小，sinθ 比值守恒。",
  },

  {
    id: "PHY-R62",
    name: "全反射棱镜应用",
    model: "PHY-M14",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "全反射棱镜、玻璃砖的光路分析，求出射光方向或位移",
    path: [
      "Step1：判断光从玻璃到空气是否满足全反射条件（θ入 > arcsin(1/n)）",
      "Step2：若全反射：用反射定律（入射角 = 反射角）",
      "Step3：若不发生全反射：用折射定律 n₁sinθ₁ = n₂sinθ₂",
      "Step4：平行板玻璃砖：入射光与出射光平行，侧移 Δx = d·sin(θ₁-θ₂)/cosθ₂",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把全反射当成\"光完全消失\"（实际是100%反射，只是没有折射光）",
      "在玻璃砖侧移公式中，把 d 当成总厚度而非垂直厚度",
    ], "全反射棱镜的信号是\"入射角大于临界角\"，此时只发生反射，不发生折射"),
    essence: "全反射 = 无折射 = 纯反射，入射角=反射角。玻璃砖侧移 = 光程差的几何体现。",
  },

  {
    id: "PHY-R63",
    name: "光的干涉条纹计算",
    model: "PHY-M14",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "双缝干涉或薄膜干涉，求条纹间距或某处是明纹还是暗纹",
    path: [
      "Step1：双缝干涉：Δx = λD/d，明纹条件 ΔL = kλ，暗纹条件 ΔL = (2k+1)λ/2",
      "Step2：其中 ΔL = |r₂ - r₁| ≈ (d/D)·x（近轴近似）",
      "Step3：薄膜干涉：光程差 δ = 2nd·cosθ ± λ/2（半波损失判断）",
      "Step4：注意半波损失：光从光疏到光密反射时相位突变，加 λ/2",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "在薄膜干涉中漏加半波损失（光从空气到薄膜算一次，从薄膜到空气不算）",
      "把\"条纹间距\"和\"光程差\"公式记混",
    ], "干涉的核心是光程差 ΔL，条纹类型由 ΔL/λ 的整数/半整数关系决定"),
    essence: "干涉是光程差的体现：ΔL = kλ → 明纹；ΔL = (2k+1)λ/2 → 暗纹。",
  },

  {
    id: "PHY-R64",
    name: "光的衍射与干涉综合",
    model: "PHY-M14",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "判断光通过不同障碍物后的图样（单缝/圆孔/光栅）",
    path: [
      "Step1：明确衍射类型：单缝 → 中央明纹最亮，两侧对称变暗；圆孔 → 艾里斑",
      "Step2：单缝中央明纹宽度：Δx = 2λf/a；a 越小，衍射越明显",
      "Step3：光栅：主极大条件 d·sinθ = kλ，缺级条件 d'=d/k' 时该级次消失",
      "Step4：干涉和衍射同时存在时，先分别处理，再叠加效果",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"光栅缺级\"当成\"光消失了\"（实际是某些级次因单缝衍射最小值恰好落在该位置而不可见）",
      "混淆光栅干涉和双缝干涉的公式（光栅用 d = a+b，双缝用 d = 两缝间距）",
    ], "衍射和干涉的区别：干涉是有限多束光叠加，衍射是同一束光通过无限多子源"),
    essence: "干涉条纹清晰、光栅分辨力强；衍射决定单缝/圆孔的通光能力。",
  },

  {
    id: "PHY-R65",
    name: "光电效应方程应用",
    model: "PHY-M15",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "光电效应问题，已知入射光频率或波长，求遏止电压或最大初动能",
    path: [
      "Step1：光电方程：E = hν - W₀（遏止电压 U_c = E_max/e）",
      "Step2：极限频率 ν₀ = W₀/h（低于此频率无论光强多大都不发生光电效应）",
      "Step3：最大初动能：E_km = eU_c = hν - hν₀",
      "Step4：光强决定光子数量（影响饱和光电流），频率决定能否发生光电效应",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"光强\"当成决定是否发生光电效应的因素（实际是频率）",
      "把遏止电压当成电动势代入电路（遏止电压是使光电流为零的电压）",
    ], "光电效应的三个决定：频率决定能否发生，光强决定光电流大小，遏止电压决定最大初动能"),
    essence: "光电效应：光子能量 = 逸出功 + 动能。频率不够，能量不足，再强光也没用。",
  },

  {
    id: "PHY-R66",
    name: "氢原子光谱与能级跃迁",
    model: "PHY-M15",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "氢原子跃迁问题，已知能级或谱线，求吸收/辐射光子能量",
    path: [
      "Step1：能级公式：E_n = -13.6/n² eV（n 越大，能级越高，越接近 0）",
      "Step2：吸收光子：从低能级到高能级，能量增加 ΔE = E高 - E低",
      "Step3：辐射光子：从高能级到低能级，能量减少 ΔE = E高 - E低 = hν",
      "Step4：巴尔末系：可见光区对应 n≥3 → n=2 的跃迁",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把能级能量当成正数（实际为负，n 越大 E 越大即越接近 0）",
      "把\"吸收光子\"和\"辐射光子\"的符号搞反",
    ], "能级为负数，n 增大则能量增大（更接近 0），跃迁时 ΔE 总是 E初 - E末"),
    essence: "E_n = -13.6/n² eV。吸收：ΔE > 0；辐射：ΔE < 0。",
  },

  {
    id: "PHY-R67",
    name: "核反应方程配平",
    model: "PHY-M15",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "核反应方程，已知部分产物，求未知粒子或质量亏损",
    path: [
      "Step1：质量数守恒：左边总质量数 = 右边总质量数",
      "Step2：电荷数守恒：左边总核电荷数 = 右边总核电荷数",
      "Step3：由质量数和电荷数确定未知粒子种类（α = ⁴₂He，β = ⁰₋₁e 等）",
      "Step4：计算质量亏损 Δm = 反应前总质量 - 反应后总质量，释放能量 E = Δm·c²",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把 α 衰变写成 ⁴₂He⁺（不应带正号）或把 β 衰变写成 ⁰₋₁e⁻（不应带负号）",
      "在计算质量亏损时，用错了质量数守恒（质量数守恒 ≠ 质量守恒）",
    ], "核反应方程的守恒是质量数和电荷数守恒，不是质量守恒（有质量亏损）"),
    essence: "质量数守恒、电荷数守恒，质量亏损是能量来源：E = Δm·c²。",
  },

  {
    id: "PHY-R68",
    name: "衰变规律与半衰期",
    model: "PHY-M15",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "放射性衰变问题，已知半衰期，求剩余质量或衰变时间",
    path: [
      "Step1：半衰期公式：m = m₀·(½)^(t/T)（T 为半衰期）",
      "Step2：已知半衰期和剩余质量，反求时间：t = T·log₂(m₀/m)",
      "Step3：若给定的是衰变常数 λ：N = N₀·e^(-λt)，λ = ln2/T",
      "Step4：注意：半衰期与原子总数无关（统计规律），单个原子衰变时间不确定",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把半衰期当成\"每个原子存活时间的平均值\"（这是错误的，单个原子衰变完全随机）",
      "在半衰期内直接减半，忽略非整数次半衰期的指数衰减",
    ], "半衰期是统计概念，适用于大量原子集合，不适用于单个原子"),
    essence: "半衰期是指数衰减，不是线性减半。m = m₀·(½)^(t/T)。",
  },

  {
    id: "PHY-R69",
    name: "动量与能量综合分析（光电/核反应）",
    model: "PHY-M15",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "光子或粒子碰撞问题，同时满足动量守恒和能量守恒",
    path: [
      "Step1：光电效应中：光子能量 hν = E_k + W，逸出电子动量 p_e = √(2mE_k)",
      "Step2：光子动量 p_γ = h/λ = hν/c",
      "Step3：核反应中：质量亏损 Δm → 能量释放 E = Δm·c²，部分变为动能",
      "Step4：列出动量守恒和能量守恒方程组，联立求解",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把光子能量当动能直接代入力学公式（光子无质量）",
      "在康普顿时忘记动量守恒的能量修正",
    ], "光子碰撞问题的关键是用光子动量 p = h/λ，光子能量 E = pc（光子特有）"),
    essence: "光子：E = pc，p = h/λ。核反应：动量守恒 + 能量守恒，联立求解。",
  },

  {
    id: "PHY-R70",
    name: "光的粒子性综合",
    model: "PHY-M15",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "光电效应和康普顿效应综合问题，比较光子能量和动量",
    path: [
      "Step1：光电效应：光子能量完全被电子吸收（全部能量转化为电子动能）",
      "Step2：康普顿效应：光子与电子碰撞，部分能量转移（散射光频率降低）",
      "Step3：计算波长变化 Δλ = h/(m_ec)·(1-cosθ)（康普顿公式）",
      "Step4：比较两种效应的条件：光电效应发生在原子外层电子（束缚电子），康普顿在自由电子",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把两种效应当成同一回事（光电效应要求光子能量≥逸出功，康普顿没有此限制）",
      "把康普顿公式中的 m 记成电子质量（正确）但忘了 h/(m_ec) = 2.43×10⁻¹² m",
    ], "光电效应是光子被吸收（光子消失），康普顿是光子被散射（光子存在但能量减少）"),
    essence: "光电效应：光子被完全吸收，电子跑出来；康普顿：光子被撞飞，能量减少。",
  },

  // ══════════════════════════════════════
  // R71-R80：综合与应用
  // ══════════════════════════════════════

  {
    id: "PHY-R71",
    name: "弹簧双振子模型",
    model: "PHY-M09",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "两个物体通过弹簧连接，在光滑水平面上运动",
    path: [
      "Step1：系统不受外力 → 质心速度不变，以质心为参考系",
      "Step2：在质心系中，两物体做简谐运动，周期 T = 2π√(μ/k)，μ 为约化质量",
      "Step3：振幅由初始条件决定：A₁ = m₂L/(m₁+m₂)（L 为弹簧初始压缩量）",
      "Step4：两物体速度关系：m₁v₁ + m₂v₂ = (m₁+m₂)v_c",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把振子周期当成 T = 2π√(m/k)（应该用约化质量 μ = m₁m₂/(m₁+m₂)）",
      "忘记质心速度不变，把质心当成了固定点",
    ], "弹簧双振子的有效质量是约化质量，不是总质量"),
    essence: "约化质量 μ = m₁m₂/(m₁+m₂)，弹簧振动的等效质量是 μ，不是总质量。",
  },

  {
    id: "PHY-R72",
    name: "传送带能量流分析",
    model: "PHY-M04",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "传送带系统求总能量转化、效率或最终速度",
    path: [
      "Step1：判断物体和传送带的最终状态：共速还是继续相对滑动？",
      "Step2：物体动能增加 ΔEk = ½m(v共²-v₀²)",
      "Step3：传送带消耗电能 = f·l带（l带 为传送带总位移），转化为热和物体动能",
      "Step4：效率 η = ΔEk物体 / E耗，传送带效率通常较低（大部分能量变为热）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把传送带消耗的电能当成物体动能增加（实际大部分是摩擦热）",
      "计算传送带位移时用了错误的相对位移而非绝对位移",
    ], "传送带是能量消耗型装置，电能→物体动能+摩擦热，效率不可能100%"),
    essence: "电能 = 物体动能 + 摩擦热。传送带效率低，核心能耗在摩擦热。",
  },

  {
    id: "PHY-R73",
    name: "磁场偏转与速度选择器",
    model: "PHY-M12",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "速度选择器或磁流体发电机，求电场和磁场的平衡条件",
    path: [
      "Step1：速度选择器：当 qE = qvB 时，粒子直线通过（不受力）",
      "Step2：满足 v = E/B 的粒子才能通过，与电荷量和质量无关",
      "Step3：磁流体发电机：导电液体流过磁场，两极板间产生电压",
      "Step4：霍尔效应：导体/半导体中，电流垂直磁场时产生横向电势差",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把速度选择器中\"能通过\"的条件当成 v = B/E（写反了）",
      "混淆磁流体发电机的电压方向（洛伦兹力把正负离子分离到两极板）",
    ], "速度选择器的信号是\"电力和磁力平衡\"，v = E/B 是平衡条件"),
    essence: "速度选择器：qE = qvB → v = E/B，粒子直线通过，与 q/m 无关。",
  },

  {
    id: "PHY-R74",
    name: "回旋加速器原理分析",
    model: "PHY-M12",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "回旋加速器问题，求最大速度、能量或加速次数",
    path: [
      "Step1：最大动能：E_km = ½mv_m²，v_m = qBR/m（R 为 D 盒半径）",
      "Step2：周期 T = 2πm/(qB)，与 v 和 R 无关（这是能持续加速的关键）",
      "Step3：交流电频率必须匹配 f = qB/(2πm)，否则加速效率降低",
      "Step4：考虑相对论效应：m 随速度增大，加速器不能无限加速",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把回旋周期当成 T = 2π√(m/k)（那是弹簧振子公式）",
      "忽略相对论效应，认为粒子能量可以无限增加",
    ], "回旋加速器的核心是\"周期与速度无关\"，但这个结论在接近光速时失效"),
    essence: "T = 2πm/(qB)，与 v 无关是加速条件，v_max = qBR/m 是最终限制。",
  },

  {
    id: "PHY-R75",
    name: "光学的波动性与粒子性统一",
    model: "PHY-M14",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "综合光学问题，同时涉及干涉、衍射、光电效应",
    path: [
      "Step1：判断是哪类光学现象：干涉/衍射 → 波动性；光电效应/康普顿 → 粒子性",
      "Step2：波动性用 λ 和 ν 描述，粒子性用 E 和 p 描述，两者通过 E= hν，p = h/λ 联系",
      "Step3：在双缝干涉中，条纹是波动叠加结果，光子到达屏的概率分布是粒子性体现",
      "Step4：用德布罗意波长比较宏观和微观尺度：λ = h/p，宏观物体 λ 极小不可观测",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把光的\"粒子性\"理解为\"光子是小球\"（实际是量子化能量单位）",
      "混淆\"光子有动量 p = h/λ\"和\"光子有质量 m = h/(λc)\"（静质量为0）",
    ], "光的波粒二象性：干涉衍射是波动性，光电效应是粒子性，两者互补不矛盾"),
    essence: "光既是波又是粒子，λν 联系两者。宏观看波动性，微观看粒子性。",
  },

  // ══════════════════════════════════════
  // R76-R90：难题与竞赛补充
  // ══════════════════════════════════════

  {
    id: "PHY-R76",
    name: "碰撞中的速度交换分析",
    model: "PHY-M09",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "两物体弹性碰撞后速度计算，或完全非弹性碰撞共速分析",
    path: [
      "Step1：弹性碰撞：记住一维速度变换公式，代入即可",
      "Step2：若为同质量弹性正碰：交换速度",
      "Step3：完全非弹性碰撞：v共 = (m₁v₁+m₂v₂)/(m₁+m₂)",
      "Step4：求碰撞中机械能损失 ΔE = E初 - E末 = ½μv_rel²（μ 为约化质量）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"交换速度\"当成普遍规律（仅限同质量弹性正碰）",
      "完全非弹性碰撞后用动能守恒（实际只有动量守恒）",
    ], "碰撞中机械能损失公式 ΔE = ½μv_rel² 适用于任何碰撞类型"),
    essence: "碰撞通用：动量守恒确定总速度，约化质量 μ = m₁m₂/(m₁+m₂) 决定能量损失。",
  },

  {
    id: "PHY-R77",
    name: "非惯性系中的等效重力",
    model: "PHY-M03",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "系统有加速度（电梯/车厢），在非惯性系中分析力学问题",
    path: [
      "Step1：在非惯性系中，引入惯性力 F_i = -m·a₀（方向与加速度相反）",
      "Step2：等效重力加速度 g' = g - a₀（在加速升降的电梯中）",
      "Step3：在加速车厢中：等效 g' 方向不竖直，物体平衡位置会改变",
      "Step4：结合平衡条件或牛顿第二定律分析，静止时 F合' = 0",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把惯性力的方向记反（应该与系统加速度方向相反）",
      "把\"等效 g\"当成真正的重力加速度（只是在分析时用 g' 代替 g）",
    ], "非惯性系中加惯性力，本质是把加速度的效果"假装"成重力场"),
    essence: "非惯性系：引入 F_i = -ma₀，之后就可以用常规力学方法处理。",
  },

  {
    id: "PHY-R78",
    name: "变质量问题火箭推力",
    model: "PHY-M09",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "变质量问题（火箭喷气、流水、链条落下），求推力或速度",
    path: [
      "Step1：选系统：用动量定理，对变质量系统有 F外 = d(mv)/dt",
      "Step2：对火箭：d(mv)/dt = v_rel·dm/dt（齐奥尔科夫斯基公式的微分形式）",
      "Step3：积分求速度：v = v₀ + u·ln(m₀/m)（u 为喷气相对速度）",
      "Step4：推力 F = u·|dm/dt|（注意是单位时间喷出的质量乘相对速度）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "对链条问题，把链条元质量写成 λv·dt 而非 λ·dx",
      "把\"相对速度\"当成喷气绝对速度",
    ], "变质量问题的关键是选好系统，对流出/流入系统的那部分质量单独处理"),
    essence: "变质量核心：d(mv)/dt = F外，正确写出 dm/dt 是解题关键。",
  },

  {
    id: "PHY-R79",
    name: "带电粒子在复合场中的螺旋运动",
    model: "PHY-M12",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "带电粒子在匀强电场和磁场叠加区域运动",
    path: [
      "Step1：分解速度：v⊥（垂直 B）分量产生圆周运动，v∥（平行 B）分量做匀速直线",
      "Step2：合成效果：螺旋线运动，螺距 h = v∥·T = v∥·2πm/(qB)",
      "Step3：若同时有匀强电场 E：沿 E 方向有加速度 a = qE/m，加在 v∥ 上",
      "Step4：周期 T 与 v 无关，螺距 h 与 v∥ 成正比",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把螺旋运动当成圆周运动（漏了 v∥ 方向的直线分量）",
      "把螺距公式中的周期记错（应为 T = 2πm/(qB)）",
    ], "螺旋运动 = 圆周（v⊥）+ 直线（v∥），两者独立叠加"),
    essence: "速度分解到垂直和平行 B 的方向，垂直分量管圆周，平行分量管螺距。",
  },

  {
    id: "PHY-R80",
    name: "电容器的动态电容变化",
    model: "PHY-M10",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "电容器电路中，改变电容值，分析各物理量的连锁变化",
    path: [
      "Step1：先判断电路状态：电容器是否与电源直接相连",
      "Step2：U 恒定（C 变→Q 变）时：C = εS/(4πkd) → d↑→C↓→Q↓",
      "Step3：Q 恒定（C 变→U 变）时：U = Q/C → C↓→U↑",
      "Step4：连锁分析：每次改变后重新检查平衡条件（电容器开路时 Q 不变）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "在 Q 恒定时，误以为 U 也保持不变",
      "把电容器\"充电后断开\"和\"始终连接电源\"两种情况混淆",
    ], "电容器动态分析的核心是\"谁不变\"：连电源 U 不变，断开后 Q 不变"),
    essence: "连电源 U 不变，断开后 Q 不变。先判断条件，再列关系式。",
  },

  {
    id: "PHY-R81",
    name: "交变电流有效值定义应用",
    model: "PHY-M13",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "非正弦交流电求有效值，或利用有效值计算电功率",
    path: [
      "Step1：有效值定义：让交变电流和直流电通过相同电阻，在相同时间内产生相同热量",
      "Step2：数学表达式：I²R·T = ∫₀ᵀ I(t)²R·dt → I_rms = √(1/T·∫₀ᵀ I(t)²dt)",
      "Step3：正弦波：I_rms = I_m/√2；方波：I_rms = I_m",
      "Step4：求非正弦波有效值：分段计算 ∫I²dt 再开根号",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把有效值当成最大值的一半（非正弦波不一定）",
      "在计算非正弦波功率时，直接把有效值代入 P = I²R 而不重新积分",
    ], "有效值是用能量等效定义的，必须通过热量相等来理解"),
    essence: "有效值是热效应等效：相同时间相同电阻产生相同热量的直流值。",
  },

  {
    id: "PHY-R82",
    name: "光的全反射临界条件",
    model: "PHY-M14",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "判断光是否发生全反射，或求全反射临界角",
    path: [
      "Step1：判断光路：从光密到光疏才有全反射可能",
      "Step2：求临界角：sinC = 1/n = n₂/n₁（n₁>n₂）",
      "Step3：若入射角 θ > C → 全反射；θ < C → 部分折射",
      "Step4：全反射时反射光强度等于入射光（理想情况下）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把 sinC = 1/n 记成 sinC = n（反过来）",
      "认为全反射时\"没有光\"（实际是100%反射，没有折射光）",
    ], "全反射的条件：光密到光疏 + 入射角大于临界角，两者缺一不可"),
    essence: "sinC = 1/n（从光密到光疏），临界角由折射率决定。",
  },

  {
    id: "PHY-R83",
    name: "杨氏双缝干涉实验分析",
    model: "PHY-M14",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "双缝干涉实验问题，条纹位置、间距或条纹变化",
    path: [
      "Step1：明纹条件：ΔL = kλ → x = kλD/d",
      "Step2：暗纹条件：ΔL = (2k+1)λ/2 → x = (2k+1)λD/(2d)",
      "Step3：条纹间距 Δx = λD/d，D 是双缝到屏距离，d 是双缝间距",
      "Step4：变化分析：λ↑→Δx↑；d↑→Δx↓；D↑→Δx↑",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把\"第 k 级明纹\"的 k 从 0 开始还是从 1 开始搞混（k=0 是中央明纹）",
      "在计算\"第 k 级\"时用了错误的 ΔL 公式",
    ], "双缝干涉的零级明纹（k=0）在几何中心，其他级次对称分布"),
    essence: "Δx = λD/d，λ 越大、缝越近、屏越远，条纹越疏。",
  },

  {
    id: "PHY-R84",
    name: "薄膜干涉厚度计算",
    model: "PHY-M14",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "薄膜干涉问题，已知条纹类型（明/暗），求膜厚度",
    path: [
      "Step1：判断光程差 δ = 2nd·cosθ + λ/2（加 λ/2 因为从光疏到光密反射有半波损失）",
      "Step2：入射光垂直入射时 cosθ ≈ 1，δ = 2nd ± λ/2",
      "Step3：明纹：2nd = (kλ - λ/2)（k=1,2,3...）",
      "Step4：暗纹：2nd = kλ（k=0,1,2...）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "忘记加 λ/2 的半波损失修正，导致厚度算错",
      "把\"增透膜\"和\"增反膜\"的条件搞混",
    ], "薄膜干涉中判断半波损失是关键：看光从哪到哪反射，空气→膜→空气，两次反射之一有半波损失"),
    essence: "薄膜干涉：半波损失决定加 λ/2 还是不加，2nd 是厚度贡献。",
  },

  {
    id: "PHY-R85",
    name: "原子核衰变类型判断",
    model: "PHY-M15",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "给定衰变类型（α/β⁻/β⁺/γ），写出衰变方程或推断产物",
    path: [
      "Step1：α 衰变：⁴₂He 放出，质量数减4，核电荷数减2",
      "Step2：β⁻ 衰变：中子变质子，核电荷数加1，质量数不变（⁰₋₁e 放出）",
      "Step3：β⁺ 衰变：质子变中子，核电荷数减1，质量数不变（⁰₊₁e 放出，即正电子）",
      "Step4：γ 衰变：不改变核素种类，仅释放能量（常伴随 α/β 衰变后残余能量释放）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把 β⁻ 衰变的电子数写成 ⁰₊₁e（应为 ⁰₋₁e）",
      "把 γ 衰变当成独立衰变（实际上是其他衰变后的能量释放）",
    ], "α 减4减2，β⁻ 加1，β⁺ 减1，γ 不变。记忆：α 像\"减法\"，β⁻ 像\"加法\"。"),
    essence: "α：-4, -2；β⁻：0, +1；β⁺：0, -1；γ：0, 0。质量数和电荷数必须守恒。",
  },

  {
    id: "PHY-R86",
    name: "核聚变与核裂变能量比较",
    model: "PHY-M15",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "比较不同核反应的能量释放，或求聚变/裂变的能量",
    path: [
      "Step1：计算质量亏损 Δm = Σm反应物 - Σm产物",
      "Step2：能量释放 E = Δm·c²（c = 3×10⁸ m/s）",
      "Step3：常用单位：1 u = 931.5 MeV/c²，可直接用原子质量单位算 MeV",
      "Step4：聚变能量/核子比裂变大：轻核聚变更高效（单位质量释放能量更多）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把原子质量（包含电子）和原子核质量（不含电子）混淆",
      "在用原子质量计算时，忘了减去电子质量变化导致的误差",
    ], "核能计算用原子质量（包含电子云），因为电子质量也参与了质量亏损"),
    essence: "E = Δm·c²，1 u = 931.5 MeV。聚变比裂变能量密度更高。",
  },

  {
    id: "PHY-R87",
    name: "电磁感应中的图像变换",
    model: "PHY-M13",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "导体棒在磁场中运动，已知某物理量随时间变化图，求其他量图",
    path: [
      "Step1：从已知的量（B-t 图、x-t 图、F-t 图）出发",
      "Step2：用 E = BLv 或 E = S·dB/dt 推导 E 随时间的变化",
      "Step3：若 E 是 t 的函数，则 I = E/R 也是 t 的函数",
      "Step4：注意方向（正负），在图像中标注清楚关键点和斜率",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把 E = BLv 中的 v 当成常数（若 v 不是常数则 E 也变化）",
      "在求 I-t 图时漏掉符号，只画绝对值",
    ], "图像变换的信号是\"已知一个量的图像，求另一个量的图像\"，关键是找两者数学关系"),
    essence: "图像变换：先找物理量之间的数学关系（E = BLv 或 E = S·dB/dt），再画图。",
  },

  {
    id: "PHY-R88",
    name: "功能原理综合应用",
    model: "PHY-M08",
    thinkingMethod: "",
    level: toLevel(2),
    trigger: "复杂过程涉及多种能量转化，求某力做功或能量变化",
    path: [
      "Step1：明确系统边界：哪些是外力，哪些是内力",
      "Step2：系统动能变化 = 合外力做功 + 内力非保守做功",
      "Step3：非保守内力做功（如摩擦力）使机械能减少，转化为内能",
      "Step4：分过程或全程列功能关系：W外 + W内非保守 = ΔEk",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "把内力的功当成了外力功",
      "把机械能损失当成摩擦力对单个物体的功（实际是系统内的能量损耗）",
    ], "功能原理把能量守恒和牛顿第二定律结合起来，是解决复杂过程的通法"),
    essence: "合外力功+非保守内力功 = 动能变化。机械能损失 = 非保守内力功。",
  },

  {
    id: "PHY-R89",
    name: "复杂电路的等效电源变换",
    model: "PHY-M11",
    thinkingMethod: "",
    level: toLevel(3),
    trigger: "复杂电路化简，包括电压源和电流源的互换",
    path: [
      "Step1：电压源→电流源：I_s = E/r，r 不变，并联在电流源两端",
      "Step2：电流源→电压源：E = I_s·r，r 不变，串联在电压源内部",
      "Step3：多个电压源并联：取最大电动势的源，其余作为内阻处理",
      "Step4：多个电流源串联：取最大电流的源，其余作为内阻处理",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "在电压源→电流源变换时，忘记把 r 也变换（r 不变，并联到电流源两端）",
      "把电流源串联进电路时，误认为电流被分压（电流源串联等效为电流不变）",
    ], "等效电源变换的本质是保持外特性不变，内部结构可以不同"),
    essence: "电压源↔电流源：E = I_s·r，r 不变。变换后外特性完全相同。",
  },

  {
    id: "PHY-R90",
    name: "力学实验数据处理",
    model: "PHY-M03",
    thinkingMethod: "",
    level: toLevel(1),
    trigger: "验证牛顿第二定律或机械能守恒的实验，需要处理纸带数据",
    path: [
      "Step1：纸带数据：用逐差法求加速度 a = Δx/T²（T 为打点周期）",
      "Step2：速度计算：某点瞬时速度 = 相邻两点位移之和 / 2T",
      "Step3：作图：用坐标纸画 v-t 图，斜率即加速度，截距即初速度",
      "Step4：误差分析：系统误差（仪器零误差、重力加速度取值）；偶然误差（测量、读数）",
    ],
    variationWarning: "",
    errorMap: migrateErrors([
      "用相邻两段位移之差算加速度（应逐差：相邻位移之差是 2aT²，不是 aT²）",
      "把瞬时速度写成 v = x/t（那是平均速度）",
    ], "逐差法的核心是\"隔段相减消除初速度\"，隔段数为数据点数的一半时误差最小"),
    essence: "逐差法消除初速度，逐差数 = 数据段数/2 时误差最小。瞬时速度用平均速度近似。",
  },

];

export default allParadigms;
