# 星耀 — 开发工作流程规范

> 版本：v1.0  
> 日期：2026-04-22  
> 背景：吸取今天多次部署事故教训，制定可执行的开发机制

---

## 核心原则

**原则1：构建失败，绝不部署。**  
构建未通过 = 代码有问题，不代表代码"基本 OK 可以先上"。

**原则2：不验证 = 没完成。**  
部署后必须验证，每次都做，不跳过。

**原则3：小步提交，及时回退。**  
每次改动尽量小，出问题能快速定位和回退。

---

## 一、开发循环（每次改动）

```
第1步：改代码
    ↓
第2步：运行构建  npm run build
    ↓
第3步：检查构建输出（必须全部绿色）
    ↓ 失败 → 修复 → 回到第2步
    ↓ 成功
第4步：部署到新 URL
    ↓
第5步：打开新 URL 验证功能（截图或 Console 检查）
    ↓ 失败/有问题 → 修复 → 回到第2步
    ↓ 成功 → 告知用户新 URL（废弃旧 URL）
```

### 构建检查清单（第3步必须逐项检查）

构建输出必须满足以下全部条件：

```
✅ 无 "error" 关键字（除了 warning 不算）
✅ "built in X.XXs" 出现在输出末尾
✅ EXIT code = 0（运行 echo $? 确认）
✅ dist/ 目录下有 index.html 和 assets/ 目录
✅ assets/ 目录下有 QuestionDo 相关 JS 文件（如果是改动了题库相关代码）
✅ 相关 JS 文件的时间戳为当前时间（±2分钟内）
```

> **注意**：Vite 有缓存机制。如果构建时间异常短（<5秒），极有可能是缓存命中，dist 没有实际更新。
> **处理方式**：运行 `rm -rf node_modules/.vite` 清除缓存后重新构建。

---

## 二、依赖管理规范

### 安装新依赖

```bash
# 1. 安装依赖
npm install <package-name>

# 2. 立即构建验证
npm run build

# 3. 确认构建成功后再继续
```

### 检查 package.json

每次开始工作前，检查 `package.json` 是否完整（git diff 或 cat）：

```bash
# 确认所有依赖版本正确
cat package.json | grep -E "react-markdown|katex|@supabase"
```

**关键依赖清单（必须有）：**

| 包名 | 用途 | 检查命令 |
|------|------|---------|
| react | React 核心 | `npm ls react` |
| react-dom | React DOM | `npm ls react-dom` |
| react-markdown | Markdown 渲染 | `npm ls react-markdown` |
| katex | 数学公式 | `npm ls katex` |
| @supabase/supabase-js | 云端存储 | `npm ls @supabase/supabase-js` |

### 依赖安装后必须执行的检查

```bash
# 检查是否有 peer dependency 警告
npm install <package> 2>&1 | grep "warn\|error"

# 如果有 warning，立刻处理，不要忽略
```

---

## 三、KaTeX / 数学公式处理规范

### 当前状态

KaTeX JS 和 CSS 已本地化到 `public/` 目录，字体文件在 `public/fonts/katex/`。  
**但 CDN (jsdelivr.net) 在部分网络环境下 DNS 解析失败，字体 CDN 不稳定。**

### 公式渲染开关

`src/components/MarkdownRenderer.tsx` 文件顶部：

```tsx
// KaTeX 渲染开关（开发时关闭，上线前测试）
const ENABLE_KATEX = true   // true = 渲染公式，false = 显示原文 LaTeX
```

**规则：**
- 上线前必须将 `ENABLE_KATEX` 设为 `true` 并测试
- 如果 KaTeX 渲染导致任何崩溃，立刻设为 `false` 并改用原文显示
- 公式原文显示（LaTeX 文本）是可以接受的降级方案，不要为了渲染牺牲稳定性

### KaTeX 崩溃时的降级流程

```
KaTeX 崩溃（Console 报 ReferenceError / TypeError）
    ↓
立刻修改 MarkdownRenderer.tsx 顶部：
    ENABLE_KATEX = false
    ↓
重新构建 + 部署
    ↓
验证：公式以原文显示，不崩溃
    ↓
事后：解决 KaTeX 稳定性问题后再开启
```

---

## 四、变量声明顺序规范（避免 TDZ 崩溃）

**JavaScript/TypeScript 规则：所有 `const` / `let` 必须在使用前声明。**

```tsx
// ✅ 正确：先声明，后使用
const isChoice = !!q.options                              // 第1行
const choiceCorrect = submitted && isChoice && ...          // 第2行，使用 isChoice

// ❌ 错误：先使用，后声明（TDZ 崩溃）
const choiceCorrect = submitted && isChoice && ...          // 第1行，使用 isChoice
const isChoice = !!q.options                               // 第2行，声明 isChoice
// → Uncaught ReferenceError: Cannot access 'isChoice' before initialization
```

### 审查清单：每次修改 QuestionDo.tsx 或任何含变量的文件时

```bash
# 用 grep 检查变量声明和使用顺序
grep -n "const\|let " src/sections/QuestionDo.tsx | head -20
```

确保每个变量在第一次使用之前已被声明。

---

## 五、部署规范

### 部署前检查清单

```
[ ] npm run build 输出包含 "built in"
[ ] echo $? 输出为 0
[ ] dist/index.html 存在
[ ] dist/assets/ 目录存在
[ ] 如果改了题库数据：ls dist/assets/ | grep Question 确认文件存在
[ ] 相关 JS 文件时间戳在过去 3 分钟内
```

