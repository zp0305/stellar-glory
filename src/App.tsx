import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { initTheme } from '@/stores/themeStore'
import { useAuthStore } from '@/stores/authStore'
import { isSupabaseConfigured } from '@/lib/supabase'

// 懒加载题库组件
const QuestionBankListPage = lazy(() => import('@/sections/QuestionBankList').then(m => ({ default: m.QuestionBankListPage })))
const QuestionBankDetailPage = lazy(() => import('@/sections/QuestionBankDetail').then(m => ({ default: m.QuestionBankDetailPage })))
const QuestionDoPage = lazy(() => import('@/sections/QuestionDo').then(m => ({ default: m.QuestionDoPage })))

// 懒加载竞赛组件（共用同一 chunk，共享下载）
const Competition = lazy(() => import('@/sections/CompetitionPages'))

// 懒加载高考/强基
const GaokaoZoneHome = lazy(() => import('@/sections/gaokao/GaokaoZoneHome').then(m => ({ default: m.GaokaoZoneHome })))
const GaokaoPolicyDetail = lazy(() => import('@/sections/gaokao/GaokaoZoneHome').then(m => ({ default: m.GaokaoPolicyDetail })))
const GaokaoAdmissionDetail = lazy(() => import('@/sections/gaokao/GaokaoZoneHome').then(m => ({ default: m.GaokaoAdmissionDetail })))
const FoundationZoneHome = lazy(() => import('@/sections/foundation/FoundationZoneHome').then(m => ({ default: m.FoundationZoneHome })))
const FoundationPolicyDetail = lazy(() => import('@/sections/foundation/FoundationZoneHome').then(m => ({ default: m.FoundationPolicyDetail })))
const TransitionZoneHome = lazy(() => import('@/sections/transition/TransitionZoneHome').then(m => ({ default: m.TransitionZoneHome })))

// 静态导入
import { SiteHome } from '@/sections/SiteHome'
import { DiagnosisPage } from '@/sections/tools/DiagnosisPage'
import { PlannerPage } from '@/sections/tools/PlannerPage'
import { MethodsPage } from '@/sections/tools/MethodsPage'
import PathDetailPage from '@/sections/tools/PathDetailPage'
import { PhysicsModuleGrid } from '@/sections/SubjectGuidePage'
import { PhysicsGuideContent } from '@/sections/PhysicsGuidePage'
import { CognitionGraphPage } from '@/sections/CognitionGraphPage'
import { ModelList } from '@/sections/ModelList'
import { ModelPage } from '@/sections/ModelPage'
import { ConceptList } from '@/sections/ConceptList'
import { ConceptPage } from '@/sections/ConceptPage'
import { FormulaListPage } from '@/sections/FormulaListPage'
import { StrategyListPage, StrategyDetailPage } from '@/sections/StrategyPages'
import { ThinkingMethodList } from '@/sections/physics/ThinkingMethodList'
import { ThinkingMethodDetail } from '@/sections/physics/ThinkingMethodDetail'
import { VisionListPage, VisionDetailPage } from '@/sections/VisionPages'
import { WrongQuestionsPage } from '@/sections/LearningPages'
import { MyLearning } from '@/sections/MyLearning'
import { FavoritesPage } from '@/sections/FavoritesPage'
import { ChemistryGuidePage } from '@/sections/ChemistryGuidePage'
import { MathGuidePage } from '@/sections/MathGuidePage'
import { BiologyGuidePage } from '@/sections/BiologyGuidePage'
import { ChineseGuidePage } from '@/sections/ChineseGuidePage'
import { EnglishGuidePage } from '@/sections/EnglishGuidePage'
import PracticeRedirect from '@/sections/PracticeRedirect'

function Loading() {
  return <div className="min-h-screen flex items-center justify-center"><div className="text-muted-foreground">加载中...</div></div>
}

// 通用的"即将上线"占位组件
function ComingSoon({ name }: { name: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-5xl opacity-30">🚧</div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-muted-foreground text-sm">该模块正在建设中，敬请期待</p>
      </div>
    </div>
  )
}

