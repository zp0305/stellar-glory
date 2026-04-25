import { AppLayout } from '@/components/layout/Navigation'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Sigma } from 'lucide-react'

export function MathGuidePage() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-16">
        <div className="text-center">
          <Badge variant="outline" className="mb-3 text-sm px-3 py-1">数学 · 学科指南</Badge>
          <h1 className="text-2xl font-bold mb-2">为什么必须学数学</h1>
          <p className="text-muted-foreground text-sm">高中数学学习的完整指南 · 建议从上到下阅读</p>
        </div>

        {/* 为什么学 */}
        <section id="why" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center"><Sigma className="w-4 h-4 text-violet-500" /></div>
            <h2 className="text-lg font-bold">为什么必须学数学</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: '1.1 从"算数"到"结构"：追问"什么关系在保持不变"', color: '#7c3aed', content: '37 × 43 不是算出来的，而是看出来的：(40-3)(40+3) = 40² - 3² = 1591。高中数学训练你：看到代数式，先问"它有什么结构"，而不是"它等于几"。y = x² + 2x + 1 → 一眼认出 (x+1)²，顶点、对称轴、最小值瞬间浮现。从算术思维到代数思维，是从"计算者"到"结构发现者"的跃迁。' },
              { title: '1.2 从"画图"到"证明"：几何直觉需要代数严格来护航', color: '#a855f7', content: '初中证明三角形内角和=180°，撕角拼图。但球面上的三角形内角和>180°——撕角拼图失效了。高中数学让你区分"看起来对"和"确实对"。向量的点积为什么定义为 a·b = |a||b|cosθ？不是因为"看起来合理"，而是只有这样才能满足交换律、分配律，并与几何直观一致。' },
              { title: '1.3 从"确定"到"随机"：数学如何驯服不确定性', color: '#06b6d4', content: '抛硬币概率50%——你凭什么相信？抛10次可能8次正面。高中数学让你用有限观察推断无限可能：用样本均值估计总体均值，用置信区间量化可信程度。更深刻的是：随机性不是"不知道"，而是一种"知道它不知道"的精确状态——量子力学、信息论、金融工程都建立在此之上。' },
              { title: '1.4 数学的社会价值：你明天就会用到的底层判断', color: '#f59e0b', content: '媒体说"平均工资9800"，你6000——被平均了？这是均值和中位数的区别。核酸检测准确率99%，测出阳性就真有99%概率患病？错了，贝叶斯公式告诉你还要看基础患病率。房贷选择"等额本息"还是"等额本金"？30年利息可能差几十万。数学让你在面对数据时不被人牵着走。' },
            ].map((s) => (
              <div key={s.title} className="p-4 rounded-xl border bg-muted/20">
                <h3 className="font-semibold text-sm mb-2" style={{ color: s.color }}>{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 四种探索模式 */}
        <section id="worlds" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-purple-500" /></div>
            <h2 className="text-lg font-bold">数学让你体验的四种探索模式</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: '关系探索', color: '#7c3aed', bg: 'bg-violet-50', border: 'border-violet-200', desc: '函数与导数·必修', content: '同一个 y=x²，你真正理解的不是"算对了"，而是"它先慢后快，永远非负，关于x=0对称"。看到结构比算出答案重要一万倍。导数则是"看变化的变化"——加速度是速度的导数，曲率是切线的导数。导数不是计算技巧，而是人类理解"变化"这件事的通用语法。' },
              { label: '几何坐标化', color: '#a855f7', bg: 'bg-purple-50', border: 'border-purple-200', desc: '立体几何·选必', content: '笛卡尔把几何图形变成代数方程，你从此用"解方程"代替"画图"。证明线面垂直不再靠"看起来垂直"，而是计算方向向量与法向量是否平行。解析几何把椭圆、双曲线、抛物线都用含 x、y 的方程描述——这是CAD、三维游戏、VR的全部数学基础。' },
              { label: '不确定性建模', color: '#06b6d4', bg: 'bg-cyan-50', border: 'border-cyan-200', desc: '概率与统计·必修+选必', content: '掷骰子每个点数概率1/6（离散均匀分布），测量误差集中在0附近（正态分布）。高中数学让你用随机变量描述不确定事件，用概率分布描述规律。更深刻的是统计推断：民意调查的置信区间、A/B测试的统计显著性——理解随机世界，你就不会被"巧合"迷惑。' },
              { label: '极限逼近', color: '#f59e0b', bg: 'bg-yellow-50', border: 'border-yellow-200', desc: '数列与导数·选必', content: '0.999... = 1——不是"约等于"，而是"极限相等"。导数的定义是极限，积分的定义是极限，无穷级数的求和也是极限。高中数学训练你建立"无限过程"的直觉：用放大镜看曲线，放得越大，一段曲线看起来越像直线——导数就是这段"像直线"的斜率。' },
            ].map((w) => (
              <div key={w.label} className={`p-4 rounded-xl ${w.bg} border ${w.border}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm" style={{ color: w.color }}>{w.label}</span>
                  <Badge variant="outline" className="text-xs">{w.desc}</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 四个习惯 */}
        <section id="habits" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-violet-500" /></div>
            <h2 className="text-lg font-bold">掌握这四种探索模式的四个习惯</h2>
          </div>
          <div className="space-y-2">
            {[
              { num: '01', title: '结构思想：先看"什么在变、怎么变"', desc: '比较 log₂3、log₃5、log₅8——不是算，而是看结构：都是 logₙ(n+1) 形式，而 f(x) = logₓ(x+1) 递减。结构一旦看清，结论自动浮现。这是一种元能力：先问"它有什么结构"，再问"结构能怎么用"。' },
              { num: '02', title: '数形结合：两个视角同时打开', desc: '求 |x-1| + |x-2| + |x-3| 的最小值——画数轴，变成"哪个点到三个定点距离之和最小"，答案x=2。几何直觉给你方向，代数运算给你确定证明。更高层次：看到 √(x²+1) + √((x-3)²+4)，主动问"它有几何解释吗？"——反射法秒解。' },
              { num: '03', title: '化归与统一：把未知转化为已知', desc: '遇到没见过的题，第一反应不是"我没学过"，而是"它能转化成我会的东西吗？"复数除法→分子分母同乘共轭；sinx+cosx→辅助角公式化为 Asin(x+φ)；√(x²+2x+5)→令t=x+1消掉交叉项。换元的唯一原则：换元后结构更简单。' },
              { num: '04', title: '极限与逼近：用"无限"处理"有限"', desc: '导数 = Δx→0时Δy/Δx的极限；定积分 = 区间分割无限细时的极限。你不需要ε-δ语言，但你需要"无限过程"的直觉：0.999...=1不是"约等于"，而是"极限相等"。这种直觉是理解微积分、瞬时速度、边际效应的底层基础。' },
            ].map((h) => (
              <div key={h.num} className="flex items-start gap-3 p-3 rounded-xl border bg-muted/20">
                <div className="w-7 h-7 rounded-lg bg-violet-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">{h.num}</div>
                <div>
                  <div className="font-semibold text-sm mb-1">{h.title}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 四次升级 */}
        <section id="upgrades" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-yellow-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-yellow-500" /></div>
            <h2 className="text-lg font-bold">掌握每种探索模式必须完成的四次直觉升级</h2>
          </div>
          <div className="space-y-2">
            {[
              { from: '"x是个数"', to: '"x可以变化"', color: '#7c3aed', desc: '初中解方程 2x+3=7，算出 x=2 就完了。高中数学要求你完成一次断裂：x不是数，而是可变量；方程不是"求一个数"，而是"描述量之间的关系"。y=2x+3 不是"x=2时y=7"，而是"x每增1，y增2"。这就是函数思维的生根。' },
              { from: '"看起来垂直"', to: '"向量算出来垂直"', color: '#a855f7', desc: '初中证明线线垂直靠"画辅助线+直觉"，高中用向量坐标计算：方向向量点积为零。证明平行也不靠"看起来平行"，而是方向向量共线。完成了这次升级，你就获得了"把空间问题交给计算机"的能力。' },
              { from: '"只是运气"', to: '"概率可以算"', color: '#06b6d4', desc: '你买彩票觉得"中不中全靠命"。数学告诉你：运气是可以描述的——用概率分布描述随机变量的规律，用期望和方差描述"中心"和"离散"。完成了这次升级，你就不会被"巧合"迷惑，也不会把"相关性"当"因果性"。' },
              { from: '"差一点点"', to: '"极限相等"', color: '#f59e0b', desc: '0.999...和1，直觉说"差一点点"，极限思维说"它们完全相等"。就像电影每秒24帧，每帧都是静止的，但连起来就是运动——微分把曲线切成无数小段，每段近似直线，求和就是精确的面积。这种"知道何时接近就等同于到达"的判断力，是理解现代科学的基本素养。' },
            ].map((u, i) => (
              <div key={i} className="flex items-center gap-2 p-3 rounded-xl border bg-muted/10">
                <span className="text-xs text-muted-foreground font-medium w-36 flex-shrink-0 text-right">{u.from}</span>
                <div className="flex-1 flex items-center gap-1">
                  <div className="h-px flex-1 bg-gradient-to-r from-muted-foreground/30 to-muted-foreground/0" />
                  <span className="text-muted-foreground text-xs">→</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-muted-foreground/30 to-muted-foreground/0" />
                </div>
                <div className="flex-shrink-0" style={{ color: u.color }}>
                  <div className="text-xs font-semibold">{u.to}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed max-w-xs">{u.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 数学与你 */}
        <section id="society" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-violet-500" /></div>
            <h2 className="text-lg font-bold">数学与你——在技术社会中的定位</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: '你是数据的使用者，还是理解者？', content: '看到"AI大模型参数突破万亿"，不只感叹"好厉害"，而是理解参数数量是模型复杂度的度量但不直接决定性能。看到"房价同比上涨5%"，会问"同比基期是什么时候？有没有季节调整？"数学给你的是量化思维能力和对数据的批判性思考。' },
              { title: '数学是现代文明的底层操作系统', content: 'GPS导航依赖广义相对论的时间修正和球面几何。短视频推荐算法建立在矩阵分解和概率图模型之上。指纹识别核心是傅里叶变换和深度学习。数学不是课本里的习题，它是互联网、人工智能、量子计算、基因测序的底层语法。' },
              { title: '从"解方程"到"建立模型"——一场关于秩序的思维进化', content: '高斯称数学为"科学的皇后"。爱因斯坦用黎曼几何描述时空弯曲，后被实验证实——数学先于物理，这是人类思想史上最深刻的奇迹。图灵用"图灵机"预言了通用计算机。你今天证明的每一个定理，都在延续人类花了三千年才获得的精确思维的语法。' },
              { title: '最终的馈赠：一种精确思维', content: '看到"平均"二字，问"均值还是中位数？"看到"研究表明"，问"样本量多大？p值多少？"面对复杂问题，先问"它有什么结构？能用已知方法转化吗？"在信息过载、假新闻泛滥的时代，这种用逻辑检验断言、用数据验证观点的能力，是数学留给你的终身资产。' },
            ].map((s) => (
              <div key={s.title} className="p-4 rounded-xl border bg-muted/20">
                <div className="font-semibold text-sm mb-2">{s.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  )
}
