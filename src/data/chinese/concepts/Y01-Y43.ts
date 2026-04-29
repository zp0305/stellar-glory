import { ConceptData } from './types';

export const Y01_小说三要素: ConceptData = {
  id: 'CHN-Y01',
  name: '小说三要素',
  chapter: '现代文阅读·文学类文本',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: [],
  relatedModels: ['CHN-C01', 'CHN-C02', 'CHN-C03'],
  relatedStrategies: ['CHN-F01', 'CHN-F02', 'CHN-F03'],
  status: 'coming_soon',
};

export const Y02_人物形象分析: ConceptData = {
  id: 'CHN-Y02',
  name: '人物形象分析',
  chapter: '现代文阅读·文学类文本',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y01'],
  relatedModels: ['CHN-C01', 'CHN-C02', 'CHN-C03'],
  relatedStrategies: ['CHN-F01'],
  status: 'coming_soon',
};

export const Y03_叙事视角与技巧: ConceptData = {
  id: 'CHN-Y03',
  name: '叙事视角与技巧',
  chapter: '现代文阅读·文学类文本',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y01'],
  relatedModels: ['CHN-C01'],
  relatedStrategies: ['CHN-F02'],
  status: 'coming_soon',
};

export const Y04_情节结构分析: ConceptData = {
  id: 'CHN-Y04',
  name: '情节结构分析',
  chapter: '现代文阅读·文学类文本',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y01'],
  relatedModels: ['CHN-C01', 'CHN-C03'],
  relatedStrategies: ['CHN-F02'],
  status: 'coming_soon',
};

export const Y05_小说主题与意蕴: ConceptData = {
  id: 'CHN-Y05',
  name: '小说主题与意蕴',
  chapter: '现代文阅读·文学类文本',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y01', 'CHN-Y02'],
  relatedModels: ['CHN-C02', 'CHN-C03'],
  relatedStrategies: ['CHN-F04'],
  status: 'coming_soon',
};

export const Y06_小说阅读综合: ConceptData = {
  id: 'CHN-Y06',
  name: '小说阅读综合',
  chapter: '现代文阅读·文学类文本',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y01', 'CHN-Y02', 'CHN-Y03', 'CHN-Y04', 'CHN-Y05'],
  relatedModels: ['CHN-C03'],
  relatedStrategies: [],
  status: 'coming_soon',
};

export const Y07_信息筛选与概括: ConceptData = {
  id: 'CHN-Y07',
  name: '信息筛选与概括',
  chapter: '现代文阅读·实用类文本',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: [],
  relatedModels: ['CHN-C05', 'CHN-C06', 'CHN-C07'],
  relatedStrategies: ['CHN-F07', 'CHN-F08', 'CHN-F09', 'CHN-F10'],
  status: 'coming_soon',
};

export const Y08_论述类文本阅读: ConceptData = {
  id: 'CHN-Y08',
  name: '论述类文本阅读',
  chapter: '现代文阅读·实用类文本',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y07'],
  relatedModels: ['CHN-C05'],
  relatedStrategies: ['CHN-F07', 'CHN-F08'],
  status: 'coming_soon',
};

export const Y09_实用类文本阅读: ConceptData = {
  id: 'CHN-Y09',
  name: '实用类文本阅读',
  chapter: '现代文阅读·实用类文本',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y07'],
  relatedModels: ['CHN-C06'],
  relatedStrategies: [],
  status: 'coming_soon',
};

export const Y10_非连续性文本阅读: ConceptData = {
  id: 'CHN-Y10',
  name: '非连续性文本阅读',
  chapter: '现代文阅读·实用类文本',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y07'],
  relatedModels: ['CHN-C07'],
  relatedStrategies: ['CHN-F10'],
  status: 'coming_soon',
};

export const Y11_文言实词: ConceptData = {
  id: 'CHN-Y11',
  name: '文言实词',
  chapter: '古代诗文·文言文',
  module: '语言基础层',
  difficulty: 'core',
  prerequisites: [],
  relatedModels: ['CHN-C08', 'CHN-C09'],
  relatedStrategies: ['CHN-F11', 'CHN-F41'],
  status: 'coming_soon',
};

