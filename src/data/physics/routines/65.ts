// PHY-R65
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R65",
  name: "光电效应方程应用",
  model: "PHY-M15",
  thinkingMethod: "",
  level: "B",
  trigger: "光电效应问题，已知入射光频率或波长，求遏止电压或最大初动能",
  path: [
    "Step1：光电方程：E = hν - W₀（遏止电压 U_c = E_max/e）",
    "Step2：极限频率 ν₀ = W₀/h（低于此频率无论光强多大都不发生光电效应）",
    "Step3：最大初动能：E_km = eU_c = hν - hν₀",
    "Step4：光强决定光子数量（影响饱和光电流），频率决定能否发生光电效应",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"光强\\\"当成决定是否发生光电效应的因素（实际是频率）",cognitiveRoot:"",correctPath:"光电效应的三个决定：频率决定能否发生，光强决定光电流大小，遏止电压决定最大初动能"},{wrongThinking:"把遏止电压当成电动势代入电路（遏止电压是使光电流为零的电压）",cognitiveRoot:"",correctPath:"光电效应的三个决定：频率决定能否发生，光强决定光电流大小，遏止电压决定最大初动能"}],
  essence: "光电效应：光子能量 = 逸出功 + 动能。频率不够，能量不足，再强光也没用。",
}

export default entry
