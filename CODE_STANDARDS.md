# 星耀 — 编码规范

> 版本：v2.1  
> 更新：2026-04-22（v1.6 固化）

---

## 一、组件规范

### 1.1 AppLayout 使用

```tsx
// ✅ 正确：详情页使用 AppLayout + showSubjectNav
<AppLayout showSubjectNav anchors={[]}>
  <内容 />
</AppLayout>

// ✅ 正确：锚点导航（仅需要时使用）
<AppLayout showSubjectNav anchors={[{ id: 'step-1', label: '第一步' }]}>
  <内容 />
</AppLayout>

// ❌ 错误：showSubjectNav 和 anchors 混用导致右侧导航混乱
//   - VisionDetailPage → 使用 anchors
//   - ModelPage / StrategyDetailPage → anchors={[]}
```

### 1.2 题库组件导出

```tsx
// 每个文件只导出一个页面组件
export function QuestionBankListPage() { ... }
export function QuestionBankDetailPage() { ... }
export function QuestionDoPage() { ... }
```

---

## 二、数据规范

### 2.1 题库数据（Question 接口）

```ts
// ✅ 正确：所有字段完整
const q: Question = {
  id: 'PHY-B01',
  modelId: 'PHY-M01',
  difficulty: 'B',
  type: '选择题',
  estimatedMinutes: 8,
  tags: ['易错点', '真实情境'],
  hint: '注意刹车到停止的时间...',    // null = 无提示
  question: '高铁以 30m/s 的速度...', // Markdown + LaTeX
  options: ['A. 150m', 'B. 200m', ...], // 填空/计算用 null
  answer: 'B',
  explanation: '## 解析\n\n1. ...',  // Markdown + LaTeX
  points: ['匀变速直线运动', '刹车距离'],
  routineIds: ['PHY-R02'],
}

// ❌ 错误：hint 不能省略字段（undefined），应用 null
hint: undefined   // ❌
hint: null        // ✅
```

### 2.2 静态 Import（强制）

所有数据文件必须使用静态 import，**禁止**动态 `import()`：

```ts
// ✅ 正确：静态导入题库数据
import { M01_questions } from '@/data/physics/questions/M01_questions'

// ❌ 错误：动态导入（增加网络延迟）
const mod = await import(`@/data/physics/questions/M01_questions`)
```

---

## 三、路由懒加载规范

### 3.1 何时使用 lazy()

| 情况 | 方式 |
|------|------|
| 首页、模型、套路、视界等稳定页面 | 静态 import |
| 题库页面（QuestionBank*） | `lazy()` |
| 高考/强基页面 | `lazy()` |
| 占位页（ComingSoon） | 静态 import |

### 3.2 App.tsx 模板

```tsx
import { lazy, Suspense } from 'react'

// 懒加载
const QuestionBankListPage = lazy(() =>
  import('@/sections/QuestionBankList').then(m => ({ default: m.QuestionBankListPage }))
)

// 静态导入
import { ModelPage } from '@/sections/ModelPage'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/physics/models/:modelId" element={<ModelPage />} />
          <Route path="/physics/exercises" element={<QuestionBankListPage />} />
          ...
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
```

---

## 四、样式规范

### 4.1 MarkdownRenderer（公式渲染）

```tsx
import { MarkdownRenderer } from '@/components/MarkdownRenderer'

// 题干预览
<MarkdownRenderer
  content={q.question}
  enableKaTeX
  className="text-sm [&_p]:leading-relaxed [&_p]:font-medium [&_p]:mb-0"
/>

// 解析（多段落）
<MarkdownRenderer
  content={q.explanation}
  enableKaTeX
  className="text-sm text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-2"
/>
```

### 4.2 题库卡片样式

```tsx
// 难度颜色
const DIFF_COLOR = {
  B: 'text-green-600 bg-green-50 border-green-200',
  J: 'text-amber-600 bg-amber-50 border-amber-200',
  T: 'text-red-600 bg-red-50 border-red-200',
}
```

---

## 五、Supabase 保护规范

```ts
// ✅ 正确：在 store 初始化时检查
if (isSupabaseConfigured) {
  useAuthStore.getState().init()
}

// ✅ 正确：Supabase 客户端空值保护
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey, ...)
  : (null as unknown as SupabaseClient)

// ❌ 错误：直接创建空客户端
export const supabase = createClient('', '', ...)  // 会触发 422
```

---

## 六、填空/计算题答案比对规范

### 6.1 normalizeAnswer 函数

填空题和计算题使用标准化比对函数，避免格式差异导致误判：

```ts
// src/sections/QuestionDo.tsx 内联定义
function normalizeAnswer(raw: string): string {
  return raw
    .replace(/\$+/g, '')   // 去 LaTeX 美元符 $ $ $
    .replace(/\\/g, '')     // 去反斜杠 \frac{}{} 等
    .replace(/\s+/g, '')   // 去所有空格
    .toLowerCase()
    .trim()
}

// 使用
const isCorrect = submitted &&
  isChoice &&
  normalizeAnswer(selectedOption ?? '') === normalizeAnswer(q.answer)
```

### 6.2 填空题 vs 计算题行为

| 题型 | 提交后行为 | 边框颜色 |
|------|-----------|---------|
| 选择题 | 自动比对，显示✅/❌ | 绿/红 ring |
| 填空题 | 显示"你的答案" vs"参考答案"，不自评 | 无 ring |
| 计算题 | 显示参考解答，学生自评 | 无 ring |

## 七、禁止事项

1. **禁止**在 App.tsx 顶层静态导入大型数据文件（M42全部内容等）
2. **禁止**在模块初始化时调用未保护的 Supabase 方法
3. **禁止**在 `QuestionDoPage` 等组件内使用数组索引而不检查边界
4. **禁止**在生产构建中使用 `console.error` 以外的调试手段