function App() {
  useEffect(() => {
    initTheme()
    if (isSupabaseConfigured) {
      useAuthStore.getState().init()
    }
  }, [])

  return (
    <BrowserRouter basename="/stellar-glory">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<SiteHome />} />
          <Route path="/physics" element={<PhysicsModuleGrid />} />
          <Route path="/physics/guide" element={<PhysicsGuideContent />} />
          <Route path="/physics/graph" element={<CognitionGraphPage />} />
          <Route path="/physics/models" element={<ModelList />} />
          <Route path="/physics/models/:modelId" element={<ModelPage />} />
          <Route path="/physics/concepts" element={<ConceptList />} />
          <Route path="/physics/concepts/:conceptId" element={<ConceptPage />} />
          <Route path="/physics/formulas" element={<FormulaListPage />} />
          <Route path="/physics/strategies" element={<StrategyListPage />} />
          <Route path="/physics/strategies/:strategyId" element={<StrategyDetailPage />} />
          <Route path="/physics/thinking" element={<ThinkingMethodList />} />
          <Route path="/physics/thinking/:methodId" element={<ThinkingMethodDetail />} />
          <Route path="/physics/vision" element={<VisionListPage />} />
          <Route path="/physics/vision/:storyId" element={<VisionDetailPage />} />
          <Route path="/physics/exercises" element={<QuestionBankListPage />} />
          <Route path="/physics/exercises/:modelId" element={<QuestionBankDetailPage />} />
          <Route path="/physics/exercises/:modelId/do" element={<QuestionDoPage />} />
          <Route path="/physics/wrong" element={<WrongQuestionsPage />} />
          <Route path="/physics/practice" element={<PracticeRedirect />} />
          <Route path="/physics/practice/bank" element={<PracticeRedirect />} />
          <Route path="/physics/practice/do" element={<PracticeRedirect />} />
          <Route path="/physics/practice/knowledge" element={<PracticeRedirect />} />
          <Route path="/learning" element={<MyLearning />} />
          <Route path="/physics/favorites" element={<FavoritesPage />} />
          <Route path="/physics/senior" element={<ComingSoon name="物理高考专项" />} />
          <Route path="/physics/foundation" element={<ComingSoon name="物理强基专项" />} />
          <Route path="/chemistry" element={<ChemistryGuidePage />} />
          <Route path="/chemistry/models" element={<ModelList />} />
          <Route path="/chemistry/models/:modelId" element={<ModelPage />} />
          <Route path="/chemistry/concepts" element={<ConceptList />} />
          <Route path="/chemistry/concepts/:conceptId" element={<ConceptPage />} />
          <Route path="/chemistry/formulas" element={<FormulaListPage />} />
          <Route path="/chemistry/strategies" element={<StrategyListPage />} />
          <Route path="/chemistry/strategies/:strategyId" element={<StrategyDetailPage />} />
          <Route path="/chemistry/exercises" element={<QuestionBankListPage />} />
          <Route path="/chemistry/exercises/:modelId" element={<QuestionBankDetailPage />} />
          <Route path="/chemistry/exercises/:modelId/do" element={<QuestionDoPage />} />
          <Route path="/chemistry/senior" element={<ComingSoon name="化学高考专项" />} />
          <Route path="/chemistry/foundation" element={<ComingSoon name="化学强基专项" />} />
          <Route path="/math" element={<MathGuidePage />} />
          <Route path="/math/models" element={<ModelList />} />
          <Route path="/math/models/:modelId" element={<ModelPage />} />
          <Route path="/math/concepts" element={<ConceptList />} />
          <Route path="/math/concepts/:conceptId" element={<ConceptPage />} />
          <Route path="/math/formulas" element={<FormulaListPage />} />
          <Route path="/math/strategies" element={<StrategyListPage />} />
          <Route path="/math/strategies/:strategyId" element={<StrategyDetailPage />} />
          <Route path="/math/exercises" element={<QuestionBankListPage />} />
          <Route path="/math/exercises/:modelId" element={<QuestionBankDetailPage />} />
          <Route path="/math/exercises/:modelId/do" element={<QuestionDoPage />} />
          <Route path="/math/senior" element={<ComingSoon name="数学高考专项" />} />
          <Route path="/math/foundation" element={<ComingSoon name="数学强基专项" />} />
          <Route path="/biology" element={<BiologyGuidePage />} />
          <Route path="/biology/models" element={<ModelList />} />
          <Route path="/biology/models/:modelId" element={<ModelPage />} />
          <Route path="/biology/concepts" element={<ConceptList />} />
          <Route path="/biology/concepts/:conceptId" element={<ConceptPage />} />
          <Route path="/biology/formulas" element={<FormulaListPage />} />
          <Route path="/biology/strategies" element={<StrategyListPage />} />
          <Route path="/biology/strategies/:strategyId" element={<StrategyDetailPage />} />
          <Route path="/biology/exercises" element={<QuestionBankListPage />} />
          <Route path="/biology/exercises/:modelId" element={<QuestionBankDetailPage />} />
          <Route path="/biology/exercises/:modelId/do" element={<QuestionDoPage />} />
          <Route path="/biology/senior" element={<ComingSoon name="生物高考专项" />} />
          <Route path="/biology/foundation" element={<ComingSoon name="生物强基专项" />} />
          <Route path="/chinese" element={<ChineseGuidePage />} />
          <Route path="/chinese/models" element={<ModelList />} />
          <Route path="/chinese/models/:modelId" element={<ModelPage />} />
          <Route path="/chinese/concepts" element={<ConceptList />} />
          <Route path="/chinese/concepts/:conceptId" element={<ConceptPage />} />
          <Route path="/chinese/formulas" element={<FormulaListPage />} />
          <Route path="/chinese/strategies" element={<StrategyListPage />} />
          <Route path="/chinese/strategies/:strategyId" element={<StrategyDetailPage />} />
          <Route path="/chinese/exercises" element={<QuestionBankListPage />} />
          <Route path="/chinese/exercises/:modelId" element={<QuestionBankDetailPage />} />
          <Route path="/chinese/exercises/:modelId/do" element={<QuestionDoPage />} />
          <Route path="/chinese/senior" element={<ComingSoon name="语文高考专项" />} />
          <Route path="/chinese/foundation" element={<ComingSoon name="语文强基专项" />} />
          <Route path="/english" element={<EnglishGuidePage />} />
          <Route path="/english/models" element={<ModelList />} />
          <Route path="/english/models/:modelId" element={<ModelPage />} />
          <Route path="/english/concepts" element={<ConceptList />} />
          <Route path="/english/concepts/:conceptId" element={<ConceptPage />} />
          <Route path="/english/formulas" element={<FormulaListPage />} />
          <Route path="/english/strategies" element={<StrategyListPage />} />
          <Route path="/english/strategies/:strategyId" element={<StrategyDetailPage />} />
          <Route path="/english/exercises" element={<QuestionBankListPage />} />
          <Route path="/english/exercises/:modelId" element={<QuestionBankDetailPage />} />
          <Route path="/english/exercises/:modelId/do" element={<QuestionDoPage />} />
          <Route path="/english/senior" element={<ComingSoon name="英语高考专项" />} />
          <Route path="/english/foundation" element={<ComingSoon name="英语强基专项" />} />
          <Route path="/gaokao" element={<GaokaoZoneHome />} />
          <Route path="/gaokao/policy/:id" element={<GaokaoPolicyDetail />} />
          <Route path="/gaokao/admission/:id" element={<GaokaoAdmissionDetail />} />
          <Route path="/gaokao/path" element={<GaokaoZoneHome />} />
          <Route path="/foundation" element={<FoundationZoneHome />} />
          <Route path="/foundation/policy/:id" element={<FoundationPolicyDetail />} />
          <Route path="/transition" element={<TransitionZoneHome />} />

          {/* 竞赛专区（共用 chunk） */}
          <Route path="/competition" element={<Competition />} />
          <Route path="/competition/physics" element={<Competition />} />
          <Route path="/competition/physics/guide" element={<Competition />} />
          <Route path="/competition/physics/outline" element={<Competition />} />
          <Route path="/competition/physics/models" element={<Competition />} />
          <Route path="/competition/physics/papers" element={<Competition />} />
          <Route path="/competition/physics/experiment" element={<Competition />} />
          <Route path="/competition/physics/path" element={<Competition />} />
          <Route path="/competition/math" element={<Competition />} />
          <Route path="/competition/chemistry" element={<Competition />} />
          <Route path="/competition/biology" element={<Competition />} />
          <Route path="/competition/cs" element={<Competition />} />

          {/* 学习工具 */}
          <Route path="/diagnosis" element={<DiagnosisPage />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/planner/:pathId" element={<PathDetailPage />} />
          <Route path="/methods" element={<MethodsPage />} />

          <Route path="*" element={<ComingSoon name="星耀高中教育平台" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
