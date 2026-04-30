export interface AnalysisParadigm {
  id: string;
  name: string;
  model: string;
  thinkingMethod: string;
  level: "B" | "J" | "T";
  trigger: string;
  path: string[];
  variationWarning: string;
  errorMap: {
    wrongThinking: string;
    cognitiveRoot: string;
    correctPath: string;
  }[];
  essence: string;
}

export const allParadigms: AnalysisParadigm[] = [
  {
    id: "PHY-R01",
    name: "匀变速公式三步选择",
    model: "PHY-M01",
    thinkingMethod: "",
    level: "B",
    trigger: "看到匀变速直线运动题，求 v/v₀/a/t/x 任一未知量",
    path: [
      "Step1：列出已知量（v₀、v、a、t、x）",
      "Step2：判断题目给的是速度还是位移",
      "Step3：选公式：给速度→①③；给位移→③；仅给加速度和时间→①",
    ],
    variationWarning: "",
    errorMap: [{
      wrongThinking: "",
      cognitiveRoot: "",
      correctPath: "核心是识别已知量类型，按信号触发选择公式",
    }],
    essence: "公式是工具，题目给的是信号",
  },
];

export default allParadigms;
