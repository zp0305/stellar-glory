import { AppLayout } from '@/components/layout/Navigation'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Pencil } from 'lucide-react'

export function ChineseGuidePage() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-16">
        <div className="text-center">
          <Badge variant="outline" className="mb-3 text-sm px-3 py-1">语文 · 学科指南</Badge>
          <h1 className="text-2xl font-bold mb-2">为什么必须学语文</h1>
          <p className="text-muted-foreground text-sm">高中语文学习的完整指南 · 建议从上到下阅读</p>
        </div>

        {/* 为什么学 */}
        <section id="why" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center"><Pencil className="w-4 h-4 text-red-500" /></div>
            <h2 className="text-lg font-bold">为什么必须学语文</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: '1.1 从"读懂字面"到"读出多层含义"：追问"作者真正想说什么"', color: '#ef4444', content: '"苍黄的天底下，远近横着几个萧索的荒村"——"苍黄"不只是天色，更是心境的投射；"横着"不只是分布，而是"无可奈何地躺在那里"；"没有一些活气"暗示辛亥革命后中国乡村的死寂。字面义→修辞义→结构义→文化义，四层像俄罗斯套娃。从"看懂"到"读懂"，是从信息接收者到意义阐释者的跃迁。' },
              { title: '1.2 从"背答题模板"到"文体意识自动化"：不同文体，不同读法', color: '#dc2626', content: '用读小说的方式读论述文——关注"写得真有感情"，却忽略了论点和论据的关系——这是高考失分的典型原因。小说→启动"人物-情节-环境"框架；论述文→启动"论点-论据-论证"框架；诗歌→启动"意象-手法-情感"框架。这个切换必须在阅读前3秒自动完成。' },
              { title: '1.3 从"好词好句"到"语言逻辑与修辞思维"：语言不是装饰品，而是思维工具', color: '#c2410c', content: '赏析"大漠孤烟直，长河落日圆"写"意境优美，感情真挚"——这段话没有实质信息。正确的操作路径是"手法→效果→情感"三步链条：矩形的"直"与"圆"形成几何对比→构建极其开阔又极其简洁的画面→雄浑壮阔中透出苍凉。修辞不是"装饰品"——比喻让你"看见"抽象，排比让你"感受"节奏，对偶让你"比较"并列的观点。' },
              { title: '1.4 语文的社会价值：你明天就会用到的底层判断', color: '#f59e0b', content: '新闻标题"犯罪率下降20%"和"仍有8000起犯罪案件"——同一组数据，措辞框架不同，读者感受完全不同。租房合同里"乙方应合理使用房屋"——什么叫"合理"？模糊表述是争议的温床。对小学生讲话用故事和比喻，对大学生用数据和逻辑——语文训练你的正是"看人说话"的语境适应能力。' },
            ].map((s) => (
              <div key={s.title} className="p-4 rounded-xl border bg-muted/20">
                <h3 className="font-semibold text-sm mb-2" style={{ color: s.color }}>{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 四种对话场域 */}
        <section id="worlds" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-orange-500" /></div>
            <h2 className="text-lg font-bold">语文让你参与的四种对话场域</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: '准确传达', color: '#ef4444', bg: 'bg-red-50', border: 'border-red-200', desc: '语言文字运用·必修', content: '字音字形、词语运用、病句修改——训练你用最少的词、最准的结构表达最清晰的意思。修改病句（搭配不当、成分残缺、语序不当）本质上是发现思维漏洞的过程。语言是思维的外衣——训练语言的精确性，就是在训练思维的精确性。' },
              { label: '深度对话', color: '#dc2626', bg: 'bg-rose-50', border: 'border-rose-200', desc: '现代文阅读·必修+选必', content: '文学类文本教你分层解读：字面义（发生什么）→ 修辞义（怎么写的）→ 结构义（在全文起什么作用）→ 文化义（折射什么深层问题）。实用类文本教你追踪论证链条：论点是什么？论据有哪些？论证方法是什么？到了这个层次，你会建立"问题类型→解读层次"的条件反射。' },
              { label: '理性交锋', color: '#c2410c', bg: 'bg-orange-50', border: 'border-orange-200', desc: '写作·必修+选必', content: '议论文不是"堆例子"或"编故事"，而是思辨读写——"正-反-合"结构：正题（快是好的→效率高）→ 反题（快是不好的→浮躁失去深度）→ 合题（快慢不是对立的）。这个结构不是模板，而是人类理性思考的基本模式。还要识别论证中的逻辑谬误：以偏概全、诉诸权威、滑坡谬误、虚假二选一。' },
              { label: '跨时空对话', color: '#78a890', bg: 'bg-teal-50', border: 'border-teal-200', desc: '古诗文阅读·必修+选必', content: '"项王使都尉陈平召沛公"——"都尉"是什么官？"召"是随便叫还是有礼仪？不理解汉代官制文化，你读的就是翻译版而非理解版。你需要建立文化语境还原的习惯：看到古代官职→追问品级职能；看到谦敬辞→追问说话人和听话人的关系；看到典故→追问原始出处和本意。' },
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
            <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-red-500" /></div>
            <h2 className="text-lg font-bold">参与这四种对话场域的四个习惯</h2>
          </div>
          <div className="space-y-2">
            {[
              { num: '01', title: '分层解读：看到文本就问"它有哪几层含义"', desc: '鲁迅《故乡》杨二嫂说"你放了道台了"——表面是夸闰土发财；修辞是讽刺与羡慕交织；结构是与少年闰土的纯真形成对照；文化是辛亥革命后乡镇社会道德失序。四问链条缺一不可：字面说什么→用了什么手法→在全文起什么作用→折射了什么深层问题。' },
              { num: '02', title: '文体意识：不同文体，不同读法，不同写法', desc: '小说→人物-情节-环境框架；论述文→论点-论据-论证框架；诗歌→意象-手法-情感框架。写作更难——写演讲稿必须有对象感（对谁说）、现场感（呼语、排比）、收束感（呼吁、展望）。训练方法：每种文体至少完整写过3篇，逐条对照文体规范检查。' },
              { num: '03', title: '修辞思维：不只"感受"语言，还能"分析"语言', desc: '"语言优美"没有信息增量。转化为：作者用比喻将XX比作YY，化抽象为具象→用排比层层递进，强化语势。不只识别"用了什么手法"，还要问"为什么用这个手法而不是那个"——比喻让你"看见"抽象，排比让你"感受"节奏，对偶让你"比较"并列观点。' },
              { num: '04', title: '思辨读写：写作不是"编故事"，而是"想清楚"', desc: '拿到题目后第一件事不是想例子，而是建构观点：我的核心判断是什么？为什么？依据是什么？"正-反-合"思辨：正题→反题→合题，任何有深度的观点都经过这个辩证过程。还要评测反驳——如果有人说你不对，他会用什么理由？你怎么回应？' },
            ].map((h) => (
              <div key={h.num} className="flex items-start gap-3 p-3 rounded-xl border bg-muted/20">
                <div className="w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">{h.num}</div>
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
            <h2 className="text-lg font-bold">掌握每种对话场域必须完成的四次直觉升级</h2>
          </div>
          <div className="space-y-3">
            {[
              { from: '"读懂字面"', to: '"分层解读"', color: '#ef4444', desc: '读完一篇小说觉得"看懂了故事"就结束——这是初中阅读的直觉。高中语文要求：文本不止一层含义。高考问"这段话有何深意"，考的从来不是字面翻译。建立新直觉后，你会自动问"这段话有几层含义？"而不是"这段话说了什么？"' },
              { from: '"背答题模板"', to: '"文体意识自动化"', color: '#dc2626', desc: '"这句话运用了XX手法，表现了YY"——这是答题术，不是阅读力。真正的能力是：看到文章的前3秒，自动弹出"这是XX文体，应该用XX框架来读"。不依赖模板，而是在阅读过程中自然启动正确的解读框架。' },
              { from: '"好词好句"', to: '"语言逻辑与修辞思维"', color: '#c2410c', desc: '"意境优美，感情真挚"——没有实质信息。正确路径是"手法→效果→情感"三步链条。不只识别"用了什么手法"，还要追问"为什么用这个而不是那个"。完成这次升级后，你看到好文字会自动分析其语言操作路径。' },
              { from: '"想到什么写什么"', to: '"思辨读写与观点建构"', color: '#f59e0b', desc: '堆了三个例子以为就是议论文——这叫"例文"，不是"议论文"。写作的本质是"想清楚"，不是"堆例子"。拿到题目先建构观点，然后用严密逻辑支撑。还要能评测反驳、进行"正-反-合"思辨——这是理性思考的基本模式。' },
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

        {/* 语文与你 */}
        <section id="society" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-orange-500" /></div>
            <h2 className="text-lg font-bold">语文与你——作为文化对话者在技术社会中的定位</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: '你是信息的接收者，还是阐释者？', content: '看到"犯罪率下降20%"，只看到"下降了"还是能识别框架效应？看到公众号"深度解析"，会问"论点是什么？论据可靠吗？"还是只觉得"写得真有深度"？语文给你的是批判性阅读能力和对语言的敏感度——在技术狂飙、信息爆炸的时代，这是你不被算法和情绪牵着走的底层护甲。' },
              { title: '语文不是"副科"，它是所有学科的基础', content: '看不懂物理题的长题干——本质是文本理解能力不够。写不好生物实验报告——本质是说明文写作能力不够。答不好历史材料题——本质是文言文阅读和文化理解能力不够。语文是所有学科的底层操作系统：数学、物理、化学、生物、历史、地理的学习，都建立在语文能力之上。' },
              { title: '从"背注释"到"文化理解"——一场关于意义的认知革命', content: '古人读经重"注疏"——通过历代学者的注释理解原意。现代人重"语境还原"——通过作者生平、时代背景、文化编码理解深层含义。当代还要加"批判性评价"——不只理解文本说什么，还要评价"这个观点站得住脚吗？"你在学的每一首古诗、每一段文言，都是在延续人类三千年来意义阐释的语法。' },
              { title: '最终的馈赠：一种人文思维', content: '看到新闻时，问"它的框架是什么？有没有反向信息没提到？"听到对话时，听"它的言外之意是什么？说话人的立场是什么？"面对复杂问题时，从"字面—修辞—结构—文化"四个维度去分析。在AI已能生成流畅文字的时代，理解意义、阐释意义、创造意义的能力，是你作为"人"的最后护城河。' },
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
