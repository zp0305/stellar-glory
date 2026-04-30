# 物理知识节点（K01-K56）

## 文件命名

- `K01.ts` ~ `K56.ts`，每个文件对应一个知识节点
- 文件名与节点 ID 一一对应

## 内容模板

每个节点需填写以下字段：

```ts
export const Kxx = {
  id: 'PHY-Kxx',          // 固定前缀 PHY-K + 两位编号
  title: '节点名称',
  module: '所属板块',      // 七大板块之一
  chapter: '所属章节',

  definition: '',          // 一句话定义（≤50字）
  coreFormula: '',         // 核心公式（无则写'无'，LaTeX格式）

  prerequisites: [],       // 前置知识节点 ID（≤3个）
  successors: [],          // 后续节点 ID（≤5个）
  related: [],             // 相关节点 ID（≤3个）

  commonMisconception: '', // 典型误解（无则写'暂无'）
  keywords: [              // 识别关键词
    { word: '', meaning: '' },
  ],
}
```

## 七大板块

1. 运动学
2. 力学
3. 曲线运动与万有引力
4. 能量与动量
5. 电磁学
6. 热学·光学·机械波
7. 近代物理

## 参考规范

- 详见 `SPEC.md` 第十八章"知识节点页规范"
- 详见 `ARCHITECTURE.md` 第九章知识网络架构
