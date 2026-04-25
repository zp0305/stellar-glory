import { AppLayout } from '@/components/layout/Navigation'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Dna } from 'lucide-react'

export function BiologyGuidePage() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-16">
        <div className="text-center">
          <Badge variant="outline" className="mb-3 text-sm px-3 py-1">生物 · 学科指南</Badge>
          <h1 className="text-2xl font-bold mb-2">为什么必须学生物</h1>
          <p className="text-muted-foreground text-sm">高中生物学习的完整指南 · 建议从上到下阅读</p>
        </div>

        {/* 为什么学 */}
        <section id="why" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center"><Dna className="w-4 h-4 text-green-500" /></div>
            <h2 className="text-lg font-bold">为什么必须学生物</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: '1.1 从"记特征"到"问功能"：生物不是"谁有什么"的清单，而是"怎么活下来的"方案', color: '#10b981', content: '鳃不是"鱼的特色"，而是在水中高效提取溶解氧的气体交换系统；胎生不是"哺乳动物的标签"，而是为胚胎提供温度恒定、营养稳定、免疫受保护的精密稳态策略。饿了不是意志薄弱——血糖下降触发下丘脑摄食中枢，胃排空引发节律性收缩。生物学的本质，是给你一副解读生命信号的翻译器。' },
              { title: '1.2 从"看个体"到"看层级"：你同时活在多个尺度里', color: '#059669', content: '同一个基因突变（分子尺度）→ 蛋白质结构改变（细胞尺度）→ 个体患病（个体尺度）→ 经自然选择改变种群基因频率（群体尺度）。表现型 = 基因型 + 环境——双胞胎一个爱运动一个不爱动，南方人和北方人肤色差异，都是这个公式的体现。你从来不是孤立的"一个人"，你是多个生命尺度交汇的临时节点。' },
              { title: '1.3 从"目的论"到"演化论"：你的身体没有"设计师"，只有"修理工"', color: '#06b6d4', content: '长颈鹿脖子变长——不是"想要"吃高处树叶，而是短脖子的祖先被淘汰了。阑尾不是"为了发炎而长的"，而是远古祖先消化纤维素的器官遗留，演化没有"删除键"。你的身体不是精密设计的蓝图产品，而是一部写满了补丁和遗留代码的老软件——自然选择没有目的，只有结果。' },
              { title: '1.4 生物的社会价值：读懂你身体发出的每一声"信号"', color: '#f59e0b', content: '喝酒脸红？不是你"酒量差"，而是肝脏里分解乙醛的酶活性天生较低——基因决定的代谢瓶颈。蚊子咬了起包？不是"蚊子有毒"，而是免疫系统过度热心释放组胺。疫苗不是直接杀病毒，而是训练你自己的免疫系统产生记忆细胞——你不是在打"外援"，你是在训练"自己的国防军"。' },
            ].map((s) => (
              <div key={s.title} className="p-4 rounded-xl border bg-muted/20">
                <h3 className="font-semibold text-sm mb-2" style={{ color: s.color }}>{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 四个生命疆域 */}
        <section id="worlds" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-emerald-500" /></div>
            <h2 className="text-lg font-bold">生物学带你进入的四个生命疆域</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: '活在这具身体里', color: '#10b981', bg: 'bg-green-50', border: 'border-green-200', desc: '稳态与调节·选必一', content: '跑完八百米心跳飙到一百八——不是"身体要垮了"，而是下丘脑体温调节中枢、交感神经、肾上腺素的精密应急调度。吃完一碗米饭，胰岛素命令全身细胞"开门接糖"，两小时后胰高血糖素命令肝脏"放糖"。发烧也不是"身体坏了"，而是免疫系统主动上调体温设定点以抑制病原体复制。生命的常态不是静止，而是动态的波动中保持稳定。' },
              { label: '潜入细胞深处', color: '#059669', bg: 'bg-emerald-50', border: 'border-emerald-200', desc: '细胞与分子·必修一', content: '你的身体大约30万亿个细胞，每个都是一座微型工厂。线粒体内膜折叠成嵴→增加膜面积→更多ATP产出。细胞膜是磷脂双分子层镶嵌蛋白质的选择性智能边界。跑完步腿酸？乳酸不是毒，是应急能源生产线的副产品——随后被血液运到肝脏，通过糖异生重新变回葡萄糖（科里循环）。' },
              { label: '翻开家族密码', color: '#06b6d4', bg: 'bg-cyan-50', border: 'border-cyan-200', desc: '遗传与演化·必修二', content: 'DNA → RNA → 蛋白质——这就是中心法则。但你和环境互动的结果不会遗传：健身练出的肌肉、学到的技能都不会刻进DNA。DNA复制并非完美，每次分裂都有极低概率出错——这就是基因突变。加上减数分裂时的基因重组，这些"混乱"为自然选择提供了原材料。遗传不是复印，而是在保守中允许创新。' },
              { label: '回到生命之网', color: '#d97706', bg: 'bg-yellow-50', border: 'border-yellow-200', desc: '生态系统·必修二+选必二', content: '你为什么爱吃甜食？远古环境中糖分极度稀缺，对甜味的强烈偏好提高生存概率。但今天糖分过剩，古老优势成了负担。你呼吸的氧气来自海洋蓝藻和陆地森林，你点的外卖塑料包装来自远古浮游生物——你从来不是孤立的。保护生物多样性不是道德情怀，而是保护你赖以生存的生态网络冗余度。' },
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

        {/* 四个习惯（取核心4个） */}
        <section id="habits" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-green-500" /></div>
            <h2 className="text-lg font-bold">探索这四个世界的核心思维方法</h2>
          </div>
          <div className="space-y-2">
            {[
              { num: '01', title: '结构与功能观：形式永远追随功能', desc: '线粒体内膜折叠成嵴——不是"长成这样"，而是为了增加膜面积→更多电子传递链蛋白→更多ATP。肺泡壁只有一层上皮细胞（薄→气体快速扩散）；神经细胞有长轴突（快速传导信号）。看到任何生物结构，先问"它干什么用"，而不是"它叫什么名字"。' },
              { num: '02', title: '系统与层次观：零件必须放回整体', desc: '单个神经元只会放电，860亿个神经元组成的网络能产生意识。单个蚂蚁只会跟随信息素，整个蚁群能筑巢觅食。不能单独理解"胰岛素"而不理解它在血糖调控网络中的角色。面对复杂生命现象，先问"它在哪个层级上发生？"，再问"它和上下层级怎么互动？"' },
              { num: '03', title: '物质与能量观：生命是物质的舞蹈，能量的流动', desc: '光合作用把光能→ATP→糖类中稳定化学能；细胞呼吸把糖→ATP中的活跃化学能→各种生命活动。能量不会凭空产生，只会从一种形式转化为另一种。分析任何生理过程，都问两个问题：物质怎么变？能量怎么流？' },
              { num: '04', title: '信息与调控观：生命不是开关，是信息传递与反馈', desc: '血糖高了→胰岛B细胞分泌胰岛素→细胞吸收→血糖降了→反馈信号减弱→胰岛素分泌减少。这是负反馈——稳态的核心机制。神经系统的动作电位是"全或无"的数字信号，激素是浓度梯度的模拟信号。生命活动的精确调控依赖多层次的信号系统。' },
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

        {/* 四次升级 */}
        <section id="upgrades" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-yellow-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-yellow-500" /></div>
            <h2 className="text-lg font-bold">进入每个世界，必须完成的四次直觉升级</h2>
          </div>
          <div className="space-y-3">
            {[
              { from: '"记特征"', to: '"追问功能"', color: '#10b981', desc: '初中背"鱼用鳃呼吸"，高中追问"鳃为什么能在水中高效提取氧气"。初中背"红细胞没有细胞核"，高中理解"没有核意味着更多空间装血红蛋白→更强的携氧能力"。完成了这次升级，你看到任何生物特征，都会本能地问："这个特征的生存价值是什么？"' },
              { from: '"个体是孤岛"', to: '"多层级的网络"', color: '#059669', desc: '你不再只看"一个人"，而是看到分子→细胞→组织→器官→系统→个体→种群→群落→生态系统的完整链条。你理解了为什么基因突变（分子层）会影响种群演化（群体层），为什么保护一个物种关系到整个生态网络的稳定性。' },
              { from: '"目的是设计"', to: '"结果是筛选"', color: '#06b6d4', desc: '你不再说"为了适应环境，动物演化出了XX"，而是说"碰巧有XX变异的个体存活率更高"。你理解了演化没有方向、没有目的、没有完美——只有"在当前环境下能活下来就不错了"。这种视角从生物学跃迁为理解任何复杂系统的元认知。' },
              { from: '"人是中心"', to: '"人是节点"', color: '#d97706', desc: '你以为保护生态是为了"救地球"？地球经历过五次大灭绝，它照样转。保护生态本质上是保护人类赖以生存的网络复杂度。你体内的微生物细胞数量超过你自身细胞数量——你甚至不算"人类多数"。从"征服自然"到"我是网络中的节点"，这是生物学给你的最深层觉醒。' },
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

        {/* 生物与你 */}
        <section id="society" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-emerald-500" /></div>
            <h2 className="text-lg font-bold">你就是生命——在演化长河中重新定位自己</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: '你不是"一个人"，你是一个行走的生态系统', content: '你身体里约30万亿人体细胞，还有约38万亿微生物细胞。从数量上你甚至不算"人类多数"。肠道里的双歧杆菌帮你分解膳食纤维、合成维生素，甚至通过"肠-脑轴"影响你的情绪。滥用抗生素像在雨林里投放原子弹——敌人死了，盟友也死了。' },
              { title: '你不是"现在的你"，你是38亿年演化的临时载体', content: '你为什么有尾骨？因为鱼类祖先有尾巴。你为什么有鸡皮疙瘩？因为毛发竖立能让哺乳动物保暖——而你没有厚毛发，但机制还在。你的DNA里约8%序列来自远古病毒——有些甚至参与了胎盘发育。你是一本写满修订痕迹的活历史书。' },
              { title: '你不是"人类中心"的孤岛，你是生态网络的一个节点', content: '你吃的牛肉来自吃玉米的牛，玉米的根系依赖真菌菌根吸收土壤中的磷。你呼吸的氧气来自海洋蓝藻和陆地森林。物种越多，食物网越复杂，系统抵抗冲击的能力越强——这是系统思维的严谨结论，不是情怀。' },
              { title: '最终的馈赠：一种生命观', content: '没有完美，只有够用——你的眼睛有盲点，喉咙和食道共用通道（吃饭不能呼吸），这些不是设计失误，是演化修补的结果。没有孤岛，只有网络——你的健康依赖体内微生物，生存依赖体外的生态系统。在基因编辑、脑机接口逼近的时代，这种生命观是你判断"该不该做"的压舱石。' },
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
