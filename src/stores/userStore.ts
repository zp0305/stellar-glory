import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserProgress, WrongQuestionRecord, QuestionAttempt, LearningStats, SubjectCode } from '@/types'

interface User {
  id: string
  email: string
  username?: string
  avatar_url?: string
  created_at: string
}

interface UserState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  progress: Record<string, UserProgress>
  wrongQuestions: Record<SubjectCode, WrongQuestionRecord[]>
  questionAttempts: QuestionAttempt[]
  learningStats: Record<SubjectCode, LearningStats>
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  logout: () => void
  updateProgress: (knowledgeId: string, update: Partial<UserProgress>) => void
  getProgress: (knowledgeId: string) => UserProgress | undefined
  addWrongQuestion: (record: WrongQuestionRecord) => void
  removeWrongQuestion: (subject: SubjectCode, id: string) => void
  updateWrongQuestion: (subject: SubjectCode, id: string, update: Partial<WrongQuestionRecord>) => void
  markAsReviewed: (subject: SubjectCode, id: string) => void
  markAsMastered: (subject: SubjectCode, id: string) => void
  addQuestionAttempt: (attempt: QuestionAttempt) => void
  updateLearningStats: (subject: SubjectCode) => void
  getWrongQuestionsBySubject: (subject: SubjectCode) => WrongQuestionRecord[]
  getLearningStats: (subject: SubjectCode) => LearningStats | undefined
}

const initStats = (subject: SubjectCode): LearningStats => ({
  subject,
  totalAttempts: 0,
  correctCount: 0,
  wrongCount: 0,
  masteredCount: 0,
  modelStats: {},
})

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: true,
      isAuthenticated: false,
      progress: {},
      wrongQuestions: {
        PHY: [],
        CHE: [],
        MAT: [],
        BIO: [],
        CHN: [],
        ENG: [],
      },
      questionAttempts: [],
      learningStats: {
        PHY: initStats('PHY'),
        CHE: initStats('CHE'),
        MAT: initStats('MAT'),
        BIO: initStats('BIO'),
        CHN: initStats('CHN'),
        ENG: initStats('ENG'),
      },

      setUser: (user) => set({ user, isAuthenticated: !!user, isLoading: false }),
      setLoading: (isLoading) => set({ isLoading }),

      logout: () => set({
        user: null,
        isAuthenticated: false,
        progress: {},
        wrongQuestions: { PHY: [], CHE: [], MAT: [], BIO: [], CHN: [], ENG: [] },
        questionAttempts: [],
        learningStats: {
          PHY: initStats('PHY'),
          CHE: initStats('CHE'),
          MAT: initStats('MAT'),
          BIO: initStats('BIO'),
          CHN: initStats('CHN'),
          ENG: initStats('ENG'),
        },
      }),

      updateProgress: (knowledgeId, update) => {
        set((state) => {
          const existing = state.progress[knowledgeId]
          const updated: UserProgress = {
            knowledgeId,
            status: existing?.status ?? 'undone',
            progress: existing?.progress ?? 0,
            lastAccessed: new Date().toISOString(),
            ...update,
          }
          return { progress: { ...state.progress, [knowledgeId]: updated } }
        })
      },

      getProgress: (knowledgeId) => get().progress[knowledgeId],

      addWrongQuestion: (record) => {
        set((state) => {
          const existing = state.wrongQuestions[record.subject] || []
          const alreadyExists = existing.some(q => q.questionId === record.questionId)
          if (alreadyExists) return state
          return {
            wrongQuestions: {
              ...state.wrongQuestions,
              [record.subject]: [record, ...existing],
            },
          }
        })
      },

      removeWrongQuestion: (subject, id) => {
        set((state) => ({
          wrongQuestions: {
            ...state.wrongQuestions,
            [subject]: (state.wrongQuestions[subject] || []).filter(q => q.id !== id),
          },
        }))
      },

      updateWrongQuestion: (subject, id, update) => {
        set((state) => ({
          wrongQuestions: {
            ...state.wrongQuestions,
            [subject]: (state.wrongQuestions[subject] || []).map(q =>
              q.id === id ? { ...q, ...update, updatedAt: new Date().toISOString() } : q
            ),
          },
        }))
      },

      markAsReviewed: (subject, id) => {
        set((state) => ({
          wrongQuestions: {
            ...state.wrongQuestions,
            [subject]: (state.wrongQuestions[subject] || []).map(q =>
              q.id === id ? {
                ...q,
                isReviewed: true,
                reviewCount: q.reviewCount + 1,
                lastReviewedAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              } : q
            ),
          },
        }))
      },

      markAsMastered: (subject, id) => {
        set((state) => ({
          wrongQuestions: {
            ...state.wrongQuestions,
            [subject]: (state.wrongQuestions[subject] || []).map(q =>
              q.id === id ? {
                ...q,
                isMastered: true,
                isReviewed: true,
                updatedAt: new Date().toISOString(),
              } : q
            ),
          },
        }))
      },

      addQuestionAttempt: (attempt) => {
        set((state) => ({
          questionAttempts: [attempt, ...state.questionAttempts],
        }))
      },

      updateLearningStats: (subject) => {
        set((state) => {
          const attempts = state.questionAttempts.filter(a => a.subject === subject)
          const correct = attempts.filter(a => a.isCorrect).length
          const wrong = attempts.filter(a => !a.isCorrect).length
          const mastered = (state.wrongQuestions[subject] || []).filter(q => q.isMastered).length

          const modelStats: Record<string, { attempts: number; correct: number }> = {}
          attempts.forEach(a => {
            if (a.modelId) {
              if (!modelStats[a.modelId]) {
                modelStats[a.modelId] = { attempts: 0, correct: 0 }
              }
              modelStats[a.modelId].attempts++
              if (a.isCorrect) modelStats[a.modelId].correct++
            }
          })

          const lastAttemptAt = attempts.length > 0 ? attempts[0].answeredAt : undefined

          return {
            learningStats: {
              ...state.learningStats,
              [subject]: {
                subject,
                totalAttempts: attempts.length,
                correctCount: correct,
                wrongCount: wrong,
                masteredCount: mastered,
                lastAttemptAt,
                modelStats,
              },
            },
          }
        })
      },

      getWrongQuestionsBySubject: (subject) => {
        return get().wrongQuestions[subject] || []
      },

      getLearningStats: (subject) => {
        return get().learningStats[subject]
      },
    }),
    {
      name: 'xingyao-user',
      partialize: (s) => ({
        user: s.user,
        isAuthenticated: s.isAuthenticated,
        progress: s.progress,
        wrongQuestions: s.wrongQuestions,
        questionAttempts: s.questionAttempts,
        learningStats: s.learningStats,
      }),
    }
  )
)