import { M01 } from './M01_匀变速直线运动'
import { M02 } from './M02_自由落体与竖直上抛'
import { M03 } from './M03_竖直上抛与追及相遇'
import { M04 } from './M04_追及与相遇'
import { M05 } from './M05_连接体模型'
import { M06 } from './M06_传送带模型'
import { M07 } from './M07_弹簧模型'
import { M08 } from './M08_板块模型'
import { M09 } from './M09_传送带模型'
import { M10 } from './M10_曲线运动基础'
import { M11 } from './M11_平抛运动'
import { M12 } from './M12_圆周运动'
import { M13 } from './M13_天体运动'
import { M14 } from './M14_功和功率'
import { M15 } from './M15_动能定理'
import { M16 } from './M16_机械能守恒'
import { M17 } from './M17_动量定理'
import { M18 } from './M18_动量守恒'
import { M19 } from './M19_碰撞模型'
import { M20 } from './M20_电场强度'
import { M21 } from './M21_电势与电势能'
import { M22 } from './M22_电容器'
import { M23 } from './M23_欧姆定律与电路'
import { M24 } from './M24_磁场与安培力'
import { M25 } from './M25_洛伦兹力'
import { M26 } from './M26_电磁感应'
import { M27 } from './M27_交变电流'
import { M28 } from './M28_理想变压器'
import { M29 } from './M29_分子动理论'
import { M30 } from './M30_气体状态方程'
import { M31 } from './M31_热力学第一定律'
import { M32 } from './M32_热力学第二定律'
import { M33 } from './M33_光的折射与全反射'
import { M34 } from './M34_透镜成像规律'
import { M35 } from './M35_干涉与衍射'
import { M36 } from './M36_机械振动'
import { M37 } from './M37_机械波'
import { M38 } from './M38_波的干涉与衍射'
import { M39 } from './M39_光电效应与波粒二象性'
import { M40 } from './M40_原子结构'
import { M41 } from './M41_核反应与核能'
import { M42 } from './M42_相对论基础'

export {
  M01, M02, M03, M04, M05, M06, M07, M08, M09, M10,
  M11, M12, M13, M14, M15, M16, M17, M18, M19, M20,
  M21, M22, M23, M24, M25, M26, M27, M28, M29, M30,
  M31, M32, M33, M34, M35, M36, M37, M38, M39, M40,
  M41, M42,
}

export const modelDataMap: Record<string, any> = {
  'PHY-M01': M01,
  'PHY-M02': M02,
  'PHY-M03': M03,
  'PHY-M04': M04,
  'PHY-M05': M05,
  'PHY-M06': M06,
  'PHY-M07': M07,
  'PHY-M08': M08,
  'PHY-M09': M09,
  'PHY-M10': M10,
  'PHY-M11': M11,
  'PHY-M12': M12,
  'PHY-M13': M13,
  'PHY-M14': M14,
  'PHY-M15': M15,
  'PHY-M16': M16,
  'PHY-M17': M17,
  'PHY-M18': M18,
  'PHY-M19': M19,
  'PHY-M20': M20,
  'PHY-M21': M21,
  'PHY-M22': M22,
  'PHY-M23': M23,
  'PHY-M24': M24,
  'PHY-M25': M25,
  'PHY-M26': M26,
  'PHY-M27': M27,
  'PHY-M28': M28,
  'PHY-M29': M29,
  'PHY-M30': M30,
  'PHY-M31': M31,
  'PHY-M32': M32,
  'PHY-M33': M33,
  'PHY-M34': M34,
  'PHY-M35': M35,
  'PHY-M36': M36,
  'PHY-M37': M37,
  'PHY-M38': M38,
  'PHY-M39': M39,
  'PHY-M40': M40,
  'PHY-M41': M41,
  'PHY-M42': M42,
}

export const ALL_MODEL_IDS = Object.keys(modelDataMap)
