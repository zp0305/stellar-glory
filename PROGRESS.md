# 星耀项目 — 网站搭建总进度表

> 更新日期：2026-04-26
> 数据来源：src/App.tsx + Navigation.tsx + sections/ + data/ + docs/

---

## 一、总体进度概览

| 状态 | 数量 | 占比 |
|:---|:---:|:---:|
| ✅ 已完整上线 | 20个页面 | 38% |
| ⚠️ 部分实现（框架有，内容待填充） | 22个页面 | 42% |
| ❌ 完全未实现 | 11个页面 | 21% |
| **合计** | **53个页面/路由** | |

---

## 二、路由与页面实现详情

### 2.1 首页模块

| 路由 | 组件 | 状态 | 对应 docs/ |
|:---|:---|:---:|:---|
| `/` | SiteHome.tsx | ✅ | — |

### 2.2 物理学科（最完整）

| 路由 | 组件 | docs/源文件 | 状态 |
|:---|:---|:---|:---:|
| `/physics` | SubjectGuidePage.tsx | subjects/物理学科指南.md | ✅ |
| `/physics/guide` | PhysicsGuidePage.tsx | subjects/物理学科指南.md | ✅ |
| `/physics/graph` | CognitionGraphPage.tsx | architecture/规格书 | ✅ |
| `/physics/models` | ModelList.tsx | subjects/物理模型内容模板.md | ✅ |
| `/physics/models/:modelId` | ModelPage.tsx | subjects/物理模型内容模板.md | ✅ |
| `/physics/concepts` | ConceptList.tsx | subjects/物理学科指南.md | ✅ |
| `/physics/concepts/:conceptId` | ConceptPage.tsx | subjects/物理学科指南.md | ✅ |
| `/physics/strategies` | StrategyPages.tsx | — | ✅ |
| `/physics/strategies/:strategyId` | StrategyPages.tsx | — | ✅ |
| `/physics/vision` | VisionPages.tsx | — | ⚠️ 框架+1条故事，其余"内容整理中" |
| `/physics/vision/:storyId` | VisionPages.tsx | — | ⚠️ 同上 |
| `/physics/exercises` | QuestionBankList.tsx | architecture/题库架构_v1.2 | ⚠️ 框架+部分题目 |
| `/physics/exercises/:modelId` | QuestionBankDetail.tsx | architecture/题库架构_v1.2 | ⚠️ 部分模型有题 |
| `/physics/exercises/:modelId/do` | QuestionDo.tsx | architecture/题库架构_v1.2 | ⚠️ 交互框架 |
| `/physics/wrong` | LearningPages.tsx | — | ✅ |
| `/physics/favorites` | FavoritesPage.tsx | — | ✅ |
| `/physics/senior` | ComingSoon | zones/高考专项内容规划.md | ❌ 占位 |
| `/physics/foundation` | ComingSoon | zones/强基计划专题内容规划.md | ❌ 占位 |

**物理数据规模**：26个核心模型（physicsData.ts）· 42个模型详解（M01-M42）· 56个知识节点（P01-P56）· 90个解题套路（R01-R90）· 10类物理视界

### 2.3 其他学科（指南页）

| 路由 | 组件 | docs/源文件 | 状态 |
|:---|:---|:---|:---:|
| `/chemistry` | ChemistryGuidePage.tsx | subjects/化学学科指南.md (21.98KB) | ✅ |
| `/math` | MathGuidePage.tsx | subjects/数学学科指南.md (18.31KB) | ✅ |
| `/biology` | BiologyGuidePage.tsx | subjects/生物学科指南.md (27.32KB) | ✅ |
| `/chinese` | ChineseGuidePage.tsx | subjects/语文学科指南.md (17.76KB) | ✅ |
| `/english` | EnglishGuidePage.tsx | subjects/英语学科指南.md (18.7KB) | ✅ |
| `/chemistry/senior` | ComingSoon | zones/高考专项内容规划.md | ❌ |
| `/chemistry/foundation` | ComingSoon | zones/强基计划专题内容规划.md | ❌ |

### 2.4 高考专区

