export interface Strategy {
  id: string;
  name: string;
  status: 'published' | 'draft' | 'coming_soon';
}

export type StrategyId = string;

export const allStrategies: Strategy[] = [
  { id: 'ENG-F01', name: '句型快速识别范式', status: 'coming_soon' },
  { id: 'ENG-F02', name: '句子成分分析范式', status: 'coming_soon' },
  { id: 'ENG-F03', name: '并列结构平行范式', status: 'coming_soon' },
  { id: 'ENG-F04', name: '复合句层次分析范式', status: 'coming_soon' },
  { id: 'ENG-F05', name: '名词性从句引导词选择范式', status: 'coming_soon' },
  { id: 'ENG-F06', name: '同位语从句识别范式', status: 'coming_soon' },
  { id: 'ENG-F07', name: '定语从句关系词选择范式', status: 'coming_soon' },
  { id: 'ENG-F08', name: '非限制性定语从句分析范式', status: 'coming_soon' },
  { id: 'ENG-F09', name: '状语从句逻辑关系判断范式', status: 'coming_soon' },
  { id: 'ENG-F10', name: '从句嵌套递归分析范式', status: 'coming_soon' },
  { id: 'ENG-F11', name: '非谓语动词形式选择范式', status: 'coming_soon' },
  { id: 'ENG-F12', name: '不定式vs动名词辨析范式', status: 'coming_soon' },
  { id: 'ENG-F13', name: '分词用法分析范式', status: 'coming_soon' },
  { id: 'ENG-F14', name: '独立主格结构识别范式', status: 'coming_soon' },
  { id: 'ENG-F15', name: '倒装句还原范式', status: 'coming_soon' },
  { id: 'ENG-F16', name: '时态一致性判断范式', status: 'coming_soon' },
  { id: 'ENG-F17', name: '完成时时间轴定位范式', status: 'coming_soon' },
  { id: 'ENG-F18', name: '将来时表达选择范式', status: 'coming_soon' },
  { id: 'ENG-F19', name: '被动语态识别与转换范式', status: 'coming_soon' },
  { id: 'ENG-F20', name: '词根词缀拆解范式', status: 'coming_soon' },
  { id: 'ENG-F21', name: '一词多义语义链追溯范式', status: 'coming_soon' },
  { id: 'ENG-F22', name: '熟词生义语境推断范式', status: 'coming_soon' },
  { id: 'ENG-F23', name: '短语动词语义推断范式', status: 'coming_soon' },
  { id: 'ENG-F24', name: '固定搭配识别范式', status: 'coming_soon' },
  { id: 'ENG-F25', name: '近义词辨析范式', status: 'coming_soon' },
  { id: 'ENG-F26', name: '语篇衔接链追踪范式', status: 'coming_soon' },
  { id: 'ENG-F27', name: '记叙文阅读范式', status: 'coming_soon' },
  { id: 'ENG-F28', name: '说明文阅读范式', status: 'coming_soon' },
  { id: 'ENG-F29', name: '议论文阅读范式', status: 'coming_soon' },
  { id: 'ENG-F30', name: '主旨概括范式', status: 'coming_soon' },
  { id: 'ENG-F31', name: '细节定位范式', status: 'coming_soon' },
  { id: 'ENG-F32', name: '推理判断范式', status: 'coming_soon' },
  { id: 'ENG-F33', name: '词义猜测范式', status: 'coming_soon' },
  { id: 'ENG-F34', name: '长难句分析范式', status: 'coming_soon' },
  { id: 'ENG-F35', name: '书信写作范式', status: 'coming_soon' },
  { id: 'ENG-F36', name: '演讲稿写作范式', status: 'coming_soon' },
  { id: 'ENG-F37', name: '段落展开范式', status: 'coming_soon' },
  { id: 'ENG-F38', name: '衔接手段运用范式', status: 'coming_soon' },
  { id: 'ENG-F39', name: '读后续写情节构建范式', status: 'coming_soon' },
  { id: 'ENG-F40', name: '读后续写语言润色范式', status: 'coming_soon' },
  { id: 'ENG-F41', name: '概要写作信息提取范式', status: 'coming_soon' },
  { id: 'ENG-F42', name: '概要写作语言浓缩范式', status: 'coming_soon' },
  { id: 'ENG-F43', name: '短对话听力预判范式', status: 'coming_soon' },
  { id: 'ENG-F44', name: '语音解码范式', status: 'coming_soon' },
  { id: 'ENG-F45', name: '长对话听力笔记范式', status: 'coming_soon' },
  { id: 'ENG-F46', name: '口语话题展开范式', status: 'coming_soon' },
  { id: 'ENG-F47', name: '跨文化交际分析范式', status: 'coming_soon' },
  { id: 'ENG-F48', name: '语法填空解题范式', status: 'coming_soon' },
  { id: 'ENG-F49', name: '七选五解题范式', status: 'coming_soon' },
  { id: 'ENG-F50', name: '语法改错范式', status: 'coming_soon' },
  { id: 'ENG-F51', name: '书写规范范式', status: 'coming_soon' },
  { id: 'ENG-F52', name: '翻译技巧范式', status: 'coming_soon' },
  { id: 'ENG-F53', name: '语用推理范式', status: 'coming_soon' },
  { id: 'ENG-F54', name: '应用文高分表达范式', status: 'coming_soon' },
  { id: 'ENG-F55', name: '读后续写情感升华范式', status: 'coming_soon' },
  { id: 'ENG-F56', name: '听力数字信息捕捉范式', status: 'coming_soon' },
  { id: 'ENG-F57', name: '扩展范式57', status: 'coming_soon' },
  { id: 'ENG-F58', name: '扩展范式58', status: 'coming_soon' },
  { id: 'ENG-F59', name: '扩展范式59', status: 'coming_soon' },
];

export const strategyDataMap = new Map<string, Strategy>(
  allStrategies.map((s) => [s.id, s])
);

export function getStrategyById(id: string): Strategy | undefined {
  return strategyDataMap.get(id);
}