import { AppLayout } from '@/components/layout/Navigation'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Star } from 'lucide-react'

export function PhysicsGuideContent() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-16">
        <div className="text-center">
          <Badge variant="outline" className="mb-3 text-sm px-3 py-1">物理 · 学科指南</Badge>
          <h1 className="text-2xl font-bold mb-2">为什么必须学物理</h1>
          <p className="text-muted-foreground text-sm">高中物理学习的完整指南 · 建议从上到下阅读</p>
        </div>

        {/* 为什么学 */}
        <section id="why" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center"><Star className="w-4 h-4 text-blue-500" /></div>
            <h2 className="text-lg font-bold">为什么必须学物理</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: '1.1 从"大概其"到"算得清"：精确化你的认知', color: '#3b82f6', content: '物理把"急""猛""快""沉"这些模糊感觉翻译成可测量、可计算的物理量。不再说"物体掉得越来越快"，而是精确到"每秒速度增加 9.8 m/s"。不再说"这东西很重"，而是理解质量是惯性的唯一量度。精确性让你摆脱"我觉得"，建立"我测量"的思维。' },
              { title: '1.2 从"看热闹"到"看门道"：模型化你的视野', color: '#8b5cf6', content: '过山车尖叫和宇航员漂浮天差地别，但共享同一个底层模型：圆周运动需要向心力。物理教你剥去具体场景的外衣，看到底层结构的相似性。平抛运动和卫星绕地球遵从同一套逻辑；自由落体和行星公转都指向万有引力定律。' },
              { title: '1.3 从"这有道理"到"这有边界"：清醒你的判断', color: '#10b981', content: '牛顿力学不是万能的，只在特定范围内有效。速度接近光速时，时间变慢，长度收缩；微观粒子行为是概率的。物理最珍贵的是告诉你"在什么条件下，世界才是这样的"——任何可靠知识都自带使用说明书。这是面对信息爆炸时代最重要的免疫力。' },
              { title: '1.4 物理的社会价值：你明天就会用到的底层判断', color: '#f59e0b', content: '充电宝的账：20000mAh是在3.7V下算的，输出到5V有损耗，能量守恒告诉你转化率永远不可能100%。电梯信号：金属电梯是法拉第笼，电磁波进不去不是信号差。电动车环保账：物理+化学看全链条——发电方式+电池生产+报废处理。' },
            ].map((s) => (
              <div key={s.title} className="p-4 rounded-xl border bg-muted/20">
                <h3 className="font-semibold text-sm mb-2" style={{ color: s.color }}>{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 四个世界 */}
        <section id="worlds" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-purple-500" /></div>
            <h2 className="text-lg font-bold">物理学带你进入的四个世界</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: '日常世界', color: '#3b82f6', bg: 'bg-blue-50', border: 'border-blue-200', desc: '必修一、必修二', content: '质点、速度，加速度，牛顿三定律，平抛、圆周运动、万有引力、机械能守恒。你的日常直觉在这里升级成精确语言。核心信念：给定初始条件，未来可算。' },
              { label: '隐形世界', color: '#8b5cf6', bg: 'bg-purple-50', border: 'border-purple-200', desc: '选修3-1、3-2', content: '电场、磁场、WiFi信号穿过墙壁、磁铁隔空吸物。你要相信"看不见的东西"是真实的物理实在。电磁波可以在真空中传递能量，太阳能就是。从具体思维走向抽象思维的关键一跃。' },
              { label: '人群世界', color: '#10b981', bg: 'bg-green-50', border: 'border-green-200', desc: '选修3-3', content: '单个分子完全随机，但亿万个分子集合后铁律必然涌现。温度是分子平均动能的标志，压强是统计平均。熵增是系统自发走向概率更大的宏观状态——就像洗牌几乎一定会变乱。' },
              { label: '极限世界', color: '#f59e0b', bg: 'bg-yellow-50', border: 'border-yellow-200', desc: '必修二、选修3-5', content: '速度接近光速时时间变慢长度收缩。电子不是绕核转的行星，而是概率云。高中只要求定性理解，但会在你心里埋下"边界意识"的种子：任何物理理论都清楚自己的适用范围。' },
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
            <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-green-500" /></div>
            <h2 className="text-lg font-bold">探索这四个世界的四个习惯</h2>
          </div>
          <div className="space-y-2">
            {[
              { num: '01', title: '抓大放小：先看骨架，后看衣服', desc: '火车站找人，先看身高发型，不看袜子。物理里的理想化：研究地球公转把地球当质点，研究带电球体外部把它等效为点电荷。抓大放小的本质是判断自由度的优先级——先问什么决定问题走向，再问什么可以忽略。' },
              { num: '02', title: '找不变量：变化中抓稳锚点', desc: 'AA制无论怎么换菜，总钱数不变。力学中只有重力做功，机械能不变；系统不受外力，总动量不变。当过程复杂到看不清细节时，闭上眼睛直接问：什么是不变的？守恒律是物理的锚。' },
              { num: '03', title: '切片观察：把连续变化切成一帧一帧', desc: '电影是每秒24张静止画面，物理处理变化用同一招。瞬时速度取一个无限短的Δt当静止分析；变力做功切成无数小段每段近似恒力。学会这招，你就掌握了处理动态问题的通用语法。' },
              { num: '04', title: '换座位思考：区分"依赖于你"和"不依赖于你"', desc: '雨中坐在行驶的公交车上，你觉得雨滴斜着往后飞；路边的人看，雨滴竖直下落。谁对？都对。物理规律的形式不依赖于观察者，但具体描述会依赖于你的视角。学会抽离自己的立场，去看事情本身的结构。' },
            ].map((h) => (
              <div key={h.num} className="flex items-start gap-3 p-3 rounded-xl border bg-muted/20">
                <div className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">{h.num}</div>
                <div>
                  <div className="font-semibold text-sm mb-1">{h.title}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 四个升级 */}
        <section id="upgrades" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-yellow-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-yellow-500" /></div>
            <h2 className="text-lg font-bold">进入每个世界，必须完成的四次直觉升级</h2>
          </div>
          <div className="space-y-3">
            {[
              { from: '"力是燃料"', to: '"力是改变的指令"', color: '#3b82f6', desc: '蹬地是给滑板加油？错。力不是维持运动的原因，而是改变运动状态的原因。无限光滑的冰面上，蹬一下永远滑下去。建立了新直觉后，你会自动问："什么让它的速度变了？"而不是"什么让它继续走？"' },
              { from: '"不接触就没作用"', to: '"真空也是舞台"', color: '#8b5cf6', desc: '场不是假想线，是真实的物理实在。电磁波可以在真空中传播，把太阳的能量送到地球，近距作用对超距作用的胜利。完成这次升级，你就会用"场"的图像思考问题。' },
              { from: '"随机即混乱"', to: '"统计出铁律"', color: '#10b981', desc: '单个分子完全随机，亿万个分子集合后铁律涌现。熵增不是"宇宙变乱"，而是系统自发走向概率更大的宏观状态。就像洗牌几乎一定会变乱。' },
              { from: '"时空是背景"', to: '"规律有边界"', color: '#f59e0b', desc: '你老了十岁，双胞胎兄弟只老了一岁——这是狭义相对论的预言，已被实验反复证实。牛顿力学不是"错了"，而是知道自己在低速、宏观条件下有效。这种"自知之明"，是科学最珍贵的品质。' },
            ].map((u, i) => (
              <div key={i} className="p-4 rounded-xl border bg-muted/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 text-right">
                    <span className="text-xs text-muted-foreground font-medium bg-muted/30 px-2 py-1 rounded">{u.from}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-muted flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold px-2 py-1 rounded" style={{ color: u.color, backgroundColor: `${u.color}15` }}>{u.to}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-2 border-l-2" style={{ borderColor: u.color }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 物理与你 */}
        <section id="society" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-cyan-500" /></div>
            <h2 className="text-lg font-bold">物理与你——在技术社会中的定位</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: '你是技术的使用者，还是理解者？', content: '当你说"电动车更环保"时，物理+化学让你算清全生命周期账。5G辐射致癌？物理给你一把尺子：属于非电离辐射，光子能量不足以打断化学键。' },
              { title: '物理不是孤岛：现代文明的地下水系', content: '心跳是心肌细胞的电脉冲（生物电），看东西是光子打在视网膜上激发化学反应（光电效应），呼吸的氧气来自光合作用。物理是生物学、化学、医学，工程学的底层操作系统。' },
              { title: '加入一场三百年的理性对话', content: '伽利略用思想实验推翻了统治两千年的亚里士多德物理学。你在高中所做的，是在获取这场人类最精密理性对话的入场券。你学的每一个公式，都是这场对话的一个节点。' },
              { title: '最终的馈赠：一种认知纪律', content: '看到"永动机"新闻，第一反应是"违反热力学定律"；看到"辐射致癌"标题，会问"什么类型的辐射？剂量是多少？"这种清醒和严谨，是物理留给你的终身资产。' },
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