### URL 管理

| 情况 | 要求 |
|------|------|
| 每次部署 | 必须使用新 URL（平台自动生成） |
| 验证通过后 | 将新 URL 告知用户 |
| 旧 URL | 不主动删除（保留回退能力） |
| 紧急回退 | 找到最近一个正常工作的 URL，告知用户切换 |

### 紧急回退流程

```
发现问题（崩溃/白屏/数据丢失）
    ↓
立刻查找最近一个正常工作的 URL（查看聊天记录）
    ↓
将正常 URL 告知用户，作为临时回退
    ↓
在旧代码上修复问题
    ↓
新版本验证通过后，告知用户新 URL
```

---

## 六、题库数据工作流

### 数据文件结构

```
src/data/physics/questions/
    types.ts          ← 接口定义（不改）
    index.ts          ← 汇总导出（不改）
    M01_questions.ts  ← 匀变速直线运动题库
    M04_questions.ts  ← 追及与相遇题库
    ...
```

### 添加/修改题库数据时

```
第1步：在 M0X_questions.ts 中修改数据
        ↓
第2步：检查 index.ts 确保无重复 import（常见错误：M01 重复导入两次）
        ↓
第3步：运行构建 npm run build
        ↓
第4步：检查 dist/assets/QuestionDo-*.js 时间戳
        ↓ 时间戳未更新 → rm -rf node_modules/.vite && npm run build
第5步：部署到新 URL
        ↓
第6步：打开 /physics/exercises/PHY-M0X/do 验证数据
        ↓
第7步：截图确认题目标题、数量、难度标签正确
```

### 常见题库报错

| 错误信息 | 原因 | 解决方案 |
|---------|------|---------|
| "该模型暂无题库" | URL 少了 `/do` | 改为 `/physics/exercises/PHY-M04/do` |
| questionsByModel[modelId] 返回空 | index.ts 无 modelId 条目 | 在 index.ts 的 questionsByModel 对象添加条目 |
| allQuestions.length = 0 | questionsByModel 没有导出该 modelId | 检查 index.ts |
| 构建报错 "already been declared" | index.ts 有重复 import | 修复 index.ts |

---

## 七、日志与回溯规范

### 每次部署后必须记录

每次部署时，在 MEMORY.md 或当天的 memory/YYYY-MM-DD.md 中记录：

```markdown
## 部署记录

| 版本 | URL | 时间 | 改动内容 | 状态 |
|------|-----|------|---------|------|
| v46 | https://xxx | 2026-04-22 16:51 | 修复TDZ bug | ✅ 验证通过 |
| v45 | https://yyy | 2026-04-22 16:30 | 安装react-markdown | ❌ 崩溃（TDZ） |
```

### 出现问题时的记录

```markdown
## 问题记录 2026-04-22

- 16:20 UTC：KaTeX DNS 错误 → 发现是字体 CDN jsdelivr 不通
- 16:25 UTC：发现构建实际失败 → react-markdown 未安装
- 16:35 UTC：TDZ bug → isChoice 在声明前被使用，修复声明顺序
```

---

## 八、检查工具脚本

在 `/workspace/xingyao/` 目录下运行：

```bash
# 1. 快速检查构建状态
npm run build 2>&1 | grep -E "✓|error|EXIT|built in"

# 2. 检查关键依赖
npm ls react-markdown katex @supabase/supabase-js 2>&1 | grep -E "react-markdown|katex|supabase" || echo "缺失依赖！"

# 3. 检查题库数据
node -e "const d=require('./src/data/physics/questions/index.ts'); console.log('M04:', d.questionsByModel['PHY-M04']?.length, '题')"

# 4. 检查变量声明顺序（警告：只适用于简单情况）
grep -n "const.*=.*&&.*isChoice\|isChoice.*?=" src/sections/QuestionDo.tsx
```

---

## 九、何时必须停下来说"我不知道"

以下情况必须停止操作、明确告知用户，不要继续盲目尝试：

1. **连续 3 次相同错误仍然出现** → 停下来，说明现状，请求协助
2. **构建错误相同原因重复出现** → 这不是能靠换方法解决的
3. **不确定是否会影响已有功能** → 先问用户，不是先试
4. **发现原有功能被意外破坏** → 立刻回退到已知正常的版本

---

## 十、今天的事故教训清单

| # | 事故 | 根因 | 防止措施 |
|---|------|------|---------|
| 1 | KaTeX DNS 错误折腾 3 小时 | DNS 问题被误判为代码问题 | 先确认网络可达性再改代码 |
| 2 | 部署多次都是同一份损坏的 dist | 构建失败但被当作成功 | 第3步检查构建退出码和时间戳 |
| 3 | react-markdown 缺失导致构建失败 | 依赖安装后没有验证 | 每次安装后必须构建 |
| 4 | 点击答案崩溃（TDZ） | 代码改动引入了变量顺序错误 | 遵守"声明在使用前"原则 |
| 5 | "该模型暂无题库"看错 URL | URL 规则不清 | 做题页固定是 /do 后缀 |
| 6 | 用户得到 404 URL | URL 中字母 l 和数字 1 混淆 | 使用全数字 URL，避免 l/1 混淆 |

---

*此文件为活动文档，每次事故后更新"教训清单"部分。*
