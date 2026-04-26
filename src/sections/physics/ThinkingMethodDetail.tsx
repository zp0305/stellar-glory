import { useParams, Link, useNavigate } from 'react-router-dom'
import { getThinkingMethod, thinkingMethods } from '@/data/physics/thinkingMethods'
import { ArrowLeft, ArrowRight, Lightbulb, Zap, CheckCircle2, AlertTriangle, Link2, BookOpen } from 'lucide-react'

const METHOD_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'P-TM01': { bg: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-600', border: 'border-blue-200 dark:border-blue-800' },
  'P-TM02': { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-600', border: 'border-emerald-200 dark:border-emerald-800' },
  'P-TM03': { bg: 'bg-violet-50 dark:bg-violet-950/30', text: 'text-violet-600', border: 'border-violet-200 dark:border-violet-800' },
  'P-TM04': { bg: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-600', border: 'border-amber-200 dark:border-amber-800' },
  'P-TM05': { bg: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-600', border: 'border-rose-200 dark:border-rose-800' },
  'P-TM06': { bg: 'bg-indigo-50 dark:bg-indigo-950/30', text: 'text-indigo-600', border: 'border-indigo-200 dark:border-indigo-800' },
  'P-TM07': { bg: 'bg-green-50 dark:bg-green-950/30', text: 'text-green-600', border: 'border-green-200 dark:border-green-800' },
}

export function ThinkingMethodDetail() {
  const { methodId } = useParams<{ methodId: string }>()
  const navigate = useNavigate()
  const method = methodId ? getThinkingMethod(methodId) : null

  if (!method) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500">未找到该思维方法</p>
          <Link to="/physics/thinking" className="text-blue-600 mt-2 block">返回列表</Link>
        </div>
      </div>
    )
  }

  const colors = METHOD_COLORS[method.id] || { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200' }
  const currentIndex = thinkingMethods.findIndex(m => m.id === method.id)
  const prevMethod = currentIndex > 0 ? thinkingMethods[currentIndex - 1] : null
  const nextMethod = currentIndex < thinkingMethods.length - 1 ? thinkingMethods[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* 顶部导航栏 */}
      <div className={`${colors.bg} border-b ${colors.border}`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/physics/thinking"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              返回思维方法
            </Link>
            <div className="flex items-center gap-2">
              {prevMethod && (
                <Link
                  to={`/physics/thinking/${prevMethod.id}`}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  <ArrowLeft className="w-3 h-3" />
                  {prevMethod.name}
                </Link>
              )}
              <span className="text-slate-300 dark:text-slate-600">|</span>
              {nextMethod && (
                <Link
                  to={`/physics/thinking/${nextMethod.id}`}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  {nextMethod.name}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* 标题区 */}
        <div>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} mb-4`}>
            <Zap className="w-4 h-4" />
            {method.code}
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {method.name}
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-6">
            {method.subtitle}
          </p>

          {/* 一句话定义 */}
          <div className={`p-5 rounded-xl ${colors.bg} border ${colors.border}`}>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-base">
              {method.definition}
            </p>
          </div>
        </div>

        {/* 学科本质 */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Lightbulb className={`w-5 h-5 ${colors.text}`} />
            学科本质
          </h2>
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {method.essence}
            </p>
            <p className="text-slate-600 dark:text-slate-400 italic">
              {method.value}
            </p>

            {method.idealizationTypes && method.idealizationTypes.length > 0 && (
              <div className="mt-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="text-left py-2 text-slate-500 font-medium">理想化类型</th>
                      <th className="text-left py-2 text-slate-500 font-medium">认知价值</th>
                    </tr>
                  </thead>
                  <tbody>
                    {method.idealizationTypes.map((item, i) => (
                      <tr key={i} className="border-b border-slate-100 dark:border-slate-800 last:border-0">
                        <td className="py-2.5 font-medium text-slate-700 dark:text-slate-200">{item.type}</td>
                        <td className="py-2.5 text-slate-600 dark:text-slate-400">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {method.trainingGains && method.trainingGains.length > 0 && (
              <div className="mt-5 space-y-2">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">训练这个思维方法的本质收获：</p>
                {method.trainingGains.map((gain, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className={`w-4 h-4 ${colors.text} mt-0.5 shrink-0`} />
                    <span>{gain}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 触发条件 */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Zap className={`w-5 h-5 ${colors.text}`} />
            触发条件
          </h2>
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
            <div className="space-y-3">
              {method.triggers.map((trigger, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <div className={`px-2.5 py-1 rounded-lg font-medium text-xs shrink-0 ${colors.bg} ${colors.text}`}>
                    {trigger.type}
                  </div>
                  <div>
                    <span className="text-slate-600 dark:text-slate-400">→ </span>
                    <span className="text-slate-700 dark:text-slate-300">{trigger.symptom}</span>
                    <span className="text-slate-500 dark:text-slate-500">（</span>
                    <span className="text-blue-600 dark:text-blue-400">{trigger.action}</span>
                    <span className="text-slate-500 dark:text-slate-500">）</span>
                  </div>
                </div>
              ))}
            </div>

            {method.keywords && method.keywords.length > 0 && (
              <div className="mt-5 pt-5 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">关键词（但不是模板）</p>
                <div className="flex flex-wrap gap-2">
                  {method.keywords.map((kw, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {method.traps && method.traps.length > 0 && (
              <div className="mt-5 pt-5 border-t border-slate-200 dark:border-slate-700 space-y-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> 判断陷阱
                </p>
                {method.traps.map((trap, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-slate-700 dark:text-slate-200">{trap.trap}</p>
                      <p className="text-emerald-600 dark:text-emerald-400 mt-1">{trap.correct}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 训练阶梯 */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen className={`w-5 h-5 ${colors.text}`} />
            训练阶梯
          </h2>
          <div className="space-y-4">
            {method.ladder.map((level) => (
              <div key={level.level} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm text-white
                    ${level.level === 'B' ? 'bg-emerald-500' : level.level === 'J' ? 'bg-blue-500' : 'bg-violet-500'}`}>
                    {level.level}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{level.name}</p>
                    <p className="text-sm text-slate-500">{level.goal}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {level.methods.map((m, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 mt-2 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
                <div className={`mt-4 p-3 rounded-lg text-xs ${colors.bg} ${colors.text} font-medium`}>
                  自测标准：{level.selfTest}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 跨板块映射 */}
        {method.cross板块 && method.cross板块.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Link2 className={`w-5 h-5 ${colors.text}`} />
              跨板块映射
            </h2>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                    <th className="text-left py-3 px-5 text-slate-500 font-medium">物理板块</th>
                    <th className="text-left py-3 px-5 text-slate-500 font-medium">具体体现</th>
                    <th className="text-left py-3 px-5 text-slate-500 font-medium">典型模型</th>
                  </tr>
                </thead>
                <tbody>
                  {method.cross板块.map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <td className="py-3 px-5 font-medium text-slate-700 dark:text-slate-200">{row.板块}</td>
                      <td className="py-3 px-5 text-slate-600 dark:text-slate-400">{row.体现}</td>
                      <td className="py-3 px-5 text-slate-500 dark:text-slate-400 text-xs">{row.典型}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 自我检测 */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className={`w-5 h-5 ${colors.text}`} />
            自我检测（费曼式）
          </h2>
          <div className="space-y-4">
            {method.selfTests.map((test, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-start gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 ${colors.text.replace('text-', 'bg-')}`}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">{test.q}</p>
                    <p className="mt-3 text-xs text-slate-400 flex items-start gap-1.5">
                      <span className="text-slate-500 font-medium">检验点：</span>
                      <span>{test.point}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 关联链接 */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Link2 className={`w-5 h-5 ${colors.text}`} />
            关联链接
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {method.relatedModels.length > 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">关联模型</p>
                <div className="space-y-2">
                  {method.relatedModels.map((model, i) => (
                    <div key={i} className="text-sm text-slate-600 dark:text-slate-400">{model}</div>
                  ))}
                </div>
              </div>
            )}
            {method.relatedParadigms.length > 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">关联分析范式</p>
                <div className="space-y-2">
                  {method.relatedParadigms.map((p, i) => (
                    <div key={i} className="text-sm text-slate-600 dark:text-slate-400">{p}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 上下翻页 */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          {prevMethod ? (
            <Link
              to={`/physics/thinking/${prevMethod.id}`}
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {prevMethod.name}
            </Link>
          ) : <div />}
          <Link
            to="/physics/thinking"
            className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            返回全部方法
          </Link>
          {nextMethod ? (
            <Link
              to={`/physics/thinking/${nextMethod.id}`}
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              {nextMethod.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
