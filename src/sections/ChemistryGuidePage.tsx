import { AppLayout } from '@/components/layout/Navigation'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Atom } from 'lucide-react'

export function ChemistryGuidePage() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-16">
        <div className="text-center">
          <Badge variant="outline" className="mb-3 text-sm px-3 py-1">化学 · 学科指南</Badge>
          <h1 className="text-2xl font-bold mb-2">为什么必须学化学</h1>
          <p className="text-muted-foreground text-sm">高中化学学习的完整指南 · 建议从上到下阅读</p>
        </div>

        {/* 为什么学化学 */}
        <section id="why" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center"><Atom className="w-4 h-4 text-green-500" /></div>
            <h2 className="text-lg font-bold">为什么必须学化学</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: '1.1 从"看热闹"到"问转化"：追问"什么变成了什么"', color: '#10b981', content: '初中你记"现象"，高中你要问"微粒怎么变"。钠扔进水里四处游窜，不是"活泼"这种模糊词，而是电子转移生成氢气推动钠块狂奔。化学家像侦探：颜色变化、气体生成、沉淀出现，都是案发现场的线索，真正的凶手是原子重新排列组合的方式。' },
              { title: '1.2 从"用物质"到"懂组成"：同样的原子，不同的命运', color: '#059669', content: '塑料袋（聚乙烯）和橡胶手套（聚异戊二烯）都是高分子，为什么一个硬脆、一个柔软？因为分子链之间的连接方式不同。钻石硬到划玻璃（sp³三维网状），石墨软到能做润滑剂（sp²层状结构）。结构决定性质——高中化学最核心的底层逻辑。' },
              { title: '1.3 从"非黑即白"到"动态平衡"：世界不是二元对立的', color: '#06b6d4', content: '醋酸溶液中，仅约1%的分子电离，其余99%都安稳待着——它们不是"反应完了"，而是达到了动态平衡。可逆反应、弱电解质电离、盐类水解、沉淀溶解平衡——它们都停在"最有利的位置"，而不是"终点"。这种思维方式会渗透到你理解生态、经济、社会系统的方式里。' },
              { title: '1.4 化学的社会价值：你明天就会用到的底层判断', color: '#f59e0b', content: '充电宝：20000mAh是在3.7V下算的，实际输出到5V有损耗。手机电池衰减：SEI膜逐渐消耗可逆容量，正极材料晶格塌陷。电动车"零排放"：物理算能量账，化学算原子账——锂矿开采、冶炼能耗、报废重金属污染，全生命周期分析。' },
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
            <h2 className="text-lg font-bold">化学带你进入的四个世界</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: '现象世界', color: '#7c3aed', bg: 'bg-purple-50', border: 'border-purple-200', desc: '必修一', content: '颜色、火焰、沉淀、气体——转化的信号灯。钠与水反应：浮、熔、游、响，红。每一种宏观现象都对应一条微观解释链。训练目标：把现象当作探针，反推微观变化。看到白色沉淀，要能联想到可能是AgCl、BaSO₄或CaCO₃，但它们的形成条件完全不同。' },
              { label: '组成与结构世界', color: '#059669', bg: 'bg-emerald-50', border: 'border-emerald-200', desc: '必修二、选择性必修2', content: '为什么NaCl熔点801℃，而干冰在-78.5℃就升华？离子晶体 vs 分子晶体。为什么水在常温下是液体，而H₂S是气体？因为水分子之间有氢键，像无数只无形的小手把水分子拉在一起。杂化轨道理论：sp³正四面体（甲烷）、sp²平面三角形（乙烯）、sp直线形（乙炔）。"怎么连"比"是什么"更重要。' },
              { label: '能量与限度世界', color: '#d97706', bg: 'bg-yellow-50', border: 'border-yellow-200', desc: '选择性必修1', content: '热力学管"能不能下坡"，动力学管"怎么下坡"。合成氨的工业方案是热力学与动力学的折中。四大动态平衡：化学平衡（K）、电离平衡（Ka/Kb）、水解平衡、沉淀溶解平衡（Ksp）。改变温度、浓度、压强，平衡会像有生命一样做出响应——这就是勒夏特列原理。' },
              { label: '建构世界', color: '#0891b2', bg: 'bg-cyan-50', border: 'border-cyan-200', desc: '选择性必修3（有机化学）', content: '从认识分子到设计分子。官能团转化：乙醇→乙醛→乙酸→乙酸乙酯。同分异构：C₄H₁₀可以是正丁烷（沸点-0.5℃）或异丁烷（沸点-11.7℃）。C₂H₆O可以是乙醇或甲醚，性质天壤之别。化学不再是"解释自然"，而是"设计物质"。' },
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
              { num: '01', title: '分类与归纳：先看"家族脸谱"，再推个体性质', desc: '看到钠（Na），立刻知道它第ⅠA族，最外层一个电子，极易失去，金属性极强。看到羟基（—OH），预判它能发生取代、消去、氧化反应。元素周期表和官能团就是化学的"家族脸谱"。找到共性，预测未知。' },
              { num: '02', title: '守恒与配平：原子不灭，电子转移', desc: '配平是化学的会计制度。氧化还原反应中，还原剂失去的电子数必须等于氧化剂得到的电子数——电子守恒。写离子方程式时，原子种类、数目、电荷总数必须相等。在电化学计算中，只要抓住"得失电子守恒"这根主线，就能从阳极溶解的铜的物质的量，算出阴极析出银的质量。' },
              { num: '03', title: '宏微结合：在现象、粒子、符号之间做"同声传译"', desc: '看到白色沉淀（宏观），要能想到Ag⁺与Cl⁻结合形成固体（微观），同时写出Ag⁺ + Cl⁻ = AgCl↓（符号）。看到铜片插入硝酸银溶液后表面长出"银树"（宏观），要能想到Cu原子失去电子变成Cu²⁺，Ag⁺得到电子变成Ag原子沉积（微观）。化学家的思维在这三个层级之间无缝切换。' },
              { num: '04', title: '动态视角：没有"终点"，只有"暂时的稳态"', desc: '醋酸钠溶液为什么显碱性？因为CH₃COO⁻会"抢"水分子的H⁺，生成弱电解质CH₃COOH，同时释放OH⁻。正逆反应速率最终相等，溶液稳定在弱碱性。这就是动态平衡的精髓：不是"反应停止了"，而是"进出的速度一样快"。把这种视角内化了，你看待任何复杂系统都会更清醒。' },
            ].map((h) => (
              <div key={h.num} className="flex items-start gap-3 p-3 rounded-xl border bg-muted/20">
                <div className="w-7 h-7 rounded-lg bg-green-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">{h.num}</div>
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
              { from: '"物质是实体"', to: '"结构决定性质"', color: '#7c3aed', desc: '金刚石和石墨都是碳（C），但性质天差地别。金刚石sp³三维网状共价键，硬度极高；石墨sp²层状结构，质软能导电。同分异构：C₄H₁₀可以是正丁烷或异丁烷，沸点不同。C₂H₆O可以是乙醇或甲醚——组成完全相同，结构不同，性质天壤之别。建立了这次升级后，看到任何物质，你都会本能地追问：它的微观结构是什么？原子怎么连、怎么排？' },
              { from: '"物质有性质"', to: '"微粒在反应"', color: '#059669', desc: '初中写方程式：BaCl₂ + Na₂SO₄ = BaSO₄↓ + 2NaCl。高中要改写成离子方程式：Ba²⁺ + SO₄²⁻ = BaSO₄↓。Na⁺和Cl⁻是旁观者离子，从头到尾没参与变化。氧化还原要画双线桥：Zn失去2e⁻变成Zn²⁺，Cu²⁺得到2e⁻变成Cu。看到宏观现象，脑子里会自动播放"微观粒子动画"。' },
              { from: '"反应进行到底"', to: '"动态平衡"', color: '#06b6d4', desc: '你把N₂和H₂放进密闭容器，希望全部变成NH₃。化学告诉你：不可能。因为氨气分子也在分解：2NH₃ ⇌ N₂ + 3H₂。当合成氨的速率等于分解氨的速率时，体系达到化学平衡——此时正逆反应仍在疯狂进行，只是"看起来停了"。弱电解质电离、盐类水解、沉淀溶解，都是这个逻辑。' },
              { from: '"解释变化"', to: '"设计变化"', color: '#d97706', desc: '无机化学教你解释世界：铁为什么会生锈？因为电化学腐蚀。有机化学要求你设计世界：怎么从乙烯得到乙酸乙酯？需要在脑子里画出路线图：乙烯→[水化]乙醇→[氧化]乙醛→[氧化]乙酸；乙醇+乙酸→[酯化]乙酸乙酯。每一步都要考虑条件：氧化到醛就停不要过头，酯化反应可逆如何提高产率？这不是背诵，而是分子级的设计思维。' },
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

        {/* 化学与你 */}
        <section id="you" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-teal-500" /></div>
            <h2 className="text-lg font-bold">化学与你——在技术社会中的定位</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: '你是物质的使用者，还是理解者？', content: '拿起一瓶洗发水，看到成分表上的"月桂醇聚醚硫酸酯钠""聚二甲基硅氧烷"，你是滑过去，还是能判断前者是阴离子表面活性剂负责去污、后者是硅油负责顺滑？看到"亚硝酸盐致癌"的标题，是恐慌转发，还是冷静分析：剂量才是毒性的决定因素？化学给你的是成分解析能力和剂量意识。' },
              { title: '化学是现代文明的炼金术', content: '一百多年前，哈伯把空气中的氮气变成氨，挣脱了土地肥力的枷锁，没有这项技术全球人口不可能突破四十亿。今天，化学在高纯硅制备（半导体芯片）、锂离子电池电极材料、靶向抗癌药物分子设计上继续创造奇迹。化学不是"污染学科"，而是"创造物质的学科"。' },
              { title: '从"解释火"到"设计分子"：一场关于转化的能力进化', content: '拉瓦锡用精密天平称量燃烧前后的质量，证明火不是神秘的"燃素"，而是物质与氧气的化合反应。门捷列夫在玩元素卡片时看见了周期律，不仅解释已知，还预言了镓、钪、锗。哈伯把空气中的氮气"固定"成氨。你不是在背诵反应，你是在学习人类花了三百年才获得的"造物语法"。' },
              { title: '最终的馈赠：一种物质思维', content: '看到一杯水，你会想：里面除了H₂O还有什么离子？烧开水后水垢是什么成分？看到"纯天然无添加"的标签，你会问：纯天然就意味着更安全吗？黄曲霉素和箭毒都是天然的。在一个人类即将进入"分子设计时代"的世界里，这种物质思维是你参与未来的基本盘。' },
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
