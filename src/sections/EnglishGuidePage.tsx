import { AppLayout } from '@/components/layout/Navigation'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Globe } from 'lucide-react'

export function EnglishGuidePage() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-16">
        <div className="text-center">
          <Badge variant="outline" className="mb-3 text-sm px-3 py-1">英语 · 学科指南</Badge>
          <h1 className="text-2xl font-bold mb-2">为什么必须学英语</h1>
          <p className="text-muted-foreground text-sm">高中英语学习的完整指南 · 建议从上到下阅读</p>
        </div>

        {/* 为什么学英语 */}
        <section id="why" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center"><Globe className="w-4 h-4 text-cyan-500" /></div>
            <h2 className="text-lg font-bold">为什么必须学英语</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: '1.1 从"翻译"到"形式-意义-用法"：追问"为什么用这个形式"', color: '#06b6d4', content: '你看到"I have lived here for 10 years"，翻译成中文："我在这里住了10年"。你会追问：为什么用现在完成时，不用一般过去时？因为说话人想传递的隐含信息是"我还会继续住下去"。如果是"I lived here for 10 years"，隐含信息变成了"我不再住在这里了"。一个助动词的差异，改变了整句话的语用含义——这就是"把翻译对了升级为三维关联"。' },
              { title: '1.2 从"背单词"到"语篇分析"：追问"作者想让我相信什么"', color: '#0891b2', content: '你读一篇英语论述文，逐句翻译后发现每句话都"看懂了"，但主旨题选错、推理题选错、作者态度题也选错。问题不在词汇量，而在语篇意识缺失——你把所有句子当成了一堆孤立信息的集合。逻辑线（however/therefore/moreover 等连接词标记论证走向）和指代线（it/they/this/which 等回指链标记信息连贯）是语篇的两根骨架。抓住这两根线，即使有不认识的词，也能推出作者的论证逻辑。' },
              { title: '1.3 从"中式英语"到"跨语言对比"：两种语言底层逻辑不同', color: '#6366f1', content: '你写出"Although he is rich, but he is not happy"——语法完全正确，但这是最常见的中国学生英语错误。因为汉语的逻辑连接成对出现："虽然……但是……"。而英语的逻辑连接非对称：用了 although 就不能用 but。这是两种语言底层逻辑的差异：汉语重意合（靠语义自然连接），英语重形合（靠形式标记连接）。建立跨语言对比意识，主动利用正迁移、规避负迁移。' },
              { title: '1.4 英语的社会价值：你明天就会用到的底层判断', color: '#f59e0b', content: '学术资源的"不平等"：同一篇顶尖论文，中文翻译版往往滞后6-18个月。技术文档的"原版优势"：开源软件的中文文档可能已过时，英文原版实时更新。跨文化沟通的"语用失误"：对英语母语者说"Your English is very good"——你觉得是夸奖，对方可能觉得你在暗示"我以为你英语不好"。懂英语不只是懂词汇和语法，还要懂文化背景和交际规范。' },
            ].map((s) => (
              <div key={s.title} className="p-4 rounded-xl border bg-muted/20">
                <h3 className="font-semibold text-sm mb-2" style={{ color: s.color }}>{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 四种交际维度 */}
        <section id="worlds" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-blue-500" /></div>
            <h2 className="text-lg font-bold">英语让你参与的四种交际维度</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: '解码维度', color: '#06b6d4', bg: 'bg-cyan-50', border: 'border-cyan-200', desc: '句法基础·必修', content: '五种基本句型、三种从句、非谓语动词、时态与语态。核心信念：形式是意义的载体。现在完成时不只是"过去开始持续到现在"的规则记忆，而是说话人想强调"与现在的联系"时选择的形式。训练的是"为什么用这个形式而非那个"的判断力。' },
              { label: '语篇维度', color: '#0891b2', bg: 'bg-teal-50', border: 'border-teal-200', desc: '语篇与阅读·必修+选择性必修', content: '英语阅读不再考"这个词什么意思"，而是考"这段话在全文起什么作用"。语篇分析的核心操作是追踪两条线：逻辑线（连接词标记论证走向）和指代线（回指链标记信息连贯）。建立"问题类型→解读层次"的条件反射。' },
              { label: '输出维度', color: '#6366f1', bg: 'bg-indigo-50', border: 'border-indigo-200', desc: '写作与翻译·必修+选择性必修', content: '输入和输出调用的是不同的认知系统。"输入-重组-输出"三步法：输入（分析范文论证结构和衔接手段）→ 重组（用自己的话重构论证，结构复用+内容替换）→ 输出（在新话题上独立构建语篇）。重组是输入到输出的关键桥梁。' },
              { label: '跨文化维度', color: '#8b5cf6', bg: 'bg-violet-50', border: 'border-violet-200', desc: '听力口语·高考衔接策略', content: '"I want to ask you some questions"——语法100%正确，但对老师说太直接。得体说法："I was wondering if I could ask you..."。这就是语体注册（register）：同一个意思，在正式和非正式场合的表达完全不同。建立"对象感"——对谁说、在什么场合、想达到什么目的。' },
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
            <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-cyan-500" /></div>
            <h2 className="text-lg font-bold">探索这四个维度的四个习惯</h2>
          </div>
          <div className="space-y-2">
            {[
              { num: '01', title: '形式-意义-用法三维关联：看到任何语法形式，都问"它想表达什么意义？在什么场景下使用？"', desc: '每学一个语法形式，必须完成三个追问——它长什么样（形式）→ 它想表达什么（意义）→ 说话人在什么场景下选择它而非其他形式（用法）。大量学生的英语学习卡在第一步——能识别形式、能默写规则，但无法在写作和口语中主动运用。' },
              { num: '02', title: '语境中的语篇分析：看到任何语篇，都先追踪逻辑线和指代线', desc: 'However, this does not mean that... 看到 however，立即知道：上一段的论点要被转折了。读每段话时先不逐句翻译，而是问自己三个问题："核心论点是什么？""和上一段什么关系？""作者想说服我什么？"三个问题回答完，语篇结构就浮现了。' },
              { num: '03', title: '跨语言对比与母语迁移：遇到表达"感觉怪怪的"时，先做一次中英对比', desc: '"Although..., but..."——语感告诉你"好像不对"，但又说不出哪里不对。这时候做一次中英对比：汉语中"虽然……但是……"必须成对出现，英语中 although 和 but 不能同时使用。90%的中式英语都有母语负迁移的根源，而90%的负迁移都可以通过一次跨语言对比来识别和纠正。' },
              { num: '04', title: '元认知与自主监控：不做完100套题还原地踏步，而是"错题归因→定向训练→效果评估"', desc: '你做完50套阅读理解，正确率从60%提升到63%。因为你只做了"对答案、看解析"。归因是把每道错题追溯到认知层面——不是"这道题选错了"，而是"选错是因为没看到 however 的逻辑信号词→语篇分析能力不足"。归因后的下一步是定向训练——针对认知薄弱点专项突破。' },
            ].map((h) => (
              <div key={h.num} className="flex items-start gap-3 p-3 rounded-xl border bg-muted/20">
                <div className="w-7 h-7 rounded-lg bg-cyan-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">{h.num}</div>
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
            <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-sky-500" /></div>
            <h2 className="text-lg font-bold">参与每个维度，必须完成的四次直觉升级</h2>
          </div>
          <div className="space-y-3">
            {[
              { from: '"翻译思维"', to: '"形式-意义-用法三维关联"', color: '#06b6d4', desc: '看到"I have lived here for 10 years"，第一反应不再是"翻译成中文"，而是自动问"这个时态想传递什么隐含信息？"英语不是中文的翻译，而是一套独立的形式-意义-用法系统。建立新直觉后，你看到任何英语句子，都会追问"它为什么用这个形式而非那个"。' },
              { from: '"读懂每个词"', to: '"语篇分析"', color: '#0891b2', desc: '逐句翻译后发现每句都"看懂了"，但主旨题、推理题、态度题全错。阅读理解不是"逐句翻译"的集合，而是"把握语篇逻辑"的过程。完成了这次升级后，看到一篇英语文章，脑子里会自动弹出"它的论证结构是什么？作者在哪个地方转折？哪个地方递进？"' },
              { from: '"中式英语"', to: '"跨语言对比与母语迁移"', color: '#6366f1', desc: '"Teacher Zhang"在中国完全得体，但在英语中是语用错误——英语文化中不用职业头衔作称呼（Doctor/Professor 除外）。你的母语既是资源（正迁移：汉语对仗可转化为英语平行结构），也是干扰（负迁移：汉语意合习惯不能直接搬到英语中）。完成这次升级后，你写任何表达都会自动触发跨语言对比。' },
              { from: '"多读多听就能说会写"', to: '"策略性输入与输出"', color: '#8b5cf6', desc: '输入和输出调用的是不同的认知系统——阅读理解调用语义解码，写作调用语义编码，从解码到编码之间没有自动通道。"输入-重组-输出"三步法是关键桥梁，元认知监控（错题归因→定向训练→效果评估）是你的"学习设计师"能力——不等着老师布置任务，而是根据自己的薄弱环节自主选择学习策略。' },
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

        {/* 英语与你 */}
        <section id="you" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center"><BookOpen className="w-4 h-4 text-indigo-500" /></div>
            <h2 className="text-lg font-bold">英语与你——在技术社会中的定位</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: '你是信息的接收者，还是主动获取者？', content: '当你需要查一个专业概念，你是只搜中文资料，还是能主动搜索英文资料？当你遇到一个技术难题，你是只看中文教程，还是能读英文原版文档？你通过英语获得的是信息获取能力和跨文化理解力。' },
              { title: '英语是现代文明的另一副眼镜', content: '你每天用的互联网，至少有一半的信息是英语的。你学的编程语言，关键词和文档都是英语的。你追的科幻剧，原版台词往往有中文翻译丢失的微妙幽默和文化指涉。英语不是"考试科目"，而是你获取全球知识、参与跨文化对话、理解不同思维方式的一副眼镜。戴上它，你能看到不戴时看不到的东西。' },
              { title: '从"学英语"到"用英语学"——一场关于认知边界的扩张', content: '英语的故事，就是人类不断突破语言边界、用另一种语言思考问题的过程。你今天在课本里背的每一个单词、分析的每一个句子、写的每一篇作文，都是在延续这条线索：理解另一种语言的逻辑，掌握另一种思维的方式，最终用另一种语言自由表达。你不是在"备考"，你是在获得"认知的另一种可能"。' },
              { title: '最终的馈赠：一种跨越思维', content: '看到一种表达方式时，你会问"它在特定文化语境中得体吗？"看到一种观点时，你会想"英语文化背景下的人会怎么表达类似的观点？"面对跨文化交流时，你从"字面意义—语用含义—文化背景"三个维度去理解。在一个全球化、信息化、跨文化交流日益频繁的时代，这种理解和表达在不同语言间自由切换的能力，是英语留给你的终身资产。' },
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
