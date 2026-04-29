export interface Strategy {
  id: string;
  name: string;
  status: 'published' | 'draft' | 'coming_soon';
}

export type StrategyId = string;

export const allStrategies: Strategy[] = [
  { id: 'CHN-F01', name: '人物形象多维分析法', status: 'coming_soon' },
  { id: 'CHN-F02', name: '叙事结构追踪法', status: 'coming_soon' },
  { id: 'CHN-F03', name: '环境描写分析法', status: 'coming_soon' },
  { id: 'CHN-F04', name: '主题多层提炼法', status: 'coming_soon' },
  { id: 'CHN-F05', name: '散文线索追踪法', status: 'coming_soon' },
  { id: 'CHN-F06', name: '散文情感分析法', status: 'coming_soon' },
  { id: 'CHN-F07', name: '论证链条追踪法', status: 'coming_soon' },
  { id: 'CHN-F08', name: '论证方法辨识法', status: 'coming_soon' },
  { id: 'CHN-F09', name: '信息角度比较法', status: 'coming_soon' },
  { id: 'CHN-F10', name: '图表信息提取法', status: 'coming_soon' },
  { id: 'CHN-F11', name: '实词词义推断法', status: 'coming_soon' },
  { id: 'CHN-F12', name: '虚词用法分析法', status: 'coming_soon' },
  { id: 'CHN-F13', name: '文言文翻译法', status: 'coming_soon' },
  { id: 'CHN-F14', name: '文言内容概括法', status: 'coming_soon' },
  { id: 'CHN-F15', name: '文言文人物事件分析法', status: 'coming_soon' },
  { id: 'CHN-F16', name: '文言诗文比较鉴赏法', status: 'coming_soon' },
  { id: 'CHN-F17', name: '意象意境情感分析法', status: 'coming_soon' },
  { id: 'CHN-F18', name: '炼字鉴赏法', status: 'coming_soon' },
  { id: 'CHN-F19', name: '诗歌手法辨识法', status: 'coming_soon' },
  { id: 'CHN-F20', name: '诗歌表现手法效果评价法', status: 'coming_soon' },
  { id: 'CHN-F21', name: '诗文比较鉴赏法', status: 'coming_soon' },
  { id: 'CHN-F22', name: '字词成语语境辨析法', status: 'coming_soon' },
  { id: 'CHN-F23', name: '病句六类型诊断法', status: 'coming_soon' },
  { id: 'CHN-F24', name: '句子连贯分析法', status: 'coming_soon' },
  { id: 'CHN-F25', name: '语言表达得体判断法', status: 'coming_soon' },
  { id: 'CHN-F26', name: '仿写扩展压缩法', status: 'coming_soon' },
  { id: 'CHN-F27', name: '审题立意多维分析法', status: 'coming_soon' },
  { id: 'CHN-F28', name: '分论点结构设计法', status: 'coming_soon' },
  { id: 'CHN-F29', name: '论据选取加工法', status: 'coming_soon' },
  { id: 'CHN-F30', name: '论证方法选择法', status: 'coming_soon' },
  { id: 'CHN-F31', name: '论证逻辑链条构建法', status: 'coming_soon' },
  { id: 'CHN-F32', name: '辩证论证法', status: 'coming_soon' },
  { id: 'CHN-F33', name: '记叙文选材构思法', status: 'coming_soon' },
  { id: 'CHN-F34', name: '散文形散神聚写作法', status: 'coming_soon' },
  { id: 'CHN-F35', name: '应用文格式规范法', status: 'coming_soon' },
  { id: 'CHN-F36', name: '材料多维分析法', status: 'coming_soon' },
  { id: 'CHN-F37', name: '作文思辨写作法', status: 'coming_soon' },
  { id: 'CHN-F38', name: '现代诗歌阅读分析法', status: 'coming_soon' },
  { id: 'CHN-F39', name: '文化典故还原法', status: 'coming_soon' },
  { id: 'CHN-F40', name: '文学史脉络梳理法', status: 'coming_soon' },
  { id: 'CHN-F41', name: '文言基础积累法', status: 'coming_soon' },
  { id: 'CHN-F42', name: '论证逻辑评估法', status: 'coming_soon' },
  { id: 'CHN-F43', name: '论据论点一致性检查法', status: 'coming_soon' },
  { id: 'CHN-F44', name: '语言表达应用综合法', status: 'coming_soon' },
  { id: 'CHN-F45', name: '非连续文本跨材料整合法', status: 'coming_soon' },
  { id: 'CHN-F46', name: '扩展范式46', status: 'coming_soon' },
  { id: 'CHN-F47', name: '扩展范式47', status: 'coming_soon' },
  { id: 'CHN-F48', name: '扩展范式48', status: 'coming_soon' },
  { id: 'CHN-F49', name: '扩展范式49', status: 'coming_soon' },
];

export const strategyDataMap = new Map<string, Strategy>(
  allStrategies.map((s) => [s.id, s])
);

export function getStrategyById(id: string): Strategy | undefined {
  return strategyDataMap.get(id);
}