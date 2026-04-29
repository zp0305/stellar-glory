export interface Question {
  id: string;
  modelId: string;
  type: 'CHOICE' | 'FILL' | 'JUDGE' | 'ANSWER';
  difficulty: 'B' | 'J' | 'T';
  level: 'L1' | 'L2' | 'L3';
  target: 'SYNC' | 'EXAM' | 'GAOKAO' | 'COMP';
  function: 'PRAC' | 'REV' | 'DIAG' | 'REAL';
  content: string;
  options?: { key: string; value: string }[];
  answer: string;
  analysis: string;
  source?: string;
  year?: number;
  province?: string;
}