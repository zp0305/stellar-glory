// PHY-R64
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R64",
  name: "光的衍射与干涉综合",
  model: "PHY-M14",
  thinkingMethod: "",
  level: "J",
  trigger: "判断光通过不同障碍物后的图样（单缝/圆孔/光栅）",
  path: [
    "Step1：明确衍射类型：单缝 → 中央明纹最亮，两侧对称变暗；圆孔 → 艾里斑",
    "Step2：单缝中央明纹宽度：Δx = 2λf/a；a 越小，衍射越明显",
    "Step3：光栅：主极大条件 d·sinθ = kλ，缺级条件 d'=d/k' 时该级次消失",
    "Step4：干涉和衍射同时存在时，先分别处理，再叠加效果",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"光栅缺级\\\"当成\\\"光消失了\\\"（实际是某些级次因单缝衍射最小值恰好落在该位置而不可见）",cognitiveRoot:"",correctPath:"衍射和干涉的区别：干涉是有限多束光叠加，衍射是同一束光通过无限多子源"},{wrongThinking:"混淆光栅干涉和双缝干涉的公式（光栅用 d = a+b，双缝用 d = 两缝间距）",cognitiveRoot:"",correctPath:"衍射和干涉的区别：干涉是有限多束光叠加，衍射是同一束光通过无限多子源"}],
  essence: "干涉条纹清晰，光栅分辨力强；衍射决定单缝/圆孔的通光能力。",
}

export default entry
