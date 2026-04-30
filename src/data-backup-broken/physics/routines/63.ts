// PHY-R63
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R63",
  name: "光的干涉条纹计算",
  model: "PHY-M14",
  thinkingMethod: "",
  level: "B",
  trigger: "双缝干涉或薄膜干涉，求条纹间距或某处是明纹还是暗",
  path: [
    "Step1：双缝干涉：Δx = λD/d，明纹条ΔL = kλ，暗纹条ΔL = (2k+1)λ/2", "Step2：其ΔL = |r- r₁| (d/D)·x（近轴近似）",
    "Step3：薄膜干涉：光程δ = 2nd·cosθ ± λ/2（半波损失判断）", "Step4：注意半波损失：光从光疏到光密反射时相位突变，加 λ/2",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"在薄膜干涉中漏加半波损失（光从空气到薄膜算一次，从薄膜到空气不算",cognitiveRoot:",",correctPath:"干涉的核心是光程ΔL，条纹类型由 ΔL/λ 的整半整数关系决"},{wrongThinking:"把\\\"条纹间距\\\"和\\\"光程差\\\"公式记混",cognitiveRoot:",",correctPath:"干涉的核心是光程ΔL，条纹类型由 ΔL/λ 的整半整数关系决"},]"",
  essence: "干涉是光程差的体现：ΔL = kλ 明纹；ΔL = (2k+1)λ/2 暗纹",
}

export default entry
