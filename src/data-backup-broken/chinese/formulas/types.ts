export interface FormulaCard {
  id: string;
  name: string;
  chapter: string;
  formula: string;
  description: string;
  variables: { name: string; symbol: string; unit: string }[];
  relatedConcepts: string[];
  relatedModels: string[];
  difficulty: 'B' | 'J' | 'T';
}

export interface FormulaChapter {
  id: string;
  name: string;
  formulas: string[];
}