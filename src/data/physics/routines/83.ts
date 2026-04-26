// PHY-R83
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R83",
  name: "杨氏双缝干涉实验分析",
  model: "PHY-M14",
  thinkingMethod: "",
  level: "J",
  trigger: "双缝干涉实验问题，条纹位置、间距或条纹变化",
  path: [
    "Step1：明纹条件：ΔL = kλ → x = kλD/d",
    "Step2：暗纹条件：ΔL = (2k+1)λ/2 → x = (2k+1)λD/(2d)",
    "Step3：条纹间距 Δx = λD/d，D 是双缝到屏距离，d 是双缝间距",
    "Step4：变化分析：λ↑→Δx↑；d↑→Δx↓；D↑→Δx↑",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"第 k 级明纹\\\"的 k 从 0 开始还是从 1 开始搞混（k=0 是中央明纹）",cognitiveRoot:"",correctPath:"双缝干涉的零级明纹（k=0）在几何中心，其他级次对称分布"},{wrongThinking:"在计算\\\"第 k 级\\\"时用了错误的 ΔL 公式",cognitiveRoot:"",correctPath:"双缝干涉的零级明纹（k=0）在几何中心，其他级次对称分布"}],
  essence: "Δx = λD/d，λ 越大、缝越近、屏越远，条纹越疏。",
}

export default entry
