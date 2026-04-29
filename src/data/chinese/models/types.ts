export interface ModelData {
  id: string;
  name: string;
  chapter: string;
  difficulty: 'B' | 'J' | 'T';
  coreThinking: string;
  relatedConcepts: string[];
  relatedStrategies: string[];
  status: 'coming_soon' | 'draft' | 'published';
}