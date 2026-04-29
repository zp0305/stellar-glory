export type ConceptDifficulty = 'core' | 'extended' | 'basic';

export interface ConceptData {
  id: string;
  name: string;
  chapter: string;
  module: string;
  difficulty: ConceptDifficulty;
  prerequisites: string[];
  relatedModels: string[];
  relatedStrategies: string[];
  status: 'coming_soon' | 'draft' | 'published';
}