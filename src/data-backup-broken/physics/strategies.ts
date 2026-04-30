// 解题套路R01-R90（物理）
// 编号规则: PHY-R01 ~ PHY-R90
// 适用: 高中物理（力学为主）

export interface Routine {
  id: string;
  title: string;
  modelId: string;
  category: string;
  difficulty: 1|2|3;
  oneLine: string;
  coreSteps: string[];
  applicableTypes: string[];
  commonMistakes: string[];
  memoryTip: string;
  content: string;
}

export const allRoutines: Routine[] = [

  // ══════════════════════════════════════
  // R01-R10：运动学基础
  // ══════════════════════════════════════

  {
    id: "PHY-R01", title: "匀变速公式三步选择, modelId: "PHY-M01"",
    category: "运动, difficulty: 1",
    oneLine: "v₀ 用公式①，有 x 用公式③，无 v₀ 用公式②",
    coreSteps: [
      "Step1：列出已知量（v₀、v、a、t、x", "Step2：缺哪个选对应公式：x v=v₀+at；缺 v₀ v²-v₀²=2ax；缺 a x=v₀t+½at²",
      "Step3：代入求解，注意方向和正"
    ],
    applicableTypes: ["单一物体匀变速直线运", "刹车问题"],
    commonMistakes: [
      "刹车问题先判断实际运动时间：t_stop=v₀/|a|，若 t>t_stop t_stop", "混淆 x=vt x=v₀t，正确位移是 x=v₀t+½at²",
      "a 的正负号漏掉"
    ],
    memoryTip: "有初无末用①，无初有末用②，首末都用",
    content: "匀变速三公式：①v=v₀+at ②x=v₀t+½at² ③v²-v₀²=2ax。选择口诀：有初（v₀）无末（v）用①，无初（v₀）有末（v）用②，首末都有用③（但需凑时间）"
  },

  {
    id: "PHY-R02", title: "刹车陷阱处理", modelId: "PHY-M01",
    category: "运动, difficulty: 2",
    oneLine: "刹车先算停稳时间，实际时间取较小",
    coreSteps: [
      "Step1：求刹车到停止的时间 t_stop=v₀/|a|", "Step2：将题目给的 t t_stop 比较",
      "Step3：若 t≥t_stop，物体已停止，位移取 x_max=v₀²/(2|a|)",
      "Step4：若 t<t_stop，代入正常公式计"
    ],
    applicableTypes: ["刹车模型", "减速到停止的运]",
    commonMistakes: [
      "不判t t_stop 的关系直接套公式，导致位移算",
      "x_max=v₀²/(2|a|) 不需要时间条",
      "a 取负值代入时漏掉绝对"
    ],
    memoryTip: "刹车停稳有时间，最大位移不靠它",
    content: "刹车问题本质：物体停下后不会倒退。关键：先算 t_stop=v₀/|a|，再决定用哪个位移公式。x_max=v₀²/(2|a|) 是停稳后的最大位移，与时间无关"
  },

  {
    id: "PHY-R03", title: "追及相遇临界分析", modelId: "PHY-M01",
    category: "运动, difficulty: 2",
    oneLine: "速度相等时刻往往对应相距极值；恰好不相撞时位移差等于初始间",
    coreSteps: [
      "Step1：画运动草图，标初始位置和速度方向", "Step2：找临界条件——两物体速度相等时（vv₂）",
      "Step3：列位移方程：追x_x_初始间距；相xx总间", "Step4：讨论是否有解——Δ≥0 才有实际意义",
      "Step5：若恰好不相撞，临界条件 Δ=0"
    ],
    applicableTypes: ["追及问题", "相遇问题", "相距最]",
    commonMistakes: [
      "混淆追及和相遇的位移关系", "忘记两物体初始间", "不判断是否能追上（被追物体速度需大于追者）"
    ],
    memoryTip: "追者要赶路，相遇位移同；速度先相等，最值在其中",
    content: "追及相遇两类问题：追及（Δx=x_x_初始间距）、相遇（xx总间距）。核心：速度相等时刻往往对应相距极值。判断能否追上：被追者最大位追者位初始间距"
  },

  {
    id: "PHY-R04", title: "竖直上抛对称, modelId: "PHY-M02"",
    category: "运动, difficulty: 1",
    oneLine: "上升下落对称，速度等大反向，时间到顶平",
    coreSteps: [
      "Step1：明确正方向（通常向上为正", "Step2：a=-g（整个过程）",
      "Step3：利用对称性：v_-v_下（同一位移处）",
      "Step4：利用等时性：t_t_下（同高度两点间"
    ],
    applicableTypes: ["竖直上抛", "简单抛]",
    commonMistakes: [
      "把上升和下落分段用不同公式（正确是全a=-g", "混淆最高点速度）和加速度（g", "忘记速度方向"
    ],
    memoryTip: "上抛全程 a=-g，速度对称，时间对",
    content: "竖直上抛可全程用一个公式：v=v₀-gt（向上为正）。核心对称性：速度对称（同位移处，上升速度=-下落速度）；时间对称（同高度两点间，上升时间=下落时间）"
  },

  {
    id: "PHY-R05", title: "自由落体n 秒位, modelId: "PHY-M02"",
    category: "运动, difficulty: 1",
    oneLine: "n 秒内位移 Δh=½g(2n-1)，g=10 时为 5(2n-1) m",
    coreSteps: [
      "Step1：记公式 h_n=½g t_n²（第 n 秒末位移", "Step2：第 n 秒内位移 Δh_n=h_n-h_(n-1)",
      "Step3：化简Δh_n=½g[n²-(n-1)²]=½g(2n-1)",
      "Step4：代入数值（g=10 Δh=5(2n-1)m"
    ],
    applicableTypes: ["自由落体", "初速度为零的匀加]",
    commonMistakes: [
      "误以为第 n 秒位移是常数", "1 秒位移是 5m（g=10）而非 10m",
      "使用推论时不验证初速度为零的前"
    ],
    memoryTip: "n 秒位移：5（g=10），155……即 ½g(2n-1)",
    content: "自由落体本质是初速度为零、加速度g 的匀加速直线运动。第 n 秒内位移公式：Δh=½g(2n-1)。特例：1 秒内位移5m（g=10）；n 秒总位移为 ½gn²"
  },

  {
    id: "PHY-R06", title: "图像面积, modelId: "PHY-M03"",
    category: "运动, difficulty: 1",
    oneLine: "v-t 图面位移，a-t 图面速度变化，x-t 图斜速度",
    coreSteps: [
      "Step1：拿到图像，先看坐标轴物理意", "Step2：v-t 图：图线t 轴围成的面积=位移（注意符号）",
      "Step3：a-t 图：图线t 轴围成的面积=Δv", "Step4：x-t 图：斜率=速度（切线斜率，非割线）",
      "Step5：注意面积在 t 轴下方时位移为负"
    ],
    applicableTypes: ["运动学图", "追击相遇图解"],
    commonMistakes: [
      "v-t 图的纵坐标当位移", "x-t 图的斜率是速度，不是加速度",
      "面积t 轴下方时漏掉负号"
    ],
    memoryTip: "面积出位移，斜率得速度；坐标轴要看清，正负别搞",
    content: "v-t 图：斜率=加速度，面位移；a-t 图：面积=Δv；x-t 图：斜率=v。关键：先明确坐标轴含义，再谈几何意义"
  },

  {
    id: "PHY-R07", title: "等时弦与等时, modelId: "PHY-M04"",
    category: "运动, difficulty: 3",
    oneLine: "竖直直径上的所有弦自由下落时间相同（与弦长无关",
    coreSteps: [
      "Step1：等时弦——竖直直径端点到圆上任意点的弦，自由落体时间均为 2d/g)", "Step2：等时圆——从圆最高点沿不同弦滑下（光滑斜面），时间相", "Step3：弦L=d·sinθ（d 为直径在竖直方向的投影）",
      "Step4：证明：L=½gsin²θ·t² t=2d/(gsinθ))，d 是常"
    ],
    applicableTypes: ["等时", "等时, "最短时间问],
    commonMistakes: [
      "把弦长当斜面长度代入", "混淆等时圆和等时弦的条件",
      "忘记投影关系"
    ],
    memoryTip: "竖直直径所有弦，等时落地与弦长无关",
    content: "等时弦：从竖直圆顶点沿任意弦自由下落，时间相同（因为弦长 L sin²θ 成正比，投影 d 是常数）。等时圆：从最高点沿不同弦滑下（光滑斜面），时间也相同"
  },

  {
    id: "PHY-R08", title: "参考系变换, modelId: "PHY-M01"",
    category: "运动, difficulty: 2",
    oneLine: "换一个参考系，运动瞬间变简单：v_v_v_",
    coreSteps: [
      "Step1：分析绝对运动（对地面）：v_v_v_", "Step2：选一个方便的惯性参考系（通常是运动物体）",
      "Step3：变换参考系后重新分析运动关", "Step4：常见技巧：人看车→车静止；河中渡河→合速度分解"
    ],
    applicableTypes: ["相对运动", "流水行船", "风速影]",
    commonMistakes: [
      "速度直接相加忘记方向", "分不清绝相对/牵连速度",
      "牵连速度理解错误"
    ],
    memoryTip: "绝对=相对+牵连，方向按矢量法则",
    content: "核心公式：v_绝对=v_相对+v_牵连。解题策略：当直接分析复杂时，变换到相对简单的参考系。例如：两车同向行驶，相对速度=vv₂；河流中渡河，v_船对岸v_船对水v_水²（夹角α 时用余弦定理）"
  },

  {
    id: "PHY-R09", title: "运动学推论速解", modelId: "PHY-M01",
    category: "运动, difficulty: 2",
    oneLine: "连续相等时间间隔：Δx=aT²；位移比 1:3:5；速度1:2:3",
    coreSteps: [
      "推论一：Δx=aT²（连续相T 内的位移差）", "推论二：xxx1:3:5（前 TTT 内位移比", "推论三：vvv1:2:3（第 1 T 末的速度比）", "推论四：初速为零的匀加速，1T 末~nT 末速度1:2:...:n"
    ],
    applicableTypes: ["纸带处理", "打点计时, "初速度为零的匀加],
    commonMistakes: [
      "把推论二1:3:5 错用到其他位",
      "Δx=aT² T 是相邻两点的间隔，非总时",
      "使用推论时不验证初速度为零的前"
    ],
    memoryTip: "匀加零起动，位移比 1:3:5:7…速度1:2:3:4",
    content: "三个经典推论是纸带问题的核心。Δx=aT² 用于求加速度；xxx1:3:5 验证是否是匀加速；v_n=na₁T 用于求某点瞬时速度。初速度为零的匀加速还有：连续相等位移的时间比 1:(-1):(-):"
  },

  {
    id: "PHY-R10", title: "斜面等时, modelId: "PHY-M04"",
    category: "运动, difficulty: 2",
    oneLine: "倾角越大下滑越快（90°=自由落体最快）",
    coreSteps: [
      "Step1：光滑斜面，a=gsinθ", "Step2：斜面长L，由 L=½gsinθ·t² t=2L/(gsinθ))",
      "Step3：越大，sinθ 越大，t 越小", "Step4：极θ0°，t→√(2L/g)（自由落体）"
    ],
    applicableTypes: ["斜面运动", "不同倾角的比]",
    commonMistakes: [
      "误认θ 越大下滑越慢（错！sinθ 越大，加速度越大",
      "g 当成沿斜面加速度（正确是 gsinθ"
    ],
    memoryTip: "斜面倾角大，加速度大，时间短；垂直最快（自由落体",
    content: "光滑斜面上物体加速度 a=gsinθ。斜面长度固定时，时t=2L/(gsinθ))。越大 sinθ 越大，时间越短"
  },

  // ══════════════════════════════════════
  // R11-R25：力学基础（受力分析、平衡）
  // ══════════════════════════════════════

  {
    id: "PHY-R11", title: "受力分析顺序", modelId: "PHY-M05",
    category: "力学", difficulty: 1,
    oneLine: "先场力后接触力，先已知后待求，先重力后弹力再摩擦",
    coreSteps: [
      "Step1：明确研究对象（单个物体还是系统", "Step2：画重力（必定有", "Step3：画弹力（找接触/连接，分析挤压方向）", "Step4：画摩擦力（先判断是否有相对运动或趋势）",
      "Step5：画其他力（拉力、推力、浮力等",
      "Step6：检查：是否多画/漏画"
    ],
    applicableTypes: ["单个物体受力", "连接体受, "平衡问题"]",
    commonMistakes: [
      "看到接触面就画弹力（接触不一定有弹力", "摩擦力方向判断错误（沿接触面，与运动方向无关", "漏掉空气浮力（轻小物体在空气中）"
    ],
    memoryTip: "重力弹力摩擦力，顺序不能错；接触不一定有弹，静止不一定无摩擦",
    content: "受力分析原则：重力（场力）→ 弹力（接触力，与形变有关）→ 摩擦力（有弹力、有相对运动/趋势）→ 其他力。常见易漏：绳子拉力（沿绳方向）、杆的弹力（不一定沿杆）、浮力（浸入流体中）"
  },

  {
    id: "PHY-R12", title: "合成法解三力平衡", modelId: "PHY-M05",
    category: "力学", difficulty: 1,
    oneLine: "三力平衡 合成两个 找第三个力的平衡直角三角形求",
    coreSteps: [
      "Step1：确定研究对象，受力分析", "Step2：若三力平衡，将任意两力合成为第三个力的平衡", "Step3：画出力的矢量三角形", "Step4：识别几何关系（直角、等边、相似）",
      "Step5：用三角函数求各力大"
    ],
    applicableTypes: ["三力平衡", "单个物体静态平]",
    commonMistakes: [
      "把合力方向画", "角度读错（特别是斜面相关的角度）",
      "分不清哪个角对应哪个三角函数"
    ],
    memoryTip: "三力平衡用合成，两个合成找第三，矢量三角画出来，正弦余弦对号",
    content: "三力平衡两类方法：合成法——FF-F₃，作平行四边形；分解法——建立坐标系分解不在坐标轴上的力。典型模型：斜面上物体（重力分解GG∥）、悬挂物体（重力分解为拉力和压力）"
  },

  {
    id: "PHY-R13", title: "正交分解, modelId: "PHY-M05"",
    category: "力学", difficulty: 1,
    oneLine: "不在坐标轴上的力 分解x、y ΣFx=0, ΣFy=0",
    coreSteps: [
      "Step1：建立坐标系（让更多力落在轴上）", "Step2：分解不在轴上的力（通常只需分解一个力", "Step3：x 方向：ΣFx=0", "Step4：y 方向：ΣFy=0",
      "Step5：解方程"
    ],
    applicableTypes: ["多力平衡", "有斜面的平衡", "有角度的平衡"],
    commonMistakes: [
      "分解时角度写错（sin/cos 混淆", "分力方向画反",
      "漏掉某个分力",
      "方程数少于未知数（需借助几何关系补充方程"
    ],
    memoryTip: "建轴原则：让多的力落轴上；分解越少越",
    content: "正交分解是解决多力平衡的通法。坐标系选择原则：让尽量多的力落在坐标轴上，减少分解次数。分解时注意：哪个角θ，就把哪个力分解Fcosθ Fsinθ"
  },

  {
    id: "PHY-R14", title: "动态平衡（缓慢变化, modelId: "PHY-M05"",
    category: "力学", difficulty: 2,
    oneLine: "缓慢变化 每一步都近似平衡 矢量三角形边角同步变",
    coreSteps: [
      "Step1：画初态的受力分析和矢量三角形", "Step2：分析哪个角度在变，找出不变的边",
      "Step3：用不变边对不变角法判断变化趋势",
      "Step4：逐帧画出变化过程中的矢量三角",
      "Step5：由几何关系判断各力的增"
    ],
    applicableTypes: ["滑轮移动", "绳端移动", "杆转]",
    commonMistakes: [
      "以为力一定变大（方向变可能使力变小）", "矢量三角形画", "把缓慢理解为静止"
    ],
    memoryTip: "不变边对不变角，三角形里看增",
    content: "动态平衡的本质：每个瞬间都是平衡态。关键：抓住不变的几何量（长度、角度），画出变化前后的矢量三角形，逐帧分析。常见模型：绳端水平移动（张力变化）、斜面倾角变化（支持力变化）"
  },

  {
    id: "PHY-R15", title: "相似三角形法", modelId: "PHY-M05",
    category: "力学", difficulty: 2,
    oneLine: "力的矢量三角形与几何三角形相对应边成比例",
    coreSteps: [
      "Step1：受力分析，作出力的矢量三角", "Step2：寻找与力三角形相似的几何三角形",
      "Step3：建立边长对应关",
      "Step4：列比例式求"
    ],
    applicableTypes: ["绳子绕过定滑", "球与斜面/挡板", "复杂几何平衡"],
    commonMistakes: [
      "找不到相似的几何三角", "对应边对应错",
      "几何边长度关系列"
    ],
    memoryTip: "力三角找几何三角，对应边比相",
    content: "当力的矢量三角形和物体几何三角形相似时，可以把几何边代入比例式。典型场景：悬绳拉住球与斜面（球所受三个力与几何边对应）；挡板转动问题（挡板弹力方向变化）"
  },

  {
    id: "PHY-R16", title: "整体法与隔离, modelId: "PHY-M06"",
    category: "力学", difficulty: 1,
    oneLine: "系统无外整体有共同加速度；有外力 先整体法求加速度，隔离法求内",
    coreSteps: [
      "Step1：先整体法：对整体列动力学方ΣF=Ma",
      "Step2：整体法不能求内力时，用隔离",
      "Step3：隔离关键物体，列受力方",
      "Step4：联立方程求"
    ],
    applicableTypes: ["连接", "叠加, "多物体系],
    commonMistakes: [
      "整体法中把内力当外力", "隔离时漏掉其他物体对它的", "加速度方向判断错误"
    ],
    memoryTip: "外力用整体，内力靠隔离；加速度一起算，内力单独求",
    content: "整体法：把多个物体视为一个整体，质量相加，受外力（不含内力）。隔离法：单独分析某个物体，受所有力。选用原则：求系统外力→整体法；求内力→隔离法；求加速度→通常先整体法"
  },

  {
    id: "PHY-R17", title: "弹簧的力与形, modelId: "PHY-M07"",
    category: "力学", difficulty: 1,
    oneLine: "弹簧弹力 F=kx，x 是形变量（非长度",
    coreSteps: [
      "Step1：明确弹簧原长（自然状态）", "Step2：判断是伸长还是压缩",
      "Step3：计算形变量 x=|L-L₀|", "Step4：弹F=kx，方向沿弹簧轴线"
    ],
    applicableTypes: ["弹簧平衡", "弹簧振子", "弹簧串并]",
    commonMistakes: [
      "把伸长量当弹簧长",
      "混淆压缩和伸长（弹力方向相同",
      "忽略弹簧方向（只能拉或压，不能推"
    ],
    memoryTip: "弹力方向沿弹簧，伸长压缩都一样（F=kx），原长为零是错",
    content: "胡克定律 F=kx，x 是形变量（非长度）。串联弹簧：k_k₁k(kk；并联弹簧：k_kk₂。动态问题中弹簧弹力变化时，加速度往往与弹力方向相反"
  },

  {
    id: "PHY-R18", title: "绳子、杆、弹簧的弹力方向", modelId: "PHY-M07",
    category: "力学", difficulty: 1,
    oneLine: "绳→只能拉沿绳收缩；杆→可以拉压方向任意；弹簧→沿轴线伸长拉缩短",
    coreSteps: [
      "Step1：判断是绳子、杆还是弹簧", "Step2：绳子——弹力方向沿绳，指向绳子收缩方向（只能拉伸）",
      "Step3：轻杆——弹力方向不一定沿杆，可以是任意方向（铰链约束", "Step4：弹簧——沿轴线方向，伸长时拉，压缩时推"
    ],
    applicableTypes: ["力的分析", "运动学中的弹]",
    commonMistakes: [
      "认为轻杆弹力一定沿杆（杆固定时才是，铰链时不一定）",
      "绳子在弯曲处弹力方向判断错误（沿切线",
      "弹簧弹力方向随压拉伸而改"
    ],
    memoryTip: "绳拉杆铰弹沿轴，三种弹力三规",
    content: "三类弹力方向：①绳：只能承受拉力，沿绳收缩方向；②轻杆：可拉可压，固定端沿杆，转动铰链则沿任意方向；③弹簧：沿轴线，伸长拉、缩短压"
  },

  {
    id: "PHY-R19", title: "摩擦力方向判, modelId: "PHY-M08"",
    category: "力学", difficulty: 1,
    oneLine: "滑动摩擦与相对运动方向相反，静摩擦与相对运动趋势方向相反",
    coreSteps: [
      "Step1：判断是滑动摩擦还是静摩", "Step2：滑动摩擦：f=μN，方向与相对运动方向相反（不是与运动方向相反", "Step3：静摩擦：方向与相对运动趋势方向相反，需用假设法判断趋势", "Step4：假设光滑——若物体会运动，则趋势方向即假设光滑时的运动方向"
    ],
    applicableTypes: ["摩擦力平", "摩擦力做, "传送带问题"]",
    commonMistakes: [
      "把摩擦力方向当成运动方向的反方向", "静摩擦力大小误用 f=μN",
      "不分析相对运趋势，只看运"
    ],
    memoryTip: "滑动摩擦与相对运动反向，静摩擦与相对趋势反向，运动方向不是判",
    content: '摩擦力方向判断口诀相对"是关键。滑动摩擦：与相对运动方向相反；静摩擦：与相对运动趋势方向相反（用假设光滑法）'
  },

  {
    id: "PHY-R20", title: "摩擦力突变分, modelId: "PHY-M08"",
    category: "力学", difficulty: 2,
    oneLine: "静→动：f_max=μ_sN 判断临界；动→静：速度相等时突",
    coreSteps: [
      "Step1：找临界——当所需静摩f_需>f_max=μ_sN 时，物体由静变动",
      "Step2：若恰好 f_需=f_max，处于临界状",
      "Step3：运动后，滑动摩f=μ_kN（通常 μ_k<μ_s",
      "Step4：常见突变点：速度相等时、加速度方向变化"
    ],
    applicableTypes: ["传送带模型", "板块模型", "摩擦力突]",
    commonMistakes: [
      "把静摩擦和滑动摩擦混", "μ_s μ_k 混淆",
      "忽略速度相等后的突变"
    ],
    memoryTip: "静动转换看临界，f_max=μ_sN",
    content: "摩擦力突变的典型场景：传送带模型中物体速度与传送带速度相等时，滑动摩擦变为静摩擦；斜面倾角缓慢增大时，摩擦力从静摩擦变为滑动摩擦。解题策略：分段分析，每段用不同的摩擦力模型"
  },

  // ══════════════════════════════════════
  // R21-R40：动力学核心模型
  // ══════════════════════════════════════

  {
    id: "PHY-R21", title: "牛顿第二定律加速度求解", modelId: "PHY-M05",
    category: "动力, difficulty: 1",
    oneLine: "合外F=Ma，先求合外力再除 M 得加速度",
    coreSteps: [
      "Step1：受力分析，求合外力（注意方向，在一条直线上时代数和",
      "Step2：建立正方向（通常与加速度方向相同",
      "Step3：F_Ma，代入数",
      "Step4：注F_合是合力，不是某个分"
    ],
    applicableTypes: ["已知力求加速度", "已知加速度求力"],
    commonMistakes: [
      "把某个分力当合外", "方向搞反",
      "质量单位用错（要kg"
    ],
    memoryTip: "合外力方向即加速度方向，大F/M",
    content: "F=Ma 是动力学的核心。解题流程：受力分析 求合外力（建立坐标系分解）→ 代入 F=Ma。注意：加速度方向与合外力方向相同；合外力为零a=0（静止或匀速）"
  },

  {
    id: "PHY-R22", title: "连接体加速度", modelId: "PHY-M06",
    category: "动力, difficulty: 2",
    oneLine: "同绳连接 加速度大小相同；外力作整体法或牛二",
    coreSteps: [
      "Step1：判断连接方式（绳连、杆连、弹簧连、接触）", "Step2：绳连且不伸长时，各物体加速度大小相等",
      "Step3：整体法求加速度 ΣF_(mm...)a",
      "Step4：隔离关键物体求内力（如绳子拉力"
    ],
    applicableTypes: ["连接体运", "叠加, "跨滑轮问],
    commonMistakes: [
      "以为绳子两边加速度一定相等（伸长时不相等", "整体法中把内力当外力",
      "方向判断错误"
    ],
    memoryTip: "同绳共加速度，内力隔离求，外力整体算",
    content: "连接体加速度分析：绳不可伸长且质量不计时，绳两端物体沿绳方向加速度大小相等；弹簧连接，加速度不一定相等；整体法：系统合外系统总质量×系统质心加速度"
  },

  {
    id: "PHY-R23", title: "斜面体问, modelId: "PHY-M09"",
    category: "动力, difficulty: 2",
    oneLine: "地面对斜面体是否有摩看系统是否受水平外力",
    coreSteps: [
      "Step1：整体法：对整体受力分析，水平方向是否有外力分量", "Step2：若整体无水平外力，地面对斜面体摩擦 f=0",
      "Step3：若有水平外力，用正交分解求 f", "Step4：隔离物块，单独分析其受力和运动"
    ],
    applicableTypes: ["斜面体上滑块", "系统内力问题", "连接体斜]",
    commonMistakes: [
      "直接对斜面体分析漏掉地面的反作用", "不判断整体是否受水平外力",
      "把地面对斜面体的摩擦力方向搞"
    ],
    memoryTip: "斜面体，有无外力分水平，无则地摩0，有则隔离两体求",
    content: "斜面体问题本质是系统内力问题。核心判据：地面对斜面体是否有摩擦，取决于整体在水平方向是否受外力。常见结论：斜面光滑、无外力时，地面对斜面体摩擦=0"
  },

  {
    id: "PHY-R24", title: "传送带模型", modelId: "PHY-M08",
    category: "动力, difficulty: 3",
    oneLine: "先判断物体初速度与传送带速度的关系，找到速度相等的临界点",
    coreSteps: [
      "Step1：分析传送带运动方向和速度 v_", "Step2：判断物体初速度 v₀ v_带的关系",
      "Step3：计算滑动摩擦力方向和大f=μmg", "Step4：找速度相等时刻（临界点），此时摩擦力突", "Step5：分段列运动方程，注意每段的初速度和加速度"
    ],
    applicableTypes: ["水平传送带", "倾斜传送带", "传送带与滑]",
    commonMistakes: [
      "忽略速度相等后运动状态的改变",
      "摩擦力方向判断错",
      "不分析临界条件就套公"
    ],
    memoryTip: "传送带问题分段算，速度相等是临界，临界前后加速度不同",
    content: "传送带问题的灵魂是找速度相等临界点。过程分段：物体速度<v_带时，被传送带加速，f 向前；物体速度=v_带时临界，摩擦力骤变（若共速后仍加速则再加速）；物体速度>v_带时，物体减速，f 向后"
  },

  {
    id: "PHY-R25", title: "板块模型", modelId: "PHY-M09",
    category: "动力, difficulty: 3",
    oneLine: "相对静止 共同加速度；相对滑分别列方程，找临界条",
    coreSteps: [
      "Step1：假设接触面光滑，判断是否相对滑", "Step2：比较最大静摩擦与所需摩擦力：f_max=μ_sN",
      "Step3：若 f_max≥所需共同加速度",
      "Step4：若 f_max<所需分离，分别列动力学方",
      "Step5：找两物体加速度相等（若再次共速）或相对位"
    ],
    applicableTypes: ["水平板块", "斜面板块", "两物块叠]",
    commonMistakes: [
      "混淆静摩擦和滑动摩擦的方", "不判断临界条件直接套公式",
      "把板块间的摩擦力方向搞反"
    ],
    memoryTip: "板块是否滑动，比较摩擦供需；f_max 是判断临界的关键",
    content: "板块问题核心是判断分离还是共速。策略：①先假设一起运动，用整体法a；②f_需=ma（隔离）求维持共同运动所需的摩擦力；③f_需≤f_max 假设成立，一起运动；f_需>f_max 分离运动"
  },

  {
    id: "PHY-R26", title: "弹簧振子（简谐运动基础, modelId: "PHY-M07"",
    category: "动力, difficulty: 2",
    oneLine: "回复F=-kx，加速度 a=-(k/m)x，周T=2πm/k)",
    coreSteps: [
      "Step1：找到平衡位置（弹簧恢复原长或合外力为零处）", "Step2：以平衡位置为原点，建立位移 x",
      "Step3：回复力 F_-kx，验证是否为简谐运", "Step4：求加速度 a=-(k/m)x",
      "Step5：求周期 T=2πm/k)"
    ],
    applicableTypes: ["弹簧振子", "单摆（小角度, "简谐运动判],
    commonMistakes: [
      "把位x 当成弹簧长度（x 是相对平衡位置的位移", "回复力方向判断错误（指向平衡位置", "忘记回复力系k 与弹簧劲度系数的关系"
    ],
    memoryTip: "简谐运动回复力 F=-kx，k 是回复力系数",
    content: "简谐运动判定：F_-kx（回复力与位移成正比，方向相反）。弹簧振子平衡位置在弹簧恢复原长处（水平），此时速度最大、加速度为零。关键量：振A（最大位移）、角频率 ω=k/m)、周T=2π/ω=2πm/k)"
  },

  {
    id: "PHY-R27", title: "超重与失, modelId: "PHY-M05"",
    category: "动力, difficulty: 1",
    oneLine: "加速度向上 超重；加速度向下 失重（a>g 完全失重",
    coreSteps: [
      "Step1：判断加速度方向", "Step2：a 向上（超重）：F_N-mg=ma F_N=m(g+a)>mg",
      "Step3：a 向下（失重）：mg-F_N=ma F_N=m(g-a)<mg", "Step4：a=g 向下：完全失重，F_N=0"
    ],
    applicableTypes: ["电梯问题", "弹簧秤读, "加减速升],
    commonMistakes: [
      "把超重理解为物体变重了（质量不变，是视重变化", "混淆超重和失重条", "a=g F_N=0（完全失重）"
    ],
    memoryTip: "向上加速超重，向下加速失重，等于 g 完全",
    content: "超重失重的本质是视重与实重的差异。判断方法：只看加速度方向（与重力方向比较）。电梯模型：上升减下降加速→a 向下→失重；上升加下降减速→a 向上→超重"
  },

  {
    id: "PHY-R28", title: "斜面模型综合", modelId: "PHY-M09",
    category: "动力, difficulty: 2",
    oneLine: "重力分解：G_垂直=Gcosθ，G_下滑=Gsinθ",
    coreSteps: [
      "Step1：重力分解：垂直斜面 Gcosθ，平行斜Gsinθ", "Step2：摩擦力 f=μN=μGcosθ（滑动），方向与相对运动相反",
      "Step3：沿斜面方向合力决定加速度", "Step4：静匀速：Gsinθ=f；加速下滑：Gsinθ-f=ma"
    ],
    applicableTypes: ["斜面静止", "斜面滑动", "斜面体系]",
    commonMistakes: [
      "把重力分量写错（Gsinθ 是下滑分力，不是 Gcosθ", "混淆压力 N 与重G",
      "摩擦力方向判断错"
    ],
    memoryTip: "斜面重力分解：平Gsinθ，垂Gcosθ，摩μGcosθ",
    content: "斜面问题的核心是重力分解。关键：斜面倾角 θ，重力分解为 Gsinθ（沿斜面向下）和 Gcosθ（垂直斜面）。支持力 N=Gcosθ（光滑）。摩擦力方向：物体有沿斜面下滑趋势时，摩擦沿斜面向上"
  },

  {
    id: "PHY-R29", title: "曲线运动速度分解", modelId: "PHY-M10",
    category: "动力, difficulty: 1",
    oneLine: "曲线运动速度方向沿切线，合外力指向曲线内侧（曲率中心",
    coreSteps: [
      "Step1：曲线运动速度方向=该点切线方向", "Step2：合外力方向→加速度方向→速度变化方向",
      "Step3：合外力指向曲线凹侧（曲率中心）",
      "Step4：可分解为切向（改变速度大小法向（改变速度方向"
    ],
    applicableTypes: ["一般曲线运", "平抛运动", "圆周运动"],
    commonMistakes: [
      "把合外力方向当成速度方向", "不理解凹侧的含义",
      "切向和法向分解混"
    ],
    memoryTip: "曲线速度沿切线，外力总向凹侧",
    content: "曲线运动基本规律：速度方向沿轨迹切线；合外力（或加速度）方向指向曲线凹侧（曲率中心）。将运动分解为切向（垂直于速度方向的加速度改变速度大小）和法向（沿速度方向的加速度改变速度方向）"
  },

  {
    id: "PHY-R30", title: "小船过河模型", modelId: "PHY-M03",
    category: "动力, difficulty: 2",
    oneLine: "最短时间：船头正对河岸；最短位移：合成法求合速度方向",
    coreSteps: [
      "Step1：建立速度合成：v_船对岸v_船对水v_水2v_船对水·v_水·cosα（为夹角）", "Step2：最短时间过河：令船头正对河岸，t_min=d/v_船对", "Step3：最短位移过河：v_合⊥v_时，x_min=d", "Step4：条件：v_船对v_水，v_船对水≤v_水，则船不能垂直过河"
    ],
    applicableTypes: ["小船渡河", "风中行走", "相对运动应用"],
    commonMistakes: [
      "混淆船头方向和合速度方向",
      "v_船对水≤v_时误以为能垂直过",
      "时间最短和位移最短条件混"
    ],
    memoryTip: "正对河岸时间短，垂直合速位移小，船速小则不可行",
    content: "小船过河两个最优解：时间最短：船头垂直河岸，t_min=河宽/船速；位移最短（河宽一定时）：令合速度方向垂直河岸，用平行四边形定则求船头偏角。特殊情况：若船水速，最短位河宽"
  },

  {
    id: "PHY-R31", title: "平抛运动分解", modelId: "PHY-M10",
    category: "抛体运动", difficulty: 1,
    oneLine: "水平：匀v_x=v₀；竖直：匀加v_y=gt，y=½gt²",
    coreSteps: [
      "Step1：建立坐标系（原点通常在抛出点", "Step2：水平分运动：x=v₀t，v_x=v₀（匀速）",
      "Step3：竖直分运动：v_y=gt，y=½gt²（初速度为零的匀加速）", "Step4：速度合成：v=v_x²+v_y²)，偏tanθ=v_y/v_x",
      "Step5：位移关系：tanφ=y/x=gt/(2v₀)"
    ],
    applicableTypes: ["平抛运动", "斜抛运动分解"],
    commonMistakes: [
      "竖直分运动误v_y=v₀+gt（竖直初速度为零", "混淆速度偏角 θ 和位移偏φ",
      "位移合成算成 x+y"
    ],
    memoryTip: "平抛水平匀速，竖直自由落；速度偏角看比值，位移偏角半倍走",
    content: "平抛运动分解：水平：匀速直线运动（a_x=0）；竖直：初速度为零的匀加速（a_y=g）。两个关键角度：速度偏角 tanθ=v_y/v_x=gt/v₀；位移偏tanφ=y/x=gt/(2v₀)。注θ=2φ"
  },

  {
    id: "PHY-R32", title: "平抛最大水平射, modelId: "PHY-M10"",
    category: "抛体运动", difficulty: 1,
    oneLine: "同高度平抛，落地速度偏角 45° 时水平射程最",
    coreSteps: [
      "Step1：落地时间由竖直分运动决定：t=2h/g)（h 为下落高度）", "Step2：水平射x=v₀t=v₀2h/g)",
      "Step3：落地速度偏角 tanθ=gt/v₀", "Step4：45° v₀=gt=2gh)",
      "Step5：若 v₀ 固定，最大射程由高度决定"
    ],
    applicableTypes: ["平抛射程", "同高度平抛比]",
    commonMistakes: [
      "误以为射程最大时速度方向 45°（这是斜抛，平抛落地偏角 θ=45° x 最大）", "忽略落地时间与射程的关系",
      "速度偏角和位移偏角混"
    ],
    memoryTip: "平抛落地45°，射程最大（水平面）",
    content: "平抛射程分析：落地时t=2h/g)，水平射x=v₀2h/g)。落地速度偏角 tanθ=gt/v₀=2gh)/v₀。当 θ=45° v₀=2gh)，射程最大（水平面情况下）"
  },

  {
    id: "PHY-R33", title: "斜抛运动", modelId: "PHY-M10",
    category: "抛体运动", difficulty: 2,
    oneLine: "分解为水平（匀速）和竖直（竖直上抛），最高点 v_y=0",
    coreSteps: [
      "Step1：分解初速度：v₀x=v₀cosθ，v₀y=v₀sinθ", "Step2：水平：x=v₀cosθ·t，v_x=v₀cosθ",
      "Step3：竖直：v_y=v₀sinθ-gt，y=v₀sinθ·t-½gt²", "Step4：最高点：v_y=0，v=v₀x（最小速度", "Step5：射程公式：x=v₀²sin2θ/g；射高：H=v₀²sin²θ/(2g)"
    ],
    applicableTypes: ["斜抛运动", "抛体射程", "体育运动抛体"],
    commonMistakes: [
      "在最高点把速度当零（只有竖直分量为零，水平分量存在", "把射程公式记错（sin2θ/g 不是 sin²θ", "忘记最高点时竖直分速度为零"
    ],
    memoryTip: "射程公式 x=v₀²sin2θ/g，45° 时水平射程最",
    content: "斜抛运动两个最值：最大射H=v₀²sin²θ/(2g)（最高点）；最大射x_max=v₀²/g（45° 时）。注意：斜抛的最高点速度最小（等于水平分量），但不是零"
  },

  {
    id: "PHY-R34", title: "平抛运动中的圆周", modelId: "PHY-M10",
    category: "抛体运动", difficulty: 3,
    oneLine: "找到几何关系（弦长、圆心角）→ 求时求速度",
    coreSteps: [
      "Step1：画出平抛轨迹和圆的交点", "Step2：找几何关系：弦长、圆心角、圆心到轨迹的距", "Step3：由竖直位移 y=½gt² 求时t", "Step4：水平位x=v₀t", "Step5：速度大小 v=v₀²+(gt)²)"
    ],
    applicableTypes: ["平抛与圆组合", "圆环问题"],
    commonMistakes: [
      "几何关系列错（圆心角与弦长的关系", "把水平位移当弧长",
      "速度方向画错"
    ],
    memoryTip: "平抛遇圆先画图，几何关系先求",
    content: "平抛与几何图形结合的问题，关键是找出时间 t 与几何量的关系。常见模型：平抛撞圆弧（用圆心角求弦长→y→求 t）、平抛过管道（找管道入口出口的几何位置）"
  },

  {
    id: "PHY-R35", title: "类平抛（合力方向与速度垂直, modelId: "PHY-M10"",
    category: "抛体运动", difficulty: 2,
    oneLine: "合外力恒定且与初速度垂直 运动与平抛相同，只是加速度不同",
    coreSteps: [
      "Step1：判断合外力方向是否与初速度垂直", "Step2：若垂直，将运动沿初速度方向和合外力方向分解",
      "Step3：沿初速度方向：匀速运", "Step4：沿合外力方向：初速度为零的匀加速运动，a=F/m",
      "Step5：速度、位移按两个方向分别求，然后矢量合成"
    ],
    applicableTypes: ["类平抛运", "电场中的偏转"],
    commonMistakes: [
      "不判断类平抛条件就套公式", "把加速度写成 g（类平抛a 不一定是 g", "混淆类平抛和平抛"
    ],
    memoryTip: "类平抛，合外力垂直初速度，匀匀加，与平抛同",
    content: "类平抛的判定：合外力恒定且与初速度垂直。处理方法与平抛完全相同，只是沿合外力方向的加速度不再g。典型应用：带电粒子在匀强电场中的偏转（a=qE/m）"
  },

  // ══════════════════════════════════════
  // R36-R45：圆周运动与万有引力
  // ══════════════════════════════════════

  {
    id: "PHY-R36", title: "圆周运动动力, modelId: "PHY-M11"",
    category: "圆周运动", difficulty: 1,
    oneLine: "向心F=mv²/r=mω²r=m(2π/T)²r，指向圆",
    coreSteps: [
      "Step1：找圆心（弯曲方向指向的一侧）", "Step2：受力分析，列出指向圆心方向的合", "Step3：F_mv²/r=mω²r=m(4π²/T²)r",
      "Step4：判断是匀速还是变速圆周，选择合适公"
    ],
    applicableTypes: ["水平面圆", "竖直平面圆周（绳/杆）", "圆锥]",
    commonMistakes: [
      "把某个分力当向心力（向心力是合力，不是额外力", "竖直圆周最高点时弄错向心力来源",
      "速度方向（沿切线）当成了向心力方"
    ],
    memoryTip: "向心力是合力，圆心是方向，速度永远沿切",
    content: "圆周运动动力学的核心：向心力是效果力，由其他力提供。匀速圆周：F_mv²/r=mω²r；变速圆周：还需分析切向加速度。竖直平面圆周：最高点 F_T+mg（绳模型），最低点 F_T-mg"
  },

  {
    id: "PHY-R37", title: "竖直平面圆周（绳/轨道, modelId: "PHY-M11"",
    category: "圆周运动", difficulty: 2,
    oneLine: "最高点临界速度 v_min=gR)；杆模型 v_min=0",
    coreSteps: [
      "Step1：明确模型——绳（只能拉）、杆（可拉可推）、轨道（内外约束", "Step2：最高点受力分析：绳模型 F_N+mg=mv²/R F_N=0 v_min=gR)；杆模型 F 可以向上v_min=0",
      "Step3：最低点：F_N-mg=mv²/R", "Step4：代公式求解"
    ],
    applicableTypes: ["过山", "球在竖直圆轨道运, "绳球/杆球模型"]",
    commonMistakes: [
      "绳模型最高点速度为零（不可能，会掉下来）", "混淆绳模型和杆模型的条件",
      "忘记向心力公式中r 是半"
    ],
    memoryTip: "绳球最高点 gR)，杆球可以零；轨道约束各不同，最低最高要分清",
    content: "竖直平面圆周三类模型：①链球：只能拉，最高点 v≥√(gR)，临界时 F_N=0；②轻杆：可推可拉，最高点 v；③光滑轨道：内侧约束，最高点至少 v。解题关键：先找临界点（最高点），确定 v_min"
  },

  {
    id: "PHY-R38", title: "万有引力定律", modelId: "PHY-M12",
    category: "万有引力", difficulty: 1,
    oneLine: "F=GMm/r²，黄金代GM=gR²",
    coreSteps: [
      "Step1：明确两个物体，r 是质心间", "Step2：地面附近：r≈R_地，F≈mg GM=gR²（黄金代换）",
      "Step3：环绕问题：F=GMm/r²=mg'=mv²/r=mω²r=m(2π/T)²r",
      "Step4：根据已知量选用合适公"
    ],
    applicableTypes: ["天体质量计算", "卫星环绕", "重力加速度变化"],
    commonMistakes: [
      "r 当成高度 h（r=R+h",
      "混淆卫星轨道半径和轨道高",
      "忽略黄金代换 GM=gR² 的使"
    ],
    memoryTip: "万有引力 GMm/r²，黄金代GM=gR²，天上地下都能用",
    content: "万有引力公式 F=GMm/r²。天体质量问题：黄金代换 GM=gR²（R 为天体半径）；环绕速度 v=GM/r)；第一宇宙速度 vgR).9 km/s；第二宇宙速度 vv₁≈11.2 km/s"
  },

  {
    id: "PHY-R39", title: "卫星环绕规律", modelId: "PHY-M12",
    category: "万有引力", difficulty: 1,
    oneLine: "r 越大，v 越小，越小，T 越大，a 越小",
    coreSteps: [
      "Step1：万有引力提供向心力：GMm/r²=ma_",
      "Step2：线速度：v=GM/r) rv",
      "Step3：角速度：GM/r³) rω",
      "Step4：周期：T=2πr³/GM) rT",
      "Step5：向心加速度：a=GM/r² ra"
    ],
    applicableTypes: ["卫星比较运动", "双星问题", "同步卫星"],
    commonMistakes: [
      "误以r 越大速度越大", "同步卫星高度算错（h.6R_地）",
      "忽略开普勒第三定律 T²/r³=常数"
    ],
    memoryTip: "高轨低速大周期，外大内小记心中",
    content: "卫星环绕规律（越高越慢）：v/√r，ω∝1/r^(3/2)，T∝r^(3/2)。同步卫星：T=24h，h.6×10km，v.1 km/s。双星问题：两颗星绕共同圆心，角速度相同，轨道半径比=质量比的反比"
  },

  {
    id: "PHY-R40", title: "双星问题", modelId: "PHY-M12",
    category: "万有引力", difficulty: 2,
    oneLine: "两颗星绕同一圆心，角速度相同，向心力由万有引力提",
    coreSteps: [
      "Step1：两颗星间距 r=rr",
      "Step2：对1：GMm₁mr²=m₁ω²r",
      "Step3：对2：GMm₁mr²=m₂ω²r", "Step4：两式相除：rrmm", "Step5：总质M=mm₂，周期 T=2πr³/(GM))"
    ],
    applicableTypes: ["双星系统", "多星问题"],
    commonMistakes: [
      "r 当成某颗星的轨道半径", "两颗星角速度不同（错误，双星角速度相同", "把万有引力直接当向心力时 r 取错"
    ],
    memoryTip: "双星角速同，距离比质量反比",
    content: "双星模型特征：两颗星绕共同圆心做匀速圆周运动，角速度相同；万有引力提供向心力；轨道半径之比等于质量之比的反比：rrmm₁"
  },

  {
    id: "PHY-R41", title: "宇宙速度", modelId: "PHY-M12",
    category: "万有引力", difficulty: 1,
    oneLine: "v7.9 km/s（环绕），v11.2 km/s（脱离），v16.7 km/s（逃逸太阳）",
    coreSteps: [
      "Step1：第一宇宙速度 vgR)=7.9 km/s（贴近地面环绕）", "Step2：第二宇宙速度 vv11.2 km/s（脱离地球引力）",
      "Step3：第三宇宙速度 v16.7 km/s（逃逸太阳，需先脱离地球）", "Step4：推导：v=2gR) 用于其他天体"
    ],
    applicableTypes: ["宇宙速度计算", "卫星发射"],
    commonMistakes: [
      "混淆三个宇宙速度",
      "g GM 混用时单位不一",
      "忽略地球半径 R 的数量级400 km"
    ],
    memoryTip: "一圈七点九，二圈十一点二，三圈十六点",
    content: "三个宇宙速度：第一宇宙速度——卫星贴近地面做圆周运动的速度（最小发射速度、最大环绕速度）；第二宇宙速度——克服地球引力所需的最小速度；注意：发射速度>7.9 km/s 时卫星做椭圆轨道运动，不是圆周"
  },

  // ══════════════════════════════════════
  // R42-R55：功和能
  // ══════════════════════════════════════

  {
    id: "PHY-R42", title: "功的计算", modelId: "PHY-M13",
    category: "功和, difficulty: 1",
    oneLine: "W=Flcosθ，是力与位移方向的夹角",
    coreSteps: [
      "Step1：找F、位l、夹θ", "Step2：代入公W=Flcosθ",
      "Step3：F l 要对应同一参考系",
      "Step4：注意恒力和变力（变力用功能关系或图像法"
    ],
    applicableTypes: ["恒力做功", "变力做功", "摩擦力做]",
    commonMistakes: [
      "F l 的夹角搞", "摩擦力做功算f·l（正确的W=-fl，如果方向相反）",
      "功是标量但有正负，混淆正负与方向"
    ],
    memoryTip: "力×位移×cos夹角，夹角为零功为正，夹角一百八做负",
    content: "功的计算核心是找对夹θ。注意：功是标量，正功表示动力做功，负功表示阻力做功。重力做功只与高度差有关（与路径无关）；摩擦力做功与路径有关，路程越长做功越多（负功）"
  },

  {
    id: "PHY-R43", title: "功率", modelId: "PHY-M13",
    category: "功和, difficulty: 1",
    oneLine: "P=W/t=Fvcosθ（平均功率），瞬时功P=Fv",
    coreSteps: [
      "Step1：区分平均功率和瞬时功率", "Step2：平均功率：P=W/t P=Fv̄cosθ",
      "Step3：瞬时功率：P=Fvcosθ（v 是瞬时速度",
      "Step4：机车启动问题：P=Fv，当 F=f（阻力）v 达到最"
    ],
    applicableTypes: ["机车启动", "功率比较", "瞬时功率"],
    commonMistakes: [
      "混淆平均功率和瞬时功率公", "机车启动最大速度条件判断错误",
      "忘记功率的单位换算（1 kW=1000 W"
    ],
    memoryTip: "平均功率W/t，瞬时功Fv；机车启动最大速，功率一P=fv",
    content: "功率公式：P=W/t（定义式），P=Fv（当 v 为平均速度时求平均功率，当 v 为瞬时速度时求瞬时功率）。机车两种启动方式：①恒定功率：P 一定，v↑→F↓→a↓→最终匀速（a=0，v_max=P/f）；②恒定加速度：a 一定→F 一定→v↑→P=Fv↑→P 达额定后恒定→匀加速结束"
  },

  {
    id: "PHY-R44", title: "动能定理", modelId: "PHY-M14",
    category: "功和, difficulty: 1",
    oneLine: "W_ΔE_k=½mv末½mv初",
    coreSteps: [
      "Step1：对物体做受力分",
      "Step2：计算所有力做的功（正功、负功分别写",
      "Step3：W_WW...（代数和",
      "Step4：列方程 W_½mv末½mv初",
      "Step5：代入数值求"
    ],
    applicableTypes: ["单个物体", "多过程运, "含摩擦的曲线运动"]",
    commonMistakes: [
      "漏掉某个力做的功", "W_总当成某个分力做的功",
      "正负号搞"
    ],
    memoryTip: "动能定理 W_ΔE_k，合力做功改变动",
    content: "动能定理：W_ΔE_k=½mv末½mv初²。适用范围：直线运动、曲线运动、变力做功均可（动能定理是标量式，只需计算各力做功的代数和）"
  },

  {
    id: "PHY-R45", title: "机械能守恒定, modelId: "PHY-M14"",
    category: "功和, difficulty: 1",
    oneLine: "只有重力/弹簧弹力做功 机械能守",
    coreSteps: [
      "Step1：判断是否只有重力或弹簧弹力做功", "Step2：若满足条件：E_k+E_p=常数",
      "Step3：列方程：mgh½mv₁mgh½mv₂",
      "Step4：选好零势能参考面（通常选最低点",
      "Step5：注意系统机械能守恒（系统内各物体机械能之和守恒"
    ],
    applicableTypes: ["自由落体", "弹簧振子", "光滑斜面/圆弧"],
    commonMistakes: [
      "把机械能守恒当成只有重力做功（弹簧弹力也算）", "忘记系统内各物体的机械能都要计入",
      "零势能面选错导致计算出错"
    ],
    memoryTip: "机械能守恒：只有重力或弹簧弹力做功；除这两种力做功，机械能一定变",
    content: "机械能守恒条件：只有重力（或弹簧弹力）做功。表达式：EE₂，mgh½mv₁mgh½mv₂²。典型应用：自由落体、弹簧振子、光滑轨道、抛体运动（忽略空气阻力）"
  },

  {
    id: "PHY-R46", title: "重力势能", modelId: "PHY-M14",
    category: "功和, difficulty: 1",
    oneLine: "E_p=mgh，h 是相对零势能面的高度",
    coreSteps: [
      "Step1：选定零势能参考面（通常选地面或最低点", "Step2：计算高h（相对于零势能面", "Step3：E_p=mgh",
      "Step4：重力做W_G=mgΔh=mghmgh末（只与初末高度有关"
    ],
    applicableTypes: ["重力势能计算", "重力做功分析"],
    commonMistakes: [
      "h 当成位置坐标（h 是相对高度差", "混淆重力势能和重力做功（一个是状态量，一个是过程量）",
      "h 为负值时（势能也为负"
    ],
    memoryTip: "重力势能 mgh，零势面外取负；重力做功 mgh，前后相减是正功",
    content: "重力势能 E_p=mgh，h 是相对零势能面的高度差。重力做功的特点：只与初末位置有关，与路径无关。W_G=mg(hh=E_pE_p₂（重力做正功，重力势能减少）"
  },

  {
    id: "PHY-R47", title: "弹性势, modelId: "PHY-M14"",
    category: "功和, difficulty: 1",
    oneLine: "弹簧弹性势E_p=½kx²（x 为形变量",
    coreSteps: [
      "Step1：计算弹簧形变量 x", "Step2：E_p=½kx²",
      "Step3：弹力做W=½kx₁½kx₂²（等于弹性势能的减少量）", "Step4：与其他能量转化结合时，注意系统能量守恒"
    ],
    applicableTypes: ["弹簧振子", "弹簧与其他运动组]",
    commonMistakes: [
      "x 当成弹簧长度（x 是形变量", "弹性势能公式记错（不是 kx", "忽略弹性势能与其他形式能的转化"
    ],
    memoryTip: "弹性势能½kx²，形变量来平",
    content: "弹簧弹性势E_p=½kx²（x 为形变量，不是长度）。弹力做W=½kx₁½kx₂-(E_pE_p。弹性势能永远为正（形变量越大，储能越多）"
  },

  {
    id: "PHY-R48", title: "功和能关系综, modelId: "PHY-M14"",
    category: "功和, difficulty: 2",
    oneLine: "功是能量转化的量度，但功≠能",
    coreSteps: [
      "Step1：分析能量种类（动能、势能、内能、电能等", "Step2：分析做功情况：什么力做功 什么能量转", "Step3：列功能关系：ΔE=其他力做的功", "Step4：非重力/弹力做功 机械能不守恒", "Step5：摩擦生Q=f·Δx（相对位移）"
    ],
    applicableTypes: ["功能综合", "摩擦生热", "能量转化问题"],
    commonMistakes: [
      "混淆功和能的概念（功是过程量，能是状态量", "摩擦生热 Q=f·s_rel 中的 s_rel 是相对位移，不是对地位移",
      "把机械能减少量当成摩擦力做功"
    ],
    memoryTip: "功是能量转化的量度，摩擦生热 Q=f·s相对",
    content: "功和能的关系：功是能量转化的量度，但功≠能。功能关系：ΔE=其他力做的功。常见能量转化：重力做功→动能和势能转化；摩擦做功→机械能转化为内能（Q=f·s相对）"
  },

  {
    id: "PHY-R49", title: "能量守恒定律", modelId: "PHY-M14",
    category: "功和, difficulty: 1",
    oneLine: "能量既不会凭空产生也不会凭空消失，只能从一种形式转化为另一种形",
    coreSteps: [
      "Step1：分析研究系统的初状态和末状",
      "Step2：列出初状态总能E",
      "Step3：列出末状态总能E", "Step4：列方程 EE", "Step5：若有能量损失（摩擦、碰撞等），需考虑内能或其他形式能"
    ],
    applicableTypes: ["碰撞问题", "弹簧振子", "综合能量问题"],
    commonMistakes: [
      "把机械能守恒当成能量守恒（摩擦导致内能增加）", "忽略内能或其他形式能", "初末状态能量种类列不全"
    ],
    memoryTip: "能量守恒全局观，各种能量都要",
    content: "能量守恒定律是自然界最普遍的规律之一。在涉及摩擦、碰撞、非弹性形变等问题时，机械能会减少，但减少的机械能转化为内能（热），总能量守恒"
  },

  {
    id: "PHY-R50", title: "碰撞分类与判, modelId: "PHY-M15"",
    category: "动量", difficulty: 2,
    oneLine: "弹性碰撞：动能守恒；完全非弹性碰撞：共速；非弹性碰撞：介于两者之",
    coreSteps: [
      "Step1：判断碰撞类", "  - 弹性碰撞：动能守恒，e=1",
      "  - 完全非弹性碰撞：共速，e=0", "  - 非弹性碰撞：0<e<1",
      "Step2：列动量守恒方程", "Step3：若是弹性碰撞，再列动能守恒方程",
      "Step4：若是完全非弹性碰撞，v=v（共速）"
    ],
    applicableTypes: ["碰撞问题", "爆炸问题", "反冲问题"],
    commonMistakes: [
      "弹性碰撞和完全非弹性碰撞混", "忘记判断碰撞后速度方向",
      "把碰撞后速度当成交换（仅一维对心碰撞且质量相等时才交换"
    ],
    memoryTip: "弹性碰动能守，完全非弹共速度，非弹介于两者间",
    content: "碰撞分类：①弹性碰撞：动量和动能均守恒；②完全非弹性碰撞：动量守恒，动能损失最大（损失转化为内能）；③非弹性碰撞：动量守恒，动能部分损失。一维对心碰撞恢复系e=(v-v)/(vv"
  },

  {
    id: "PHY-R51", title: "动量守恒定律", modelId: "PHY-M15",
    category: "动量", difficulty: 1,
    oneLine: "系统不受外力（或外力远小于内力） Σp=常数",
    coreSteps: [
      "Step1：明确系统（研究对象有哪些物体）", "Step2：判断系统是否受外力或外力是否可忽略",
      "Step3：列动量守恒方程：m₁vm₂vm₁v+m₂v", "Step4：注意正方向的规定（速度带符号代入）",
      "Step5：若是多过程，需分阶段列方程"
    ],
    applicableTypes: ["碰撞", "爆炸", "反冲", "发射卫星"],
    commonMistakes: [
      "把内力当外力（系统内力不改变总动量）", "不规定正方向导致符号混乱",
      "多物体时不列清楚每个物体的速度"
    ],
    memoryTip: "动量守恒看系统，内力改变动量不可",
    content: "动量守恒条件：系统不受外力，或外力远小于内力（爆炸、碰撞等）。注意：动量是矢量，正方向要统一；动量守恒和机械能守恒可以同时成立（弹性碰撞）或不同时成立（非弹性碰撞）"
  },

  {
    id: "PHY-R52", title: "动量定理", modelId: "PHY-M15",
    category: "动量", difficulty: 1,
    oneLine: "I=Δp，合外力的冲量等于动量变",
    coreSteps: [
      "Step1：分析物体受", "Step2：计算合外力的冲I=Ft（若是变力，用平均值）",
      "Step3：计算动量变Δp=pp", "Step4：列方程 I=Δp",
      "Step5：若是多过程，需分阶段分"
    ],
    applicableTypes: ["冲量问题", "打击问题", "缓冲问题"],
    commonMistakes: [
      "冲量方向与动量变化方向混", "把冲量当成冲力（F·t 不是 F", "不规定正方向"
    ],
    memoryTip: "冲量等于动量变，正方向要记牢",
    content: "动量定理：I=ΣF·t=Δp。适用范围：恒力、变力、直线、曲线均可。典型应用：缓冲问题（延长作用时间→减小平均力）、打击问题（瞬间冲量很大）"
  },

  {
    id: "PHY-R53", title: "一维碰撞速度公式", modelId: "PHY-M15",
    category: "动量", difficulty: 2,
    oneLine: "弹性碰：v=[(mmv2m₂v₂]/(mm；完全非弹：共v'",
    coreSteps: [
      "Step1：判断碰撞类型（弹性、完全非弹、非弹）", "Step2：列动量守恒：m₁vm₂vm₁v+m₂v",
      "Step3：若是弹性碰撞，再列动能守恒",
      "Step4：联立求",
      "Step5：验证碰后速度是否合理（碰后相对速度不能改变方向"
    ],
    applicableTypes: ["一维碰", "正碰"],
    commonMistakes: [
      "混淆弹性碰撞和完全非弹性碰撞的公式", "碰后速度方向判断错误",
      "忘记验证合理性（v>v v>v 根据题意"
    ],
    memoryTip: "弹性碰后速度，背公式快速求解；完全非弹共速度",
    content: "一维弹性碰撞速度公式：v=[(mmv2m₂v₂]/(mm，v=[(mmv2m₁v₁]/(mm。特例：mm时，两球交换速度。完全非弹性碰撞：v=v=[m₁vm₂v₂]/(mm"
  },

  {
    id: "PHY-R54", title: "人船模型", modelId: "PHY-M15",
    category: "动量", difficulty: 2,
    oneLine: "系统动量守恒，人向右走船向左移，位移与质量成反比",
    coreSteps: [
      "Step1：判断系统动量是否守恒（水平方向无外力）", "Step2：列动量守恒=m人vm船v船（代数和为零）",
      "Step3：由平均速度关系m人·sm船·s0", "Step4：ssL（L 为船长）",
      "Step5：解方程s人：sm船：m"
    ],
    applicableTypes: ["人船模型", "反冲运动"],
    commonMistakes: [
      "混淆位移和速度的关", "忘记总位移等于船", "把动量守恒写m人vm船v常数（非零）"
    ],
    memoryTip: "人船模型位移比，质量成反",
    content: "人船模型核心：系统水平方向动量守恒。由动量守恒和平均速度关系可得：m₁sm₂s₂（位移与质量成反比），ssL。常见变形：两人换位、物体从船头移到船尾等"
  },

  {
    id: "PHY-R55", title: "爆炸与反, modelId: "PHY-M15"",
    category: "动量", difficulty: 2,
    oneLine: "爆炸瞬间内力≫外动量守恒；动能增加（化学弹性势能转化）",
    coreSteps: [
      "Step1：爆炸瞬间内力极大，动量守恒", "Step2：爆炸后各物体速度由动量守恒决", "Step3：注意爆炸后各物体可能受外力（重力）作用",
      "Step4：能量分析：爆炸过程化学弹性势能转化为动能，总动能增"
    ],
    applicableTypes: ["炮弹发射", "火箭反冲", "枪械后坐]",
    commonMistakes: [
      "把爆炸当成弹性碰撞（爆炸后动能增加）",
      "忽略重力（竖直方向的爆炸",
      "混淆爆炸瞬间和后续运"
    ],
    memoryTip: "爆炸动量守，动能必定增加",
    content: "爆炸过程特点：①内力≫外力，动量守恒；②化学弹性势能→动能，总动能增加；③时间极短，可以忽略重力等外力。典型应用：炮弹发射、火箭反冲、枪械后坐力"
  },

  {
    id: "PHY-R56", title: "动量守恒与机械能守恒联合", modelId: "PHY-M15",
    category: "动量", difficulty: 2,
    oneLine: "弹性碰撞两守恒，非弹性碰只守动量，完全非弹损失最",
    coreSteps: [
      "Step1：判断碰撞类型（弹性、完全非弹、非弹）",
      "Step2：列动量守恒方程（所有碰撞类型均成立",
      "Step3：弹性碰撞再加动能守恒方",
      "Step4：解方程",
      "Step5：验证碰后速度合理"
    ],
    applicableTypes: ["碰撞综合", "弹簧物块碰撞"],
    commonMistakes: [
      "非弹性碰撞也列动能守恒（错！只有弹性碰撞才动能守恒", "动量守恒和机械能守恒条件混淆",
      "忘记验证碰后相对速度方向"
    ],
    memoryTip: "碰撞先判类，弹性双守恒，非弹只守动",
    content: "碰撞问题分类：①弹性碰撞：动量+动能均守恒；②非弹性碰撞：动量守恒，动能减少；③完全非弹性碰撞：动量守恒，动能损失最大。弹簧物块问题常考：弹簧压缩→碰撞→弹簧恢复全过程"
  },

  {
    id: "PHY-R57", title: "能量-动量双守恒综, modelId: "PHY-M16"",
    category: "力学综合", difficulty: 3,
    oneLine: "过程分段：哪段满足什么条件就用对应规",
    coreSteps: [
      "Step1：全过程分析，划分阶", "Step2：对每段分析适用规律", "  - 机械能守恒：只有重力/弹力做功", "  - 动量守恒：外力为零或可忽", "  - 动能定理：单物体任意过程", "  - 能量守恒：涉及内能时",
      "Step3：找各阶段的初末状", "Step4：列方程求解"
    ],
    applicableTypes: ["力学综合压轴", "弹簧轨道组合"],
    commonMistakes: [
      "全过程机械能守恒（错！有摩擦/碰撞就不守恒", "分不清各阶段适用的规", "漏掉内能转化"
    ],
    memoryTip: "力学综合分段算，条件决定用什么律",
    content: "力学综合题的核心是分段分析。每段用不同规律：光滑无摩擦→机械能守恒；涉及碰撞→动量守恒（弹性碰加动能守恒）；涉及摩擦→机械能减内能增加；任意过程→动能定理"
  },

  // ══════════════════════════════════════
  // R58-R75：电
  // ══════════════════════════════════════

  {
    id: "PHY-R58", title: "库仑定律", modelId: "PHY-M17",
    category: "电场", difficulty: 1,
    oneLine: "F=kQq/r²，方向在连线上，同性相斥异性相",
    coreSteps: [
      "Step1：判断两点电荷的电", "Step2：计算库仑力大小 F=k|Qq|/r²",
      "Step3：判断方向（同性相斥，异性相吸）", "Step4：若是多个电荷，逐个分析叠加"
    ],
    applicableTypes: ["点电荷相互作, "三电荷平],
    commonMistakes: [
      "k 记错（k=9×10N·m²/C²", "混淆 r² r",
      "多个电荷时方向判断错"
    ],
    memoryTip: "库仑定律 F=kQq/r²，平方反比同性斥",
    content: "库仑定律 F=kQq/r²，适用于点电荷。静电力叠加原理：多个点电荷对某电荷的合力等于各库仑力的矢量和。三电荷平衡：两个同号电荷夹一个异号电荷，且满q₁rq₂r₂"
  },

  {
    id: "PHY-R59", title: "电场强度", modelId: "PHY-M17",
    category: "电场", difficulty: 1,
    oneLine: "E=F/q 定义式；点电E=kQ/r²；匀强电E=U/d",
    coreSteps: [
      "Step1：明确是哪种电场（点电荷、匀强电场等", "Step2：点电荷：E=kQ/r²，方向沿连线（正电荷场向外）",
      "Step3：匀强电场：E=U/d，方向垂直于等势",
      "Step4：多个电场叠加时，用平行四边形定"
    ],
    applicableTypes: ["点电荷电", "匀强电, "电场叠加"]",
    commonMistakes: [
      "混淆 E=F/q（定义式）和 E=kQ/r²（点电荷公式", "电场强度方向判断错误",
      "叠加时矢量合成出"
    ],
    memoryTip: "E 定义F/q，点电荷kQ/r²，匀强场U/d",
    content: "电场强度的三种求法：①定义式 E=F/q（普遍适用）；②点电荷 E=kQ/r²；③匀强电E=U/d。方向：规定为正电荷在该点受电场力的方向。电场叠加遵循平行四边形定则"
  },

  {
    id: "PHY-R60", title: "电势与电势能", modelId: "PHY-M17",
    category: "电场", difficulty: 1,
    oneLine: "φ=E_p/q（相对值），正电荷高电势→高电势能；负电荷相反",
    coreSteps: [
      "Step1：选零势能参考面（通常选无穷远处或大地", "Step2：计算电φ=E_p/q",
      "Step3：正电荷：离正电荷越φ 越高", "Step4：负电荷：离负电荷越φ 越低",
      "Step5：电势能 E_p=qφ"
    ],
    applicableTypes: ["电势计算", "电势能比]",
    commonMistakes: [
      "混淆电势和电势能（一个是场性质，一个是电荷性质", "正负电荷的电势能变化判断错误",
      "忘记零势能参考面"
    ],
    memoryTip: "正荷高势高能，负荷高势低",
    content: "电势 φ：描述电场能的性质的物理量，是标量，相对值。电势能 E_p=qφ：电荷在电场中具有的能，取决于电荷和电势。正电荷在电势高处电势能大，负电荷在电势高处电势能小"
  },

  {
    id: "PHY-R61", title: "电场线与等势, modelId: "PHY-M17"",
    category: "电场", difficulty: 1,
    oneLine: "电场线方电场方向；等势面⊥电场线；密处场强强",
    coreSteps: [
      "Step1：电场线方向=该点场强方向=正电荷受电场力方", "Step2：等势面与电场线垂直",
      "Step3：电场线密集→场强大；稀疏→场强",
      "Step4：沿电场线方向电势降",
      "Step5：等势面上移动电荷电场力不做"
    ],
    applicableTypes: ["电场线分, "等势面问],
    commonMistakes: [
      "混淆电场线方向和电场力方",
      "等势面与电场线关系记",
      "不记得沿电场线方向电势降"
    ],
    memoryTip: "电场线方向即场强方向，等势面与它相垂直；线密场强线疏场弱，顺线方向势降低",
    content: "电场线和等势面的关系：电场线与等势面处处垂直；电场线从高电势指向低电势；相邻等势面间电势差相等时，电场线密集处等势面也密集（场强大）"
  },

  {
    id: "PHY-R62", title: "带电粒子在电场中的运, modelId: "PHY-M17"",
    category: "电场", difficulty: 2,
    oneLine: "加速：W=ΔE_k；偏转：类平抛（qE/m",
    coreSteps: [
      "加速（恒定电场）：", "  - W=qU=ΔE_k=½mv末½mv初", "  - 若初速为零：v=2qU/m)", "偏转（匀强电场）", "  - 类平抛：a=qE/m=qU/(md)", "  - v_x=v₀，v_y=qUt/(md)", "  - 偏转距离 y=½qUt²/(md)，偏转角 tanθ=qUt/(mdv₀)"
    ],
    applicableTypes: ["示波器模", "带电粒子加, "带电粒子偏转"]",
    commonMistakes: [
      "把偏转加速度g（正确是 qE/m",
      "加速和偏转的电压混",
      "偏转角计算公式记"
    ],
    memoryTip: "加速电场用能，动能增量；偏转电场类平抛，a=qE/m",
    content: "带电粒子在电场中两类运动：①加速：恒定电场，W=qU=ΔE_k；②偏转：匀强电场，类平抛运动，a=qE/m。示波管原理：先加速再偏转，加速电压决v₀，偏转电压决定偏转距离"
  },

  {
    id: "PHY-R63", title: "电容器动态分, modelId: "PHY-M18"",
    category: "电路", difficulty: 2,
    oneLine: "U 不变C 变→Q 变；Q 不变C 变→U ",
    coreSteps: [
      "情况一：电容器与电源相连（U 不变", "  - C=εS/(4πkd) 变化时，Q=CU 随之变化",
      "  - 场强 E=U/d（d 变化E 变化", "情况二：电容器充电后断开（Q 不变", "  - C 变化U=Q/C 变化", "  - 场强 E=4πkQ/(εS)（与 d 无关！）"
    ],
    applicableTypes: ["电容器动态电", "平行板电容器"],
    commonMistakes: [
      "混淆 U 不变Q 不变两种情况", "认为 E=U/d 总是成立", "不分析极板间距离变化时的 E 变化"
    ],
    memoryTip: "U 不变Q，C Q 变；Q 不变U，C U ",
    content: "电容器动态分析两种情况：①U 不变（与电源相连）：C 变化→Q 变化，场E=U/d；②Q 不变（充电后断开）：C 变化→U 变化，场E=4πkQ/(εS)（与 d 无关）"
  },

  {
    id: "PHY-R64", title: "电路动态分, modelId: "PHY-M18"",
    category: "电路", difficulty: 2,
    oneLine: "串反并同——串阻变大则其上电压变大，并联支路电压随总阻变化",
    coreSteps: [
      "Step1：判断电路结构（串联/并联",
      "Step2：滑变电阻变分析总电阻变",
      "Step3：串反并同：串联支路中一个阻值变其电压变大；并联支路电压随总阻变大而变", "Step4：由欧姆定律 I=U/R_求干路电", "Step5：逐层分析各支路电压和电流"
    ],
    applicableTypes: ["滑变电阻动态电", "电表偏转变化"],
    commonMistakes: [
      "串反并同记混", "不分析总电阻变化直接算",
      "电流表内阻忽略时出错"
    ],
    memoryTip: "串反并同：串联阻变大压大，并联压变阻同向",
    content: "电路动态分析核心口诀：串反并同。串联电路中某一电阻增大→总电阻增大→总电流减小→该电阻电压增大（但其他电阻电压减小）。并联电路中某一支路电阻增大→该支路电流减小→干路电流减小"
  },

  {
    id: "PHY-R65", title: "闭合电路欧姆定律", modelId: "PHY-M18",
    category: "电路", difficulty: 1,
    oneLine: "I=E/(R+r)，路端电U=E-Ir",
    coreSteps: [
      "Step1：分清内r 和外R", "Step2：闭合电路欧姆定I=E/(R+r)",
      "Step3：路端电U=E-Ir=E·R/(R+r)", "Step4：当 R 增大时，I 减小，U 增大",
      "Step5：外电路断路I=0，U=E；短路时 U=0，I=E/r"
    ],
    applicableTypes: ["闭合电路分析", "输出功率", "效率"],
    commonMistakes: [
      "混淆内电压和路端电压", "外电R=0 时误以为 I=E/r 而忽U=0",
      "输出功率最大时 R=r（不R=0"
    ],
    memoryTip: "闭合电路 I=E/(R+r)，路端电U=E-Ir",
    content: "闭合电路欧姆定律：I=E/(R+r)，路端电U=E-Ir。当 R=r 时输出功率最大（P_max=E²/(4r)）。电源效η=R/(R+r)"
  },

  {
    id: "PHY-R66", title: "电功与电, modelId: "PHY-M18"",
    category: "电路", difficulty: 1,
    oneLine: "电功 W=UIt，电Q=I²Rt，纯电阻电路两者相",
    coreSteps: [
      "Step1：判断是否为纯电", "Step2：纯电阻：W=Q=IUt=I²Rt=U²t/R",
      "Step3：非纯电阻（电动机等）：W=UIt，Q=I²Rt，W>Q", "Step4：功P=W/t=UI"
    ],
    applicableTypes: ["电能计算", "电动机效, "电热],
    commonMistakes: [
      "非纯电阻电路也用 W=I²Rt（错！非纯电W>Q",
      "混淆电功和电",
      "电动机卡住时当成纯电"
    ],
    memoryTip: "纯电W=Q，非纯电W>Q",
    content: "电功 W=UIt，非纯电阻电路中 W>Q（部分电能转化为机械化学能）。电Q=I²Rt 总是成立。功率关系：总功P=UI；输出功P_UI-I²r；热功率 P_I²r"
  },

  // ══════════════════════════════════════
  // R67-R75：磁场与电磁感应
  // ══════════════════════════════════════

  {
    id: "PHY-R67", title: "安培, modelId: "PHY-M19"",
    category: "磁场", difficulty: 1,
    oneLine: "F=BILsinθ，B I 的夹",
    coreSteps: [
      "Step1：判B 与导线的夹角 θ",
      "Step2：F=BILsinθ（sinθ=1 F 最大，B⊥I", "Step3：方向用左手定则：磁感线穿手心，四指电流方向，大拇指即受力方", "Step4：若是通电导线在磁场中平衡，还需结合受力分析"
    ],
    applicableTypes: ["通电导线在磁场中", "磁电式仪, "电动机原],
    commonMistakes: [
      "sinθ 中的 θ 当成 B 与速度的夹", "左手定则四指和大拇指混淆",
      "F=BIL L 是有效长度（投影到垂B 的方向）"
    ],
    memoryTip: "F=BILsinθ，左手定则判方向",
    content: "安培F=BILsinθ，L 是通电导线在磁场中的有效长度（B⊥L F 最大）。左手定则：磁感线穿左手手心，四指沿电流方向，大拇指所指方向即为安培力方向"
  },

  {
    id: "PHY-R68", title: "洛伦兹力", modelId: "PHY-M19",
    category: "磁场", difficulty: 1,
    oneLine: "F=qvBsinθ，B v 的夹",
    coreSteps: [
      "Step1：判B 与速度的夹θ",
      "Step2：F=qvBsinθ（90° F 最大，v⊥B",
      "Step3：方向用左手定则：四指速度方向，v⊥B 时大拇指即受力方",
      "Step4：若是带电粒子在磁场中做匀速圆周运动，F=qvB 充当向心"
    ],
    applicableTypes: ["带电粒子在磁场中运动", "速度选择, "质谱],
    commonMistakes: [
      "sinθ 中的 θ 当成 B 与电流的夹角（洛伦兹力中B v", "混淆左手定则和右手定", "做圆周运动时忘了 F=qvB 是向心力"
    ],
    memoryTip: "F=qvBsinθ，左手定则判方向，垂直磁场做圆周",
    content: "洛伦兹力 F=qvBsinθ，注θ v B 的夹角（安培力中I B 的夹角）。当 v⊥B 时，F=qvB 且充当向心力。左手定则：四指→速度方向（负电荷则反向），大拇指→受力方向"
  },

  {
    id: "PHY-R69", title: "带电粒子在磁场中做匀速圆周运, modelId: "PHY-M19"",
    category: "磁场", difficulty: 2,
    oneLine: "qvB=mv²/R R=mv/(qB)，T=2πm/(qB)",
    coreSteps: [
      "Step1：判v⊥B，找圆心（两条速度垂线的交点）", "Step2：由向心力公式：qvB=mv²/R，得 R=mv/(qB)",
      "Step3：圆周半R m、v、q、B 有关", "Step4：周T=2πR/v=2πm/(qB)（与 v 无关！）",
      "Step5：结合几何关系求圆心角和时间"
    ],
    applicableTypes: ["磁场中的圆周运动", "回旋加速器", "磁约]",
    commonMistakes: [
      "把半径公式记R=mv/(qB)", "认为周期v 有关（实际上 T v 无关", "找圆心时画错速度方向"
    ],
    memoryTip: "半径 R=mv/(qB)，周T=2πm/(qB)，周期与速度无关",
    content: "带电粒子在匀强磁场中垂直入射时做匀速圆周运动。关键公式：半径 R=mv/(qB)；周T=2πm/(qB)（与 v、R 无关，仅m/q 决定）。回旋加速器原理：交变电场加速，匀强磁场做圆周，回旋周期不变"
  },

  {
    id: "PHY-R70", title: "磁通量", modelId: "PHY-M20",
    category: "电磁感应", difficulty: 1,
    oneLine: "Φ=BScosθ，B S 的夹",
    coreSteps: [
      "Step1：找磁感线穿过的面积 S", "Step2：判B S 的夹θ",
      "Step3：BScosθ",
      "Step4：磁通量变化 ΔΦ=ΦΦ"
    ],
    applicableTypes: ["磁通量计算", "电磁感应条件"],
    commonMistakes: [
      "θ 当成 B 与平面的夹角（正确是 B 与法线的夹角", "混淆磁通量 Ψ 和磁Ψ=NΦ",
      "面积变化时忘cosθ"
    ],
    memoryTip: "Φ=BScosθ，B 与面法线的夹",
    content: "磁通量 Φ=BScosθ（单位：韦伯 Wb）。当线圈N 匝时，磁Ψ=NΦ。穿过某一面的磁通量发生变化是电磁感应现象产生的条件"
  },

  {
    id: "PHY-R71", title: "法拉第电磁感应定, modelId: "PHY-M20"",
    category: "电磁感应", difficulty: 1,
    oneLine: "E=n|ΔΦ/Δt|，方向由楞次定律判断",
    coreSteps: [
      "Step1：计算磁通量变化 ΔΦ", "Step2：代E=n|ΔΦ/Δt|",
      "Step3：用楞次定律判断感应电流方向", "Step4：若导体切割磁感线，E=BLv（L⊥v 时）"
    ],
    applicableTypes: ["电磁感应计算", "导体切割"],
    commonMistakes: [
      "E=nΔΦ/Δt 记成 E=ΔΦ/Δt（忘n", "E=BLv 中的 L 当成导线总长（是有效切割长度", "忽略感应电动势的方向判断"
    ],
    memoryTip: "E=nΔΦ/Δt，感应电动势看匝数；导体切割 BLv，三者垂直是关键",
    content: "法拉第电磁感应定律：E=n|ΔΦ/Δt|，E 是电动势（若电路闭合则产生感应电流）。导体切割：E=BLvsinθ（B v 的夹角）。注意区分：ΔΦ/Δt 是磁通量变化率，E 与磁通量大小无关，只与变化率有关"
  },

  {
    id: "PHY-R72", title: "楞次定律", modelId: "PHY-M20",
    category: "电磁感应", difficulty: 2,
    oneLine: "感应电流的磁场总是阻碍原磁场的变化",
    coreSteps: [
      "Step1：判断原磁场方向（B原）",
      "Step2：判断原磁场如何变化（增减少", "Step3：感应磁BB方向关系", "  - B增加 BB相反（阻碍增加）", "  - B减少 BB相同（阻碍减少）",
      "Step4：由 B方向用右手螺旋定则判断感应电流方"
    ],
    applicableTypes: ["判断感应电流方向", "电磁阻尼", "电磁驱动"],
    commonMistakes: [
      "把阻碍当成阻止（B只能阻碍变化，不能阻止）", "混淆阻碍对象（B阻碍的是原磁场变化，不是原磁场本身）",
      "右手螺旋定则方向用错"
    ],
    memoryTip: "楞次定律：增反减同，阻碍变化；来拒去留，增缩减伸",
    content: "楞次定律是判断感应电流方向的普适规律。理解：感应电流的效果总是要反抗产生感应电流的原因。常见表述：增反减同、来拒去留（导体棒被推动/被阻碍）、增缩减伸（线圈收缩/扩张）、增离减靠"
  },

  {
    id: "PHY-R73", title: "自感与互, modelId: "PHY-M20"",
    category: "电磁感应", difficulty: 2,
    oneLine: "自感 E=L|ΔI/Δt|，线圈电流变化时产生自感电动",
    coreSteps: [
      "Step1：自感电动势 E=L|ΔI/Δt|（L 为自感系数）", "Step2：通电瞬间线圈相当于断路（自感阻碍电流增加", "Step3：断电瞬间线圈产生自感电动势维持电流（方向与原电流相同）", "Step4：互感：线圈 A 电流变化 在线B 中产生感应电动势"
    ],
    applicableTypes: ["自感电路", "日光灯原, "互感],
    commonMistakes: [
      "把自感当成电阻（自感阻碍的是电流变化，不是电流本身）", "断电时自感电动势方向判断错误",
      "忽略自感对电路的影响"
    ],
    memoryTip: "通电自感阻碍增，断电自感阻碍",
    content: "自感现象：线圈自身电流变化时产生感应电动势阻碍电流变化。自感系L 由线圈本身性质决定（匝数、长度、截面积、铁芯等）。通电时自感电动势与电源电动势方向相反；断电时自感电动势与原电流方向相同"
  },

  {
    id: "PHY-R74", title: "交流电的产生与描, modelId: "PHY-M21"",
    category: "交变电流", difficulty: 1,
    oneLine: "e=E_m sinωt，E_m=nBSω，正弦交流电",
    coreSteps: [
      "Step1：明确是中性面出发还是垂直中性面出发", "Step2：从中性面出发：e=E_m sinωt；从中性面 90° 处出发：e=E_m cosωt",
      "Step3：E_m=nBSω（最大值）", "Step4：有效值：E=E_m/，U=U_m/，I=I_m/",
      "Step5：周T=1/f，2πf"
    ],
    applicableTypes: ["交流发电, "交流电描],
    commonMistakes: [
      "混淆最大值和有效", "把公E_m=nBSω 中的 ω 当成 1/T",
      "中性面和垂直中性面混淆"
    ],
    memoryTip: "交流电最大E_m=nBSω，有效值除以根号二",
    content: "交流电的产生：矩形线圈在匀强磁场中匀速转动，产生的电动势 e=E_m sinωt。有效值：E=E_m/（在相同热效应下与直流电等效）。频f=1/T=ω/(2π)"
  },

  {
    id: "PHY-R75", title: "理想变压, modelId: "PHY-M21"",
    category: "交变电流", difficulty: 1,
    oneLine: "UUnn₂；PP₂（输入功率=输出功率",
    coreSteps: [
      "Step1：明确原副线圈匝n₁、n",
      "Step2：电压关系：UUnn", "Step3：电流关系：IInn₁（只适用于只有一个副线圈", "Step4：功率关系：PP₂（输入功率由输出功率决定）", "Step5：多个副线圈：UUnn₂，PPP..."
    ],
    applicableTypes: ["变压器计, "远距离输],
    commonMistakes: [
      "认为输入功率由原线圈电压决定（实际上由副线圈负载决定",
      "多副线圈时乱IInn",
      "U当成电源电压（U是原线圈两端电压，不是电源电动势"
    ],
    memoryTip: "理想变压器：电压比等于匝数比，功率相等电流反",
    content: "理想变压器：输入功率由输出功率决定（PP₂）。匝数比决定电压比：nnUUII₁（单副线圈）。远距离输电：PU输I，PI²R 提高 U输可减小 I，从而减P损"
  },

  // ══════════════════════════════════════
  // R76-R90：光学、近代物理、综
  // ══════════════════════════════════════

  {
    id: "PHY-R76", title: "光的折射与全反射", modelId: "PHY-M22",
    category: "光学", difficulty: 1,
    oneLine: "n₁sinθn₂sinθ₂，sinC=1/n",
    coreSteps: [
      "Step1：由光密→光疏（nn₂）时，光线才可能发生全反射", "Step2：折射：n₁sinθn₂sinθ", "Step3：全反射临界sinC=1/n（从光密到光疏）", "Step4：若 θC 则发生全反射"
    ],
    applicableTypes: ["折射率计", "全反射棱, "光纤通信"]",
    commonMistakes: [
      "在所有界面都考虑全反射（只有光密→光疏才可能",
      "sinC=1/n 中的 n 当成相对折射",
      "混淆临界角和布鲁斯特"
    ],
    memoryTip: "光密→光疏才全反，sinC=1/n",
    content: "折射定律：n₁sinθn₂sinθ₂。全反射条件：光从光密介质射向光疏介质且入射角大于临界角 C（sinC=1/n）。应用：全反射棱镜、光纤通信、蜃景"
  },

  {
    id: "PHY-R77", title: "光的干涉与衍, modelId: "PHY-M22"",
    category: "光学", difficulty: 2,
    oneLine: "双缝干涉：Δx=λL/d；单缝衍射：中央亮纹最",
    coreSteps: [
      "双缝干涉", "  - 条件：两相干光源（频率相同、相位差恒定", "  - 明纹：Δx=kλL/d；暗纹：Δx=(2k+1)λL/(2d)",
      "  - 波长越长（红光）→相邻条纹间距越", "单缝衍射", "  - 中央亮纹最亮最宽，两侧对称分布", "  - 缝越窄，中央亮纹越宽"
    ],
    applicableTypes: ["双缝干涉实验", "单缝衍射", "薄膜干涉"],
    commonMistakes: [
      "混淆干涉和衍射（干涉是两束光叠加，衍射是单缝/单孔的绕射）", "双缝干涉公式 Δx=λL/d 中的 d 是双缝间距，不是缝宽",
      "红光和紫光在干涉图样中谁更宽"
    ],
    memoryTip: "干涉条纹等间距，衍射中央最亮宽",
    content: "干涉（双缝）：相邻明纹间Δx=λL/d，L 是屏到双缝距离，d 是双缝间距。衍射（单缝）：中央明纹最宽，是其他明纹宽度的 2 倍。干涉和衍射本质都是波的叠加，都能产生明暗相间条纹"
  },

  {
    id: "PHY-R78", title: "光电效应", modelId: "PHY-M23",
    category: "近代物理", difficulty: 1,
    oneLine: "Ek=hv-W₀，遏止电U_c=Ek/e，入射光频率决定能否发生",
    coreSteps: [
      "Step1：判断入射光频率 ν 是否大于截止频率 ν₀（ν₀=W₀/h", "Step2：光电方Ek=hv-W₀",
      "Step3：遏止电压：eU_c=Ek U_c=(hv-W₀)/e", "Step4：光强决定光电流大小，不决定能否发生光电效应"
    ],
    applicableTypes: ["光电效应实验", "光子能量计算"],
    commonMistakes: [
      "认为光强越大光电子最大初动能越大（错！光强只影响数量", "混淆截止频率和遏止电", "忘记 Ek=hv-W₀ 中的 h 是普朗克常数"
    ],
    memoryTip: "光电效应 Ek=hv-W₀，频率决定成不成，光强决定跑多少",
    content: "光电效应三要点：①每种金属都有截止频ν₀=W₀/h，ν₀ 则不发生光电效应；②最大初动能 Ek=hv-W₀，与光强无关；③饱和光电流与光强成正比。爱因斯坦光子说：光是一份一份的光子，E=hv"
  },

  {
    id: "PHY-R79", title: "原子结构模型", modelId: "PHY-M23",
    category: "近代物理", difficulty: 1,
    oneLine: "原子核式结构，卢瑟福实验否定汤姆逊枣糕模",
    coreSteps: [
      "Step1：原子结构历史：枣糕模型（汤姆逊）→核式结构（卢瑟福）→玻尔模", "Step2：卢瑟福 α 粒子散射实验：大角度偏转证明原子内部有空、核很小且集中正电荷",
      "Step3：玻尔模型：轨道量子化：r_n=n²r₁，E_n=En²",
      "Step4：电子从高能级→低能级：辐射光子 E=hv=EE"
    ],
    applicableTypes: ["原子模型演变", "能级跃迁"],
    commonMistakes: [
      "混淆各模型的提出", "把轨道半径当成连续变化（玻尔模型是量子化的）",
      "跃迁时能量变化方向判断错"
    ],
    memoryTip: "汤姆逊枣糕，卢瑟福核式，玻尔量子化轨",
    content: "原子模型发展：汤姆逊（发现电子→枣糕模型）→卢瑟福（散射→核式结构）→玻尔（引入量子化轨道）。玻尔模型：电子在特定轨道上运动，不辐射能量；轨道半r_n=n²r₁，能量 E_n=En²（n 越大能量越高）"
  },

  {
    id: "PHY-R80", title: "原子核反, modelId: "PHY-M23"",
    category: "近代物理", difficulty: 1,
    oneLine: "核反应前后质量数和电荷数守恒",
    coreSteps: [
      "Step1：写核反应方程，注意质量A 和电荷数 Z 守恒", "Step2：衰变类型：α 衰变（⁴He），β衰变（⁰e），β衰变（⁰e", "Step3：衰变规律：α 衰变：新核质量数4，电荷数2；β⁻ 衰变：新核质量数不变，电荷数1",
      "Step4：衰变产生的 α、粒子动能很大，穿透能力不"
    ],
    applicableTypes: ["核反应方", "原子序数推断"],
    commonMistakes: [
      "α 衰变写成 ⁴₂He（正确是 ⁴₂He", "β衰变时核电荷数加 1（而不是减 1", "不记得衰变方程的守恒规律"
    ],
    memoryTip: "核反应前A Z 守恒，衰变4 2，β⁻ 衰变 A 不变 Z 1",
    content: "核反应方程遵循：质量数（A）守恒和电荷数（Z）守恒。衰变：⁴₂He；β⁻ 衰变：⁰₋₁e（原子核内中子变质子）；γ 射线是光子，不改变核组成"
  },

  {
    id: "PHY-R81", title: "半衰, modelId: "PHY-M23"",
    category: "近代物理", difficulty: 1,
    oneLine: "N=N₀(1/2)^(t/T)，半衰期 T 由核本身决定，与外界无关",
    coreSteps: [
      "Step1：明确半衰期 T（放射性原子核数减半所需时间", "Step2：衰变规律：N=N₀(1/2)^(t/T)",
      "Step3：也可以用质量：m=m₀(1/2)^(t/T)",
      "Step4：T 与物理状态、化学状态、温度、压力均无关（只由原子核本身决定"
    ],
    applicableTypes: ["半衰期计, "放射性年代测],
    commonMistakes: [
      "认为半衰期与原子核数量有关（无关",
      "认为半衰期与物理/化学状态有关（无关",
      "3T 时的剩余量算1/8（正确是 1/8"
    ],
    memoryTip: "半衰T 与内外条件无关，剩余N=N₀(1/2)^(t/T)",
    content: "半衰T：放射性原子核数从 N₀ 衰变N₀/2 所需时间。规N=N₀(1/2)^(t/T)。注意：半衰期是统计规律，适用于大量原子核；少数原子核的衰变时间不可预测"
  },

  {
    id: "PHY-R82", title: "质能方程", modelId: "PHY-M23",
    category: "近代物理", difficulty: 1,
    oneLine: "E=mc²，质量亏Δm 对应能量变化 ΔE=Δmc²",
    coreSteps: [
      "Step1：计算反应前后的质量亏损 Δm=mm", "Step2：能量变ΔE=Δmc²",
      "Step3：若 ΔE>0，表示释放能量（放能反应", "Step4：若 ΔE<0，表示吸收能量（吸能反应", "Step5：结合核反应方程计算"
    ],
    applicableTypes: ["核聚", "核裂, "结合],
    commonMistakes: [
      "Δm 当成质量减少（正Δm=mm0 表示质量减少", "混淆质量亏损和结合能",
      "c² 算漏（c² 很大，数值易出错"
    ],
    memoryTip: "质能方程 E=mc²，质量亏Δm c² 得能",
    content: "爱因斯坦质能方程 E=mc²。核反应中的质量亏损：Δm=mm0，释放能ΔE=Δmc² 原子质量单位u）对应的能量约为 931.5 MeV"
  },

  // ══════════════════════════════════════
  // R83-R90：综合与应用
  // ══════════════════════════════════════

  {
    id: "PHY-R83", title: "实验：验证牛顿第二定, modelId: "PHY-M05"",
    category: "实验", difficulty: 2,
    oneLine: "控制变量法：保持 m 不变验证 a∝F；保F 不变验证 a/m",
    coreSteps: [
      "Step1：原理：m F 均可测，加速度 a 由运动学公式", "Step2：验a∝F（保m 不变）：测多(a, F)，画 a-F 图像，应为过原点直线",
      "Step3：验a/m（保F 不变）：测多(a, m)，画 a-m 图像，应为双曲线", "Step4：注意：小车质量远大于砝码质量时，可近似认为 F=mg"
    ],
    applicableTypes: ["验证牛顿第二定律", "控制变量实验"],
    commonMistakes: [
      "不满M≫m 时误F=mg（系统误差来源）", "不画图像直接看数据（图像更直观）",
      "平衡摩擦力操作不"
    ],
    memoryTip: "验证牛二律用控制变量，a-F 图过原点，a-1/m 图过原点",
    content: "验证牛顿第二定律实验：①平衡摩擦力；②控制变量——保m 不变，验a∝F；保F 不变，验a/m。系统误差主要来源：砝码重力不等于绳子拉力（小车质量不够大时）"
  },

  {
    id: "PHY-R84", title: "实验：验证机械能守恒", modelId: "PHY-M14",
    category: "实验", difficulty: 2,
    oneLine: "验证 ½mv²=mgh ΔE_k=-ΔE_p",
    coreSteps: [
      "Step1：让物体从某点自由下落，用打点计时器打纸", "Step2：用纸带求下落高h（初位置到某点）",
      "Step3：用纸带求该点速度 v（Δx=aT² v=gt/2", "Step4：比½mv² mgh 是否相等（允许误差）",
      "Step5：或用图像法：画 ΔE_k-ΔE_p 图像，斜率接-1"
    ],
    applicableTypes: ["机械能守恒实]",
    commonMistakes: [
      "把某点速度算错（建议用平均速度法：v=Δx/Δt", "忘记初始打点是否准确",
      "误差分析：空气阻力、摩擦力"
    ],
    memoryTip: "机械能守恒实验，速度求准是核",
    content: "验证机械能守恒：比较重力势能减少ΔE_p=mgh 和动能增加量 ΔE_k=½mv²。实验误差来源：空气阻力、纸带与打点计时器摩擦、测量误差（高度、距离）"
  },

  {
    id: "PHY-R85", title: "实验：验证动量守, modelId: "PHY-M15"",
    category: "实验", difficulty: 2,
    oneLine: "两球碰撞前后动量守恒：m₁vm₂vm₁v+m₂v",
    coreSteps: [
      "Step1：用平抛射程法：两等质量小球碰撞后做平抛运动", "Step2：测水平射程：xxv=v（完全弹性碰撞）",
      "Step3：若碰撞后共速：m₁v(mmv'", "Step4：验m₁vm₂v₂（碰前m₁v+m₂v（碰后）",
      "Step5：用刻度尺测量各射程"
    ],
    applicableTypes: ["碰撞实验", "动量守恒验证"],
    commonMistakes: [
      "把射程当速度（射程与速度成正比，可以直接用射程比代替速度比）", "碰撞前后测量不匹", "忽略实验条件：水平抛出、碰撞在同一高度"
    ],
    memoryTip: "动量守恒验证，射程代替速度要记",
    content: "验证动量守恒（气垫导轨或斜槽实验）：测碰撞前后速度，验m₁vm₂v是否相等。技巧：用射程代替速度——因为平抛初速度 v=xg/(2h))，h 相同v∝x"
  },

  {
    id: "PHY-R86", title: "实验：测电源电动势和内阻", modelId: "PHY-M18",
    category: "实验", difficulty: 2,
    oneLine: "U=E-Ir，测两组 (U, I) 解方程组E r",
    coreSteps: [
      "Step1：连接电路（电源、电流表、电压表、电阻箱/滑动变阻器）", "Step2：改变电阻，测多U I",
      "Step3：画 U-I 图像（直线，纵截E，斜|r|", "Step4：或测两组数据解方程组：",
      "  UE-I₁r，UE-I₂r 解得 E r"
    ],
    applicableTypes: ["测电动势和内, "伏安],
    commonMistakes: [
      "电流表内外接选择不当（导致系统误差）",
      "内接时电压表示数偏大（U=E+Ir 偏小",
      "用图像法时纵轴截距不E（应该是 E，不包括内阻压降"
    ],
    memoryTip: "U=E-Ir，图像纵E，横截绝对值是 r",
    content: "测电源电动势和内阻：伏安法（电流表内外接）或安阻伏阻法。电流表内接：E_E_真，r_r_真；电流表外接：E_测≈E_真，r_r_真。用图像法更精确"
  },

  {
    id: "PHY-R87", title: "实验：测金属丝电阻率", modelId: "PHY-M18",
    category: "实验", difficulty: 2,
    oneLine: "R=ρL/S，用伏安法测 R，刻度尺L，螺旋测微器d",
    coreSteps: [
      "Step1：用刻度尺测量金属丝长度 L（多次测量取平均值）", "Step2：用螺旋测微器测量金属丝直径 d（不同位置测 3 次）",
      "Step3：计算横截面S=π(d/2)²",
      "Step4：用伏安法测电阻 R（电流表外接减小误差",
      "Step5：由 ρ=RS/L 计算电阻"
    ],
    applicableTypes: ["电阻率测, "金属丝特性实],
    commonMistakes: [
      "d 当成 r 代入公式（S=π(d/2)² 而非 πd²", "螺旋测微器读数错", "电压电流表量程选择不当"
    ],
    memoryTip: "电阻ρ=RS/L，直d 要平方再π",
    content: "测金属丝电阻率原理：R=ρL/S。实验注意：①金属丝长度测量要取有效长度（夹子间距离）；②直径测量要用螺旋测微器（精0.01mm）；③电流不能太大（防止温度升高导致 ρ 变化）；④采用电流表外接（被测电阻小）"
  },

  {
    id: "PHY-R88", title: "传送带综合分析", modelId: "PHY-M08",
    category: "动力学综, difficulty: 3",
    oneLine: "全程分段：速度相等前后摩擦力方向不同，共速后可能一起匀",
    coreSteps: [
      "Step1：初始条件：物体初速度 v₀，传送带速度 v", "Step2：比v₀ v 的大小关", "Step3：找速度相等时刻 t_c=va", "Step4：t<t_c t>t_c 分段分析加速度", "Step5：求总位s=ss₂，与传送带长度 L 比较"
    ],
    applicableTypes: ["水平传送带", "倾斜传送带"],
    commonMistakes: [
      "忽略速度相等后摩擦力突变", "忘记共速后物体可能随传送带一起运", "倾斜传送带忽略重力分量"
    ],
    memoryTip: "传送带全程分段算，临界就在速度相等",
    content: "传送带综合题常见设问：①物块在传送带上运动的总时间；②物块相对传送带的位移；③传送带克服摩擦力做的功物块动能变化+摩擦生热）。能量角度：传送带对物块做的功+摩擦生热=传送带对物块输入的能量"
  },

  {
    id: "PHY-R89", title: "板块守恒综合", modelId: "PHY-M09",
    category: "动力学综, difficulty: 3",
    oneLine: "分离/共速判临界加速度分析 全程能量动量守恒",
    coreSteps: [
      "Step1：判断系统是否满足动量守恒（水平方向无外力）", "Step2：判断机械能是否守恒（碰撞是否弹性）",
      "Step3：找临界条件：共速后是否分离（比较临界加速度", "Step4：列方程：动量守能量关系",
      "Step5：验证碰共速后速度合理"
    ],
    applicableTypes: ["板块碰撞", "弹簧板块组合"],
    commonMistakes: [
      "混淆板块分离条件和共速条", "碰撞后机械能守恒条件判断错误",
      "不分析相对位移导致摩擦生热算"
    ],
    memoryTip: "板块问题先判类，动量守恒看系统，能量守恒看碰",
    content: "板块问题综合了动力学、动量和能量三大板块。解题策略：①判断运动阶段；②列动力学方程求加速度；③用动量守恒找速度关系；④用能量关系（机械能损失→内能）求热量 Q=f·s相对"
  },

  {
    id: "PHY-R90", title: "能量-动量综合", modelId: "PHY-M16",
    category: "力学综合", difficulty: 3,
    oneLine: "全程能量分析配合动量守恒，多过程分段逐一击破",
    coreSteps: [
      "Step1：全过程找不变的系统量（总能量、总动量）", "Step2：分段分析，每个阶段用最合适的规律",
      "Step3：常见组合：", "  - 弹簧压缩+碰撞：机械能守恒（弹簧）+动量守恒（碰撞）",
      "  - 斜面+圆周+机械能：各段机械能守", "  - 碰撞+能量损失：动量守恒（碰撞瞬间能量分析（全过程", "Step4：注意内能转化：摩擦生热 Q=f·s相对"
    ],
    applicableTypes: ["力学压轴", "弹簧振子与碰, "综合应用"]",
    commonMistakes: [
      "全过程都用机械能守恒（错！有摩擦/碰撞就不守恒", "不找临界条件导致方程不够",
      "漏掉内能转化导致能量对不"
    ],
    memoryTip: "综合题分段算，临界条件要找准，能量动量配合用",
    content: "力学综合压轴题三大核心：动力学（加速度、位移、时间）动量（碰撞、冲量、系统守恒）能量（机械能、内能、做功）。解题策略：找全程不变量（总能总动量）逐段分析 找临界条联立求解"
  },

];

export default allRoutines;