export const Y12_文言虚词: ConceptData = {
  id: 'CHN-Y12',
  name: '文言虚词',
  chapter: '古代诗文·文言文',
  module: '语言基础层',
  difficulty: 'core',
  prerequisites: [],
  relatedModels: ['CHN-C08', 'CHN-C09'],
  relatedStrategies: ['CHN-F12'],
  status: 'coming_soon',
};

export const Y13_文言句式: ConceptData = {
  id: 'CHN-Y13',
  name: '文言句式',
  chapter: '古代诗文·文言文',
  module: '语言基础层',
  difficulty: 'core',
  prerequisites: ['CHN-Y11', 'CHN-Y12'],
  relatedModels: ['CHN-C08', 'CHN-C09'],
  relatedStrategies: [],
  status: 'coming_soon',
};

export const Y14_文言文翻译: ConceptData = {
  id: 'CHN-Y14',
  name: '文言文翻译',
  chapter: '古代诗文·文言文',
  module: '语言基础层',
  difficulty: 'core',
  prerequisites: ['CHN-Y11', 'CHN-Y12', 'CHN-Y13'],
  relatedModels: ['CHN-C09'],
  relatedStrategies: ['CHN-F13'],
  status: 'coming_soon',
};

export const Y15_文言文内容理解: ConceptData = {
  id: 'CHN-Y15',
  name: '文言文内容理解',
  chapter: '古代诗文·文言文',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y11', 'CHN-Y12', 'CHN-Y13', 'CHN-Y14'],
  relatedModels: ['CHN-C09', 'CHN-C10'],
  relatedStrategies: ['CHN-F14', 'CHN-F15'],
  status: 'coming_soon',
};

export const Y16_文言文分析与评价: ConceptData = {
  id: 'CHN-Y16',
  name: '文言文分析与评价',
  chapter: '古代诗文·文言文',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y15'],
  relatedModels: ['CHN-C10', 'CHN-C25'],
  relatedStrategies: ['CHN-Y16'],
  status: 'coming_soon',
};

export const Y17_诗歌意象与意境: ConceptData = {
  id: 'CHN-Y17',
  name: '诗歌意象与意境',
  chapter: '古代诗文·古诗鉴赏',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: [],
  relatedModels: ['CHN-C11', 'CHN-C12', 'CHN-C13', 'CHN-C25', 'CHN-C26'],
  relatedStrategies: ['CHN-F17'],
  status: 'coming_soon',
};

export const Y18_诗歌语言鉴赏: ConceptData = {
  id: 'CHN-Y18',
  name: '诗歌语言鉴赏',
  chapter: '古代诗文·古诗鉴赏',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y17'],
  relatedModels: ['CHN-C11'],
  relatedStrategies: ['CHN-F18'],
  status: 'coming_soon',
};

export const Y19_诗歌表现手法: ConceptData = {
  id: 'CHN-Y19',
  name: '诗歌表现手法',
  chapter: '古代诗文·古诗鉴赏',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y17'],
  relatedModels: ['CHN-C12', 'CHN-C13'],
  relatedStrategies: ['CHN-F19', 'CHN-F20'],
  status: 'coming_soon',
};

export const Y20_诗歌情感与主旨: ConceptData = {
  id: 'CHN-Y20',
  name: '诗歌情感与主旨',
  chapter: '古代诗文·古诗鉴赏',
  module: '输入理解层',
  difficulty: 'core',
  prerequisites: ['CHN-Y17', 'CHN-Y18', 'CHN-Y19'],
  relatedModels: ['CHN-C13', 'CHN-C25'],
  relatedStrategies: ['CHN-F17', 'CHN-F21'],
  status: 'coming_soon',
};

export const Y21_字音字形: ConceptData = {
  id: 'CHN-Y21',
  name: '字音字形',
  chapter: '语言文字运用',
  module: '语言基础层',
  difficulty: 'core',
  prerequisites: [],
  relatedModels: ['CHN-C14'],
  relatedStrategies: [],
  status: 'coming_soon',
};

export const Y22_词语与成语运用: ConceptData = {
  id: 'CHN-Y22',
  name: '词语与成语运用',
  chapter: '语言文字运用',
  module: '语言基础层',
  difficulty: 'core',
  prerequisites: ['CHN-Y21'],
  relatedModels: ['CHN-C14'],
  relatedStrategies: ['CHN-F22'],
  status: 'coming_soon',
};

