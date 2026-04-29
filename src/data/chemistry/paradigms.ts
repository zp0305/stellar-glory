// 分析范式库（化学）
// 编号规则: CHE-R01 ~ CHE-R70
// 对应知识网络第五章"分析范式"，7个思维方法维度
// 当前为空框架，待内容AI逐步填充

export interface AnalysisParadigm {
  id: string;              // 范式编号，如 "CHE-R01"
  name: string;            // 范式名称
  model: string;           // 所属模型编号
  thinkingMethod: string;  // 核心思维方法（7个维度之一）
  level: "B" | "J" | "T";  // B=知识掌握, J=思维运用, T=迁移创新
  trigger: string;         // 触发信号
  path: string[];          // 思考路径（3-7步）
  variationWarning: string; // 变式预警
  errorMap: {
    wrongThinking: string;
    cognitiveRoot: string;
    correctPath: string;
  }[];
  essence: string;         // 本质回溯
}

// 空占位，待内容AI填充
export const allParadigms: AnalysisParadigm[] = []
