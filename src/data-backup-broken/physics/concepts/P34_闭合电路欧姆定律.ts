// P34 闭合电路欧姆定律
// 内容来源：docs/knowledge/physics/P34_闭合电路欧姆定律.md

import type { ConceptData } from './types'

export const P34: ConceptData = {
  id: 'P34',
  title: '闭合电路欧姆定律',
  subtitle: '$E=U_{外}+U_{内}$——电源的电动势等于内外电压之和，揭示了电源的"非静电力"本质',
  module: '电磁',
  chapter: '电路定律',
  difficulty: 3,

  // ===== 区块1：前置知识检=====
  preCheck: [
  {
    "question": "单| 难度1   题目：关于电动势的说法，正确的是", "options": [
      "电动势是电源两端的电", "电动势是电源提供的电", "电动势是电源把其他能转化为电能的能力", "电动势与电流有关"
    ],
    "answer": "C", "explanation": "电动势是电源特"
  },
  {
    "question": "单| 难度1   题目：电源电动势E=12V，内阻r=1Ω。当外电阻R=5Ω时，电流", "options": [
      "2A", "2.4A",
      "12A", "6A"
    ],
    "answer": "A", "explanation": "$I = E/(R+r) = 12/6 = 2A$"
  },
  {
    "question": "简| 难度1   题目：为什么电池用久了电压会下降？", "options": [],
    "answer": "因为电池内阻增大U = E - Ir$，内阻分压增大", "explanation": "内阻的影"
  }
],

  // ===== 区块2：叙事正=====
  narrative: {
  "context": "电池有电动势，但接上负载后，路端电压会下降为什么？因为电池内部也有电阻（内阻），一部分电压被\"内耗\"了", "confusion": "很多学生认为\"路端电压等于电动势\"实际上： - 只有**断路**时，$U = E$ - 有电流时U = E - Ir$", "experiment": "用实验研究闭合电路： 设电源电动势$E=12V$，内r=2\\Omega$| 外电阻R(Ω) | 电流I(A) | 路端电压U(V) | |:---|:---|:---| | 断路) | 0 | 12 | | 10 | 1 | 10 | | 4 | 2 | 8 | | 2 | 3 | 6 | 观察U = E - Ir$", "concept": "闭合电路**电动*$$E = U_{外} + U_{内}$$ **欧姆定律**$$I = \\frac{E}{R + r}$$ **路端电压**$$U = E - Ir$$", "derivation": "**1. 能量守恒** 电源提供的功= 外电路消+ 内阻消$$EI = I^2R + I^2r$$ **2. 整理** $$E = IR + Ir = U + Ir$$ **3. 欧姆定律** $$I = \\frac{E}{R + r}$$", "transfer": "应用实例**电池**：电动势和内阻决定了输出特性**发电*：能量转化效率**电路分析**：理解压降---"
},

  // ===== 区块3：分层变=====
  variations: {
  "basic": [
    {
      "label": "例题1", "formula": "", "note": "$I = E/(R+r) = 10/10 = 1A$   $U = IR = 9V$I = E/(R+r)$"""""""""""
    },
    {
      "label": "例题2", "formula": "", "note": "$r = E/I_{短路} = 12/6 = 2Ω$｜短路电"""""""""
    }
  ],
  "advanced": [
    {
      "label": "例题1", "formula": "", "note": "(1) $P_{总} = EI = 6 \\times 1 = 6W$   (2) $P_{输} = I^2R = 5W$   (3) $P_{热} = I^2r = 1W$｜能量守"""""""""
    }
  ],
  "challenge": [
    {
      "label": "例题1", "formula": "", "note": "$P = I^2R = (\\frac{E}{R+r})^2 R$，求导令导数   R=r$P_{max} = E^2/4r$｜极值问"""""""""
    },
    {
      "label": "例题2", "formula": "", "note": "$I$减小U$增大P_{输}$先增后减｜动态电"""""""""
    },
    {
      "label": "例题3", "formula": "", "note": "｜用伏安法测电源参数"""""""""""
    }
  ]
},

  // ===== 区块4：公式卡=====
  formulas: [
  {
    "formula": "$I = \\frac{E}{R+r}$", "name": "闭合电路欧姆定律", "usage": "任意"
  },
  {
    "formula": "$E = U_{外}+U_{内}$", "name": "电动势定", "usage": "任意"
  },
  {
    "formula": "$U = E - Ir$", "name": "路端电压", "usage": "任意"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A", "question": "我能熟练分析闭合电路", "description": "可以进入P35电路分析学习"
  },
  {
    "level": "B", "question": "我知道公式但动态分析不", "description": "完成J级变"
  },
  {
    "level": "C", "question": "我把U和E混淆", "description": "重读「概念涌现」部"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M27", "M28"
],
  crossLinks: [
  {
    "subject": "化学", "conceptName": "电池", "relation": "电动势与内阻", "conceptId": ""
  }
],
}