export const Y23_病句辨析与修改: ConceptData = {
  id: 'CHN-Y23',
  name: '病句辨析与修改',
  chapter: '语言文字运用',
  module: '语言基础层',
  difficulty: 'core',
  prerequisites: [],
  relatedModels: ['CHN-C15'],
  relatedStrategies: ['CHN-F23'],
  status: 'coming_soon',
};

export const Y24_句子衔接与连贯: ConceptData = {
  id: 'CHN-Y24',
  name: '句子衔接与连贯',
  chapter: '语言文字运用',
  module: '语言基础层',
  difficulty: 'core',
  prerequisites: ['CHN-Y23'],
  relatedModels: ['CHN-C15'],
  relatedStrategies: ['CHN-F24'],
  status: 'coming_soon',
};

export const Y25_修辞手法辨析: ConceptData = {
  id: 'CHN-Y25',
  name: '修辞手法辨析',
  chapter: '语言文字运用',
  module: '语言基础层',
  difficulty: 'core',
  prerequisites: [],
  relatedModels: ['CHN-C14', 'CHN-C16'],
  relatedStrategies: [],
  status: 'coming_soon',
};

export const Y26_语言表达简明连贯得体: ConceptData = {
  id: 'CHN-Y26',
  name: '语言表达简明连贯得体',
  chapter: '语言文字运用',
  module: '语言基础层',
  difficulty: 'core',
  prerequisites: ['CHN-Y23', 'CHN-Y24'],
  relatedModels: ['CHN-C16'],
  relatedStrategies: ['CHN-F25'],
  status: 'coming_soon',
};

export const Y27_图文转换: ConceptData = {
  id: 'CHN-Y27',
  name: '图文转换',
  chapter: '语言文字运用',
  module: '输出表达层',
  difficulty: 'extended',
  prerequisites: ['CHN-Y07'],
  relatedModels: ['CHN-C07'],
  relatedStrategies: [],
  status: 'coming_soon',
};

export const Y28_仿写与扩展压缩: ConceptData = {
  id: 'CHN-Y28',
  name: '仿写与扩展压缩',
  chapter: '语言文字运用',
  module: '输出表达层',
  difficulty: 'extended',
  prerequisites: ['CHN-Y26'],
  relatedModels: ['CHN-C16'],
  relatedStrategies: ['CHN-F26'],
  status: 'coming_soon',
};

export const Y29_审题与立意: ConceptData = {
  id: 'CHN-Y29',
  name: '审题与立意',
  chapter: '写作',
  module: '输出表达层',
  difficulty: 'core',
  prerequisites: [],
  relatedModels: ['CHN-C17', 'CHN-C28', 'CHN-C29'],
  relatedStrategies: ['CHN-F27'],
  status: 'coming_soon',
};

export const Y30_议论文论点与分论点: ConceptData = {
  id: 'CHN-Y30',
  name: '议论文论点与分论点',
  chapter: '写作',
  module: '输出表达层',
  difficulty: 'core',
  prerequisites: ['CHN-Y29'],
  relatedModels: ['CHN-C17', 'CHN-C29'],
  relatedStrategies: ['CHN-F28'],
  status: 'coming_soon',
};

export const Y31_议论文论据运用: ConceptData = {
  id: 'CHN-Y31',
  name: '议论文论据运用',
  chapter: '写作',
  module: '输出表达层',
  difficulty: 'core',
  prerequisites: ['CHN-Y30'],
  relatedModels: ['CHN-C18', 'CHN-C29'],
  relatedStrategies: ['CHN-F29', 'CHN-F43'],
  status: 'coming_soon',
};

export const Y32_议论文论证方法与逻辑: ConceptData = {
  id: 'CHN-Y32',
  name: '议论文论证方法与逻辑',
  chapter: '写作',
  module: '输出表达层',
  difficulty: 'core',
  prerequisites: ['CHN-Y30', 'CHN-Y31'],
  relatedModels: ['CHN-C19', 'CHN-C20', 'CHN-C29'],
  relatedStrategies: ['CHN-F30', 'CHN-F31', 'CHN-F32', 'CHN-F42'],
  status: 'coming_soon',
};

export const Y33_议论文结构与升格: ConceptData = {
  id: 'CHN-Y33',
  name: '议论文结构与升格',
  chapter: '写作',
  module: '输出表达层',
  difficulty: 'core',
  prerequisites: ['CHN-Y30', 'CHN-Y31', 'CHN-Y32'],
  relatedModels: ['CHN-C20', 'CHN-C29'],
  relatedStrategies: [],
  status: 'coming_soon',
};

export const Y34_记叙文写作: ConceptData = {
  id: 'CHN-Y34',
  name: '记叙文写作',
  chapter: '写作',
  module: '输出表达层',
  difficulty: 'extended',
  prerequisites: ['CHN-Y29'],
  relatedModels: ['CHN-C21'],
  relatedStrategies: ['CHN-F33'],
  status: 'coming_soon',
};

export const Y35_散文写作: ConceptData = {
  id: 'CHN-Y35',
  name: '散文写作',
  chapter: '写作',
  module: '输出表达层',
  difficulty: 'basic',
  prerequisites: ['CHN-Y29'],
  relatedModels: ['CHN-C21'],
  relatedStrategies: ['CHN-F34'],
  status: 'coming_soon',
};

export const Y36_应用文写作: ConceptData = {
  id: 'CHN-Y36',
  name: '应用文写作',
  chapter: '写作',
  module: '输出表达层',
  difficulty: 'core',
  prerequisites: [],
  relatedModels: ['CHN-C22'],
  relatedStrategies: ['CHN-F35'],
  status: 'coming_soon',
};

export const Y37_先秦文学与文化: ConceptData = {
  id: 'CHN-Y37',
  name: '先秦文学与文化',
  chapter: '文学文化常识',
  module: '文化积淀层',
  difficulty: 'core',
  prerequisites: [],
  relatedModels: ['CHN-C23', 'CHN-C27'],
  relatedStrategies: ['CHN-F39'],
  status: 'coming_soon',
};

export const Y38_秦汉魏晋文学: ConceptData = {
  id: 'CHN-Y38',
  name: '秦汉魏晋文学',
  chapter: '文学文化常识',
  module: '文化积淀层',
  difficulty: 'core',
  prerequisites: ['CHN-Y37'],
  relatedModels: ['CHN-C23', 'CHN-C27'],
  relatedStrategies: [],
  status: 'coming_soon',
};

export const Y39_唐宋文学: ConceptData = {
  id: 'CHN-Y39',
  name: '唐宋文学',
  chapter: '文学文化常识',
  module: '文化积淀层',
  difficulty: 'core',
  prerequisites: ['CHN-Y38'],
  relatedModels: ['CHN-C23', 'CHN-C27'],
  relatedStrategies: [],
  status: 'coming_soon',
};

export const Y40_元明清文学: ConceptData = {
  id: 'CHN-Y40',
  name: '元明清文学',
  chapter: '文学文化常识',
  module: '文化积淀层',
  difficulty: 'core',
  prerequisites: ['CHN-Y39'],
  relatedModels: ['CHN-C23', 'CHN-C27'],
  relatedStrategies: [],
  status: 'coming_soon',
};

export const Y41_现当代文学: ConceptData = {
  id: 'CHN-Y41',
  name: '现当代文学',
  chapter: '文学文化常识',
  module: '文化积淀层',
  difficulty: 'core',
  prerequisites: ['CHN-Y40'],
  relatedModels: ['CHN-C23'],
  relatedStrategies: ['CHN-F40'],
  status: 'coming_soon',
};

export const Y42_古代文化常识: ConceptData = {
  id: 'CHN-Y42',
  name: '古代文化常识',
  chapter: '文学文化常识',
  module: '文化积淀层',
  difficulty: 'core',
  prerequisites: [],
  relatedModels: ['CHN-C24'],
  relatedStrategies: [],
  status: 'coming_soon',
};

export const Y43_传统文化思想: ConceptData = {
  id: 'CHN-Y43',
  name: '传统文化思想',
  chapter: '文学文化常识',
  module: '文化积淀层',
  difficulty: 'extended',
  prerequisites: ['CHN-Y42'],
  relatedModels: ['CHN-C24'],
  relatedStrategies: [],
  status: 'coming_soon',
};