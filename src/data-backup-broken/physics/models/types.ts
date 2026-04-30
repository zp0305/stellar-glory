export interface ModelData {
  id: string;
  name: string;
  chapter: string;
  difficulty: 'B' | 'J' | 'T';
  coreThinking: string;
  relatedConcepts: string[];
  relatedStrategies: string[];
}

export interface ModelChapter {
  id: string;
  name: string;
  models: string[];
}

export interface ModelExample {
  title: string;
  question: string;
  solution: string;
  analysis: string;
}