| 路由 | 组件 | docs/源文件 | 状态 |
|:---|:---|:---|:---:|
| `/gaokao` | GaokaoZoneHome.tsx | zones/高考专项内容规划.md (20.85KB) | ⚠️ 框架+部分政策 |
| `/gaokao/policy/:id` | GaokaoZoneHome.tsx | — | ⚠️ gaokao/policy.ts (10.78KB) |
| `/gaokao/admission/:id` | GaokaoZoneHome.tsx | — | ⚠️ gaokao/admission.ts (10.33KB) |
| `/gaokao/path` | GaokaoZoneHome.tsx | — | ⚠️ 仅时间线 |

### 2.5 强基计划专区

| 路由 | 组件 | docs/源文件 | 状态 |
|:---|:---|:---|:---:|
| `/foundation` | FoundationZoneHome.tsx | zones/强基计划专题内容规划.md (27.22KB) | ⚠️ 框架+部分政策 |
| `/foundation/policy/:id` | FoundationPolicyDetail.tsx | — | ⚠️ foundation/policy.ts (14.51KB) |

### 2.6 竞赛专区

| 路由 | 组件 | docs/源文件 | 状态 |
|:---|:---|:---|:---:|
| `/competition` | CompetitionPages.tsx | zones/五大学科竞赛内容规划.md (46.73KB) | ⚠️ 框架+物理/数学/化学/生物/计算机示例 |
| `/competition/physics` | CompetitionPages.tsx | — | ⚠️ physics.ts (22.93KB) 较完整 |
| `/competition/physics/guide` | CompetitionPages.tsx | — | ⚠️ CP01-CP08 政策指南框架 |
| `/competition/physics/outline` | CompetitionPages.tsx | — | ⚠️ 11大板块+28知识点(CK01-CK28) |
| `/competition/physics/models` | CompetitionPages.tsx | — | ⚠️ 15个核心模型 |
| `/competition/physics/papers` | CompetitionPages.tsx | — | ⚠️ 真题框架 |
| `/competition/physics/experiment` | CompetitionPages.tsx | — | ⚠️ 实验专题 |
| `/competition/physics/path` | CompetitionPages.tsx | — | ⚠️ 备考路径 |
| `/competition/math` | CompetitionPages.tsx | — | ⚠️ math.ts (12.09KB) |
| `/competition/chemistry` | CompetitionPages.tsx | — | ⚠️ chemistry.ts (11.98KB) |
| `/competition/biology` | CompetitionPages.tsx | — | ⚠️ biology.ts (12.64KB) |
| `/competition/cs` | CompetitionPages.tsx | — | ⚠️ cs.ts (12.3KB) |

### 2.7 初高中衔接专区（2026-04-25新增）

| 路由 | 组件 | docs/源文件 | 状态 |
|:---|:---|:---|:---:|
| `/transition` | TransitionZoneHome.tsx | zones/初高中衔接专题内容规划.md (19.16KB) | ✅ 4 Tab 完整 |

### 2.8 学习工具

| 路由 | 组件 | docs/源文件 | 状态 |
|:---|:---|:---|:---:|
| `/diagnosis` | DiagnosisPage.tsx | tools/学习诊断与评估.md (21.62KB) | ⚠️ 交互框架+示例题 |
| `/planner` | PlannerPage.tsx | tools/学习目标与三年规划.md (17.38KB) | ⚠️ 框架+3条路径 |
| `/planner/:pathId` | PathDetailPage.tsx | tools/学习路径内容规划.md (21.63KB) | ⚠️ 框架 |
| `/methods` | MethodsPage.tsx | tools/学习方法体系.md (21.87KB) | ⚠️ 5法+展开详情 |
| `/learning` | MyLearning.tsx | — | ✅ Mock数据 |

---

## 三、docs/ 内容 vs 网站实现对照

### 3.1 subjects/ ✅ 6科指南全部完成

7个文件全部已转化为网站页面（六科指南页 + 物理模型模板）。

### 3.2 zones/ ⚠️ 部分完成

| docs文件 | 对应页面 | 状态 |
|:---|:---|:---:|
| 高考专项内容规划.md | /gaokao 及其子路由 | ⚠️ 框架+部分政策数据 |
| 强基计划专题内容规划.md | /foundation 及其子路由 | ⚠️ 框架+部分政策数据 |
| 五大学科竞赛内容规划.md | /competition 及其子路由 | ⚠️ 框架+物理/数学/化学/生物/计算机示例 |
| 初高中衔接专题内容规划.md | /transition | ✅ 2026-04-25 完成 |

### 3.3 tools/ ⚠️ 部分完成

| docs文件 | 对应页面 | 状态 |
|:---|:---|:---:|
| 学习诊断与评估.md | /diagnosis | ⚠️ 交互框架 |
| 学习方法体系.md | /methods | ⚠️ 5法详情 |
| 学习目标与三年规划.md | /planner | ⚠️ 3条路径框架 |
| 学习路径内容规划.md | /planner/:pathId | ⚠️ 路径详情框架 |

### 3.4 cross-cutting/ ❌ 完全未实现

| docs文件 | 大小 | 状态 |
|:---|:---:|:---:|
| 跨学科知识网络.md | 46.24KB | ❌ |
| 创新思维与压轴题突破.md | 29.94KB | ❌ |
| 知识向能力转化.md | 32.22KB | ❌ |

### 3.5 architecture/ ✅ 内部参考

7个文件为开发规范文档，不直接面向用户。

### 3.6 references/ ❌ 未接入

| docs文件 | 大小 | 状态 |
|:---|:---:|:---:|
| reference-case-1-brilliant.md | 20.88KB | ❌ 参考研究 |
| reference-case-2-khan-academy.md | 22.32KB | ❌ 参考研究 |
| reference-case-3-studynotion.md | 24.05KB | ❌ 参考研究 |

---

## 四、数据文件规模

```
src/data/
├── physics/
│   ├── physicsData.ts        26个核心模型+认知图谱
│   ├── physicsModels.ts     模型元数据
│   ├── strategies.ts        90个解题套路(R01-R90)
│   ├── visionStories.ts     物理视界故事
│   ├── concepts/index.ts    56个知识节点
│   ├── concepts/P01_*.ts   P01完整内容，其余模板
│   ├── models/M01-M42.ts    42个模型详解（部分详细）
│   └── questions/*.ts       部分题目
├── competition/
│   ├── physics.ts           22.93KB（含CK01-CK28）
│   ├── math.ts              12.09KB
│   ├── chemistry.ts         11.98KB
│   ├── biology.ts           12.64KB
│   └── cs.ts               12.30KB
├── gaokao/
│   ├── policy.ts            10.78KB
│   └── admission.ts         10.33KB
├── foundation/
│   └── policy.ts            14.51KB
├── transition/
│   └── policy.ts            15.02KB（2026-04-25）
└── tools/
    ├── diagnosis.ts         8.66KB
    ├── methods.ts           13.92KB
    ├── paths.ts             15.80KB
    └── planner.ts           6.42KB
```

---

## 五、优先级建议（待内容方决策）

### P0 — 内容方已交付，应尽快上线
1. **强基计划专区**（/foundation）— docs/zones/强基计划专题内容规划.md 已有完整规划，近10万字
2. **高考专项内容**（各科 /xxx/senior）— docs/zones/高考专项内容规划.md

### P1 — 高价值，可分批做
3. **跨学科知识网络** — docs/cross-cutting/跨学科知识网络.md（46KB，最大）
4. **创新思维与压轴题突破** — docs/cross-cutting/创新思维与压轴题突破.md（30KB）
5. **知识向能力转化** — docs/cross-cutting/知识向能力转化.md（32KB）
6. **学科竞赛内容扩充** — 五科数据文件中大部分 content='' 待填充

### P2 — 内容量大，可延后
7. **物理视界内容** — 十大分类框架已有，故事详情待逐条填充
8. **物理题库扩充** — 架构v1.2已有，大量题目待录入
9. **初高中衔接内容深化** — /transition 框架完成，六科衔接点内容细化
10. **学习路径详情** — /planner/:pathId 框架完成，三条路径详细内容待填充

### P3 — 长期建设
11. **五科指南页深化** — 化学/数学/生物/语文/英语 仅有指南页，其他模块待扩展
12. **参考案例研究** — references/ 3个竞品参考（不紧急）
