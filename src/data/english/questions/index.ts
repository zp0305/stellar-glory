import { Question } from './types';

export const questions: Question[] = [];

export const questionDataMap = new Map<string, Question>(
  questions.map((q) => [q.id, q])
);

export function getQuestionById(id: string): Question | undefined {
  return questionDataMap.get(id);
}

export function getQuestionsByModelId(modelId: string): Question[] {
  return questions.filter((q) => q.modelId === modelId);
}