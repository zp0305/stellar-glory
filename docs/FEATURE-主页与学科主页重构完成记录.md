# FEATURE-主页与学科主页重构完成记录

## 一、任务概述

按照任务书要求，完成了网站主页（SiteHome）和六科首页的显示逻辑重构，实现信息架构调整、学科首页统一、数据动态化。

## 二、修改的文件

### 2.1 src/sections/SiteHome.tsx

**主要改动：**
- 删除硬编码的 `subjectDescriptions` 和 `subjectModuleCounts` 映射表
- 改为从 `getSubjectData(subject.id)` 动态读取：
  - 概念数：`getAllConceptIds().length`
  - 模型数：`getAllModelIds().length`
  - 范式数：`getParadigmList().length`
  - 题目数：`getAllQuestions().length`
- 六学科卡片显示格式更新为：`X个知识节点 · Y个解题模型 · Z条分析范式`
- 删除了物理"200+题"虚假标签和固定100%进度条
- "特色模块"区改造为"学习工具"区（认知图谱、智能诊断、学习规划、学科竞赛、衔接规划、错题本）
- 升学专项区降级到页面底部，添加"即将上线"标识
- 顶栏导航补全六科入口（物理、化学、数学、生物、语文、英语）

### 2.2 src/sections/SubjectGuidePage.tsx

**主要改动：**
- 创建通用的 `SubjectModuleGrid` 组件，替换原来的 `PhysicsModuleGrid` 和 `ChemistryModuleGrid`
- 组件从 registry 动态读取统计数据作为模块角标
- 支持物理专属模块（思维方法、物理视界、学习报告）
- 支持条件性显示认知图谱（仅物理有数据时显示）
- 保留原有的 `PhysicsModuleGrid` 和 `ChemistryModuleGrid` 作为向后兼容的包装

### 2.3 src/App.tsx

**主要改动：**
- 导入 `SubjectModuleGrid` 和 `SUBJECTS`
- 修改化学、数学、生物、语文、英语的首页路由为 `SubjectModuleGrid`
- 添加各学科的 `/guide` 路由指向原 GuidePage 长文页

## 三、验证结果

- ✅ TypeScript 编译：0错误
- ✅ 构建成功
- ✅ 所有六学科首页统一为模块导航网格
- ✅ 数据动态化，无硬编码

## 四、各学科实际数据显示

| 学科 | 知识节点 | 解题模型 | 分析范式 | 配套题目 |
|:---|:---:|:---:|:---:|:---:|
| 物理 | 56 | 43 | 90 | 2 |
| 化学 | 57 | 48 | 60 | 0 |
| 数学 | 75 | 58 | 52 | 0 |
| 生物 | 52 | 48 | 48 | 0 |
| 英语 | 38 | 52 | 52 | 0 |
| 语文 | 43 | 29 | 29 | 0 |

## 五、未完成/遗留事项

- 英语、语文的类型导出警告（不影响功能）

## 六、与项目经理对齐状态

- 状态：已完成
- 待审核：是

---

**创建时间**：2026-04-29  
**文件版本**：v1.0