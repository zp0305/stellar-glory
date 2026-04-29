export interface Strategy {
  id: string;
  name: string;
  status: 'published' | 'draft' | 'coming_soon';
}

export type StrategyId = string;

export const allStrategies: Strategy[] = [
  { id: 'BIO-S01', name: '性质-方向-能量范式（物质跨膜运输判断）', status: 'published' },
  { id: 'BIO-S02', name: '基因型拆分范式（分离定律分析）', status: 'published' },
  { id: 'BIO-S03', name: '过程建模范式（细胞呼吸分析）', status: 'coming_soon' },
  { id: 'BIO-S04', name: '变量控制范式（酶活性实验）', status: 'coming_soon' },
  { id: 'BIO-S05', name: '能量转化范式（ATP-ADP循环）', status: 'coming_soon' },
  { id: 'BIO-S06', name: '结构功能对应范式（蛋白质分析）', status: 'coming_soon' },
  { id: 'BIO-S07', name: '系统观范式（细胞结构分析）', status: 'coming_soon' },
  { id: 'BIO-S08', name: '周期分析范式（有丝分裂）', status: 'coming_soon' },
  { id: 'BIO-S09', name: '独立分配范式（自由组合定律）', status: 'coming_soon' },
  { id: 'BIO-S10', name: '过程对应范式（减数分裂与遗传）', status: 'coming_soon' },
  { id: 'BIO-S11', name: '实验证据范式（遗传物质探究）', status: 'coming_soon' },
  { id: 'BIO-S12', name: '半保留机制范式（DNA复制）', status: 'coming_soon' },
  { id: 'BIO-S13', name: '信息传递范式（中心法则）', status: 'coming_soon' },
  { id: 'BIO-S14', name: '变异分析范式（基因突变）', status: 'coming_soon' },
  { id: 'BIO-S15', name: '方案优化范式（育种设计）', status: 'coming_soon' },
  { id: 'BIO-S16', name: '进化计算范式（基因频率）', status: 'coming_soon' },
  { id: 'BIO-S17', name: '稳态平衡范式（内环境分析）', status: 'coming_soon' },
  { id: 'BIO-S18', name: '神经通路范式（反射弧分析）', status: 'coming_soon' },
  { id: 'BIO-S19', name: '电位变化范式（神经传导）', status: 'coming_soon' },
  { id: 'BIO-S20', name: '信号转换范式（突触传递）', status: 'coming_soon' },
  { id: 'BIO-S21', name: '信号放大范式（激素作用）', status: 'coming_soon' },
  { id: 'BIO-S22', name: '负反馈调节范式（血糖调节）', status: 'coming_soon' },
  { id: 'BIO-S23', name: '系统协调范式（神经体液调节）', status: 'coming_soon' },
  { id: 'BIO-S24', name: '识别机制范式（免疫防线）', status: 'coming_soon' },
  { id: 'BIO-S25', name: '抗体产生范式（体液免疫）', status: 'coming_soon' },
  { id: 'BIO-S26', name: '细胞杀伤范式（细胞免疫）', status: 'coming_soon' },
  { id: 'BIO-S27', name: '浓度效应范式（植物激素）', status: 'coming_soon' },
  { id: 'BIO-S28', name: '增长曲线范式（种群增长）', status: 'coming_soon' },
  { id: 'BIO-S29', name: '营养关系范式（食物链分析）', status: 'coming_soon' },
  { id: 'BIO-S30', name: '能量传递范式（能量流动）', status: 'coming_soon' },
  { id: 'BIO-S31', name: '物质循环范式（碳循环）', status: 'coming_soon' },
  { id: 'BIO-S32', name: '系统稳定范式（生态系统稳定性）', status: 'coming_soon' },
  { id: 'BIO-S33', name: '工程流程范式（基因工程）', status: 'coming_soon' },
  { id: 'BIO-S34', name: '风险评估范式（转基因安全）', status: 'coming_soon' },
  { id: 'BIO-S35', name: '全能性应用范式（植物组织培养）', status: 'coming_soon' },
  { id: 'BIO-S36', name: '核移植范式（动物克隆）', status: 'coming_soon' },
  { id: 'BIO-S37', name: '过程优化范式（发酵控制）', status: 'coming_soon' },
  { id: 'BIO-S38', name: '定量分析范式（光合速率）', status: 'coming_soon' },
  { id: 'BIO-S39', name: '实验设计范式（对照实验）', status: 'coming_soon' },
  { id: 'BIO-S40', name: '因果推断范式（实验探究）', status: 'coming_soon' },
  { id: 'BIO-S41', name: '模型构建范式（概念建模）', status: 'coming_soon' },
  { id: 'BIO-S42', name: '类比推理范式（知识迁移）', status: 'coming_soon' },
  { id: 'BIO-S43', name: '归纳演绎范式（科学思维）', status: 'coming_soon' },
  { id: 'BIO-S44', name: '系统分析范式（整体视角）', status: 'coming_soon' },
  { id: 'BIO-S45', name: '动态平衡范式（稳态调节）', status: 'coming_soon' },
  { id: 'BIO-S46', name: '信息处理范式（信号传导）', status: 'coming_soon' },
  { id: 'BIO-S47', name: '进化思维范式（自然选择）', status: 'coming_soon' },
  { id: 'BIO-S48', name: '结构决定功能范式（生物学核心）', status: 'coming_soon' },
  { id: 'BIO-S49', name: '能量守恒范式（生命活动）', status: 'coming_soon' },
  { id: 'BIO-S50', name: '物质转化范式（新陈代谢）', status: 'coming_soon' },
  { id: 'BIO-S51', name: '遗传信息范式（中心法则扩展）', status: 'coming_soon' },
  { id: 'BIO-S52', name: '生态系统范式（整体性分析）', status: 'coming_soon' },
  { id: 'BIO-S53', name: '生物多样性范式（协同进化）', status: 'coming_soon' },
  { id: 'BIO-S54', name: '生物技术范式（工程应用）', status: 'coming_soon' },
  { id: 'BIO-S55', name: '科学探究范式（假说验证）', status: 'coming_soon' },
  { id: 'BIO-S56', name: '数据建模范式（定量研究）', status: 'coming_soon' },
  { id: 'BIO-S57', name: '比较分析范式（差异研究）', status: 'coming_soon' },
  { id: 'BIO-S58', name: '分类归纳范式（系统分类）', status: 'coming_soon' },
  { id: 'BIO-S59', name: '层级分析范式（组织层次）', status: 'coming_soon' },
  { id: 'BIO-S60', name: '跨学科整合范式（综合应用）', status: 'coming_soon' },
];

export const strategyDataMap = new Map<string, Strategy>(
  allStrategies.map((s) => [s.id, s])
);

export function getStrategyById(id: string): Strategy | undefined {
  return strategyDataMap.get(id);
}