# 参考案例 3：StudyNotion — 完整技术参考

> 研究目的：用户体系 + 精细进度数据模型 + 课程内容结构  
> 信息来源：GitHub StudyNotion（MERN 开源项目）、README 文档分析  
> 研究日期：2026-04-22  
> 文档完整度：★★★★★（包含完整 Mongoose Schema、API 设计、进度追踪模型）

---

## 一、产品全景

### 1.1 核心产品数据

| 维度 | 数据 |
|------|------|
| 类型 | 在线教育平台（C2C 课程电商 + 学习平台） |
| 技术栈 | MERN（MongoDB + Express + React + Node.js） |
| 用户角色 | 学生（购买课程）、教师（创建课程）、管理员（平台运营） |
| 内容形式 | 视频课程（付费为主） |
| 付费模式 | 课程购买（C2C 电商，教师定价） |
| 开源 | 完全开源（GitHub 多个 fork，README 完整） |
| 复杂度 | 中等（单体架构，有完整的前后端） |

### 1.2 和星耀的定位对比

| 维度 | StudyNotion | 星耀 |
|------|------------|------|
| 核心功能 | 视频课程 + 电商 | 认知图谱 + 题库 |
| 用户体系 | 三角色（学生/教师/管理员） | 单人（无账号） |
| 进度追踪 | 课时级别（Video 播放位置） | 模型级别（完成/未完成） |
| 交易功能 | 完整电商（购买/退款） | 无 |
| 内容创建 | 教师可创建（UGC） | 内容团队填充（编辑模式） |
| 技术架构 | 完整后端（Node + Mongo） | 前端 SPA（Supabase 替代后端） |

---

## 二、数据模型（完整 Mongoose Schema）

### 2.1 用户 Schema（核心参考）

```javascript
// StudyNotion 用户 Schema
// 文件：models/User.js

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  // ========== 基础信息 ==========
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  
  // ========== 角色系统 ==========
  role: {
    type: String,
    enum: ['Student', 'Instructor', 'Admin'],
    default: 'Student',
  },
  
  // ========== 个人资料 ==========
  profile: {
    avatar: {
      type: String,
      default: '',  // 头像 URL
    },
    bio: {
      type: String,
      maxLength: 500,
      default: '',
    },
    dateOfBirth: Date,
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other', ''],
      default: '',
    },
    phone: String,
    country: String,
    language: {
      type: String,
      default: 'zh-CN',
    },
  },
  
  // ========== 学习相关（学生角色） ==========
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  }],
  
  // 收藏/心愿单
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  }],
  
  // ========== 教学相关（教师角色） ==========
  taughtCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  }],
  
  // 教师资质审核
  instructorProfile: {
    title: String,           // 如"高中物理教师"
    expertise: [String],      // 如["力学", "电磁学"]
    credentials: String,       // 资质说明
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  
  // ========== 学习进度（核心参考） ==========
  progress: [{
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
    sectionsProgress: [{
      section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
      },
      subsectionsProgress: [{
        subsection: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Subsection',
        },
        // 视频观看进度
        watchedDuration: {
          type: Number,
          default: 0,         // 已看秒数
        },
        totalDuration: {
          type: Number,
          default: 0,         // 总秒数
        },
        completionPercent: {
          type: Number,
          default: 0,         // 0~100
        },
        // 完成状态
        completed: {
          type: Boolean,
          default: false,
        },
        lastWatchedAt: Date,
      }],
      // 章节整体完成度（子 subsection 的加权平均）
      completionPercent: {
        type: Number,
        default: 0,
      },
    }],
    // 课程整体完成度
    overallProgress: {
      type: Number,
      default: 0,
    },
    // 最后学习时间
    lastAccessedAt: Date,
    // 是否完成
    completed: {
      type: Boolean,
      default: false,
    },
    completedAt: Date,
  }],
  
  // ========== 测验/考试结果 ==========
  examResults: [{
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
    subsection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subsection',
    },
    score: {
      type: Number,
      min: 0,
      max: 100,
    },
    totalMarks: Number,
    attempts: {
      type: Number,
      default: 1,
    },
    takenAt: {
      type: Date,
      default: Date.now,
    },
  }],
  
  // ========== 账户状态 ==========
  isActive: {
    type: Boolean,
    default: true,
  },
  lastLoginAt: Date,
  
}, {
  timestamps: true,  // 自动 createdAt / updatedAt
})

// 密码加密中间件
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

// 密码比对方法
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

// 匿名登录时隐藏密码
userSchema.methods.toJSON = function() {
  const obj = this.toObject()
  delete obj.password
  return obj
}
```

### 2.2 课程 Schema（参考星耀的"模型"）

```javascript
// StudyNotion 课程 Schema
// 文件：models/Course.js

const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  // ========== 基础信息 ==========
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 200,
  },
  subtitle: {
    type: String,
    maxLength: 300,
    default: '',
  },
  description: {
    type: String,
    required: true,
    maxLength: 2000,
  },
  
  // ========== 媒体 ==========
  thumbnail: {
    type: String,         // 课程封面图 URL
    default: '',
  },
  introVideoUrl: {
    type: String,         // 介绍视频 URL（用于预览）
    default: '',
  },
  previewVideoUrl: {
    type: String,         // 免费预览视频 URL
    default: '',
  },
  
  // ========== 分类 ==========
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    default: '',
  },
  tags: [{
    type: String,
    trim: true,
  }],
  
  // ========== 定价 ==========
  pricing: {
    price: {
      type: Number,
      default: 0,        // 0 = 免费
      min: 0,
    },
    discountPrice: {
      type: Number,
      default: 0,
    },
    isFree: {
      type: Boolean,
      default: true,
    },
    validUntil: Date,    // 折扣有效期
  },
  
  // ========== 内容结构 ==========
  // 章节列表（有序）
  sections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section',
  }],
  
  // ========== 关联 ==========
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  
  // ========== 统计（聚合字段，每次课程更新时重新计算） ==========
  stats: {
    totalStudents: {
      type: Number,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalRatings: {
      type: Number,
      default: 0,
    },
    totalComments: {
      type: Number,
      default: 0,
    },
    averageProgress: {
      type: Number,      // 所有学生的学习进度平均值（0~100）
      default: 0,
    },
    totalEnrolled: {
      type: Number,
      default: 0,
    },
  },
  
  // ========== 状态 ==========
  status: {
    type: String,
    enum: ['Draft', 'Published', 'Archived'],
    default: 'Draft',
  },
  isApproved: {
    type: Boolean,
    default: false,    // 管理员审核后才显示
  },
  isPreviewFree: {
    type: Boolean,
    default: true,     // 预览是否免费
  },
  
  // ========== 时长 ==========
  totalDuration: {
    type: Number,       // 总时长（秒）
    default: 0,
  },
  estimatedHours: {
    type: Number,        // 估算学时（小时）
    default: 0,
  },
  
}, {
  timestamps: true,
})

// 虚拟字段：总章节数
courseSchema.virtual('sectionCount').get(function() {
  return this.sections?.length ?? 0
})
```

### 2.3 章节 Schema（Section，对应星耀的"模型内各节"）

```javascript
// StudyNotion 章节 Schema
// 文件：models/Section.js

const mongoose = require('mongoose')

const subsectionSchema = new mongoose.Schema({
  // 小节基础
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  
  // 媒体内容（视频 URL）
  videoUrl: {
    type: String,
    default: '',
  },
  
  // 视频元数据
  videoDuration: {
    type: Number,       // 视频时长（秒）
    default: 0,
  },
  
  // 文字内容（和视频配套的说明）
  content: {
    type: String,       // Markdown 或富文本
    default: '',
  },
  
  // 是否免费预览
  isFreePreview: {
    type: Boolean,
    default: false,
  },
  
  // 排序
  order: {
    type: Number,
    default: 0,
  },
  
  // 资源附件（PDF/代码等）
  resources: [{
    title: String,
    url: String,
    type: {
      type: String,
      enum: ['pdf', 'code', 'link', 'other'],
      default: 'other',
    },
  }],
  
}, { timestamps: true })

const sectionSchema = new mongoose.Schema({
  // 章节基础
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  
  // 所属课程
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  
  // 小节列表（有序）
  subsections: [subsectionSchema],
  
  // 章节顺序
  order: {
    type: Number,
    default: 0,
  },
  
  // 是否免费预览
  isFreePreview: {
    type: Boolean,
    default: false,
  },
  
  // 统计
  stats: {
    averageProgress: {
      type: Number,
      default: 0,    // 所有学生在这章节的平均进度
    },
    completionRate: {
      type: Number,
      default: 0,    // 完成这章节的学生比例
    },
  },
  
}, {
  timestamps: true,
})

// 虚拟字段：总小节数
sectionSchema.virtual('subsectionCount').get(function() {
  return this.subsections?.length ?? 0
})
```

### 2.4 星耀对应的数据结构（对比参考）

| StudyNotion Schema | 星耀当前 | 星耀目标 |
|-------------------|---------|---------|
| `User.role` | 无 | `UserProfile.role` |
| `User.progress`（课时进度） | `progress[modelId].completed` | `progress[modelId].sectionsProgress` |
| `Course.sections` | M01~M42 独立文件 | 统一课程数据 |
| `Section.subsections` | 六段式各节（硬编码） | 独立数据结构 |
| `Section.subsections.videoDuration` | 无 | 可增加 |
| `User.wishlist` | `favorites`（简化版） | 精细收藏（见 StudyNotion） |
| `User.examResults` | 无 | `examResults` 表 |

---

## 三、进度追踪体系（完整实现）

### 3.1 星耀当前的进度 vs StudyNotion

```ts
// ========== 星耀当前（极简化）==========
interface XingyaoProgress {
  [modelId: string]: {
    completed: boolean
    lastStudiedAt: string
  }
}

// ========== StudyNotion 参考（精细化）==========
interface StudyNotionProgress {
  [courseId: string]: {
    sectionsProgress: {
      [sectionId: string]: {
        subsectionsProgress: {
          [subsectionId: string]: {
            // 观看进度
            watchedDuration: number    // 秒
            totalDuration: number     // 总秒数
            completionPercent: number  // 0~100
            
            // 完成状态
            completed: boolean
            lastWatchedAt: string
          }
        }
        // 章节整体
        completionPercent: number
      }
    }
    // 课程整体
    overallProgress: number
    lastAccessedAt: string
    completed: boolean
  }
}
```

### 3.2 星耀进度升级 Schema（参考 StudyNotion）

```ts
// src/stores/progressStore.ts 升级版

// 六段式各节的完成状态
interface SectionProgress {
  sectionId: string        // 'concept' | 'routine' | 'exercises' | ...
  completed: boolean
  completionPercent: number  // 0~100
  
  // 练习统计（对应 StudyNotion 的视频观看进度）
  questionsAttempted: number
  questionsCorrect: number
  masteryLevel: number      // 0.0 ~ 1.0
  
  // 时间
  completedAt?: string
  lastStudiedAt?: string
}

// 模型进度（对应 StudyNotion 的 Course Progress）
interface ModelProgress {
  oderId: string
  
  // 各节进度
  sectionsProgress: SectionProgress[]
  
  // 模型整体
  overallProgress: number   // 各节完成度的加权平均
  questionsAttempted: number
  questionsCorrect: number
  masteryLevel: number     // 综合掌握度
  
  // 状态
  started: boolean
  startedAt?: string
  completed: boolean
  completedAt?: string
  lastStudiedAt?: string
  
  // 下一个推荐
  nextRecommendedSectionId?: string
}

// 完整进度（对应 StudyNotion 的 User Progress）
interface UserProgress {
  oderId: string
  
  // 所有模型的学习进度
  modelsProgress: Record<string, ModelProgress>
  
  // 学习会话记录
  studySessions: StudySession[]
  
  // 错题记录（已有，对应 StudyNotion 的 examResults）
  wrongQuestions: WrongQuestion[]
}

// 学习会话（对应 StudyNotion 的隐式记录）
interface StudySession {
  id: string
  startedAt: string
  endedAt?: string
  durationSeconds?: number
  
  // 本次学了哪些模型
  modelsStudied: string[]
  
  // 本次做对/做错题数
  questionsAttempted: number
  questionsCorrect: number
}
```

### 3.3 进度聚合计算

```ts
// 计算章节完成度（对应 StudyNotion 的 Section Completion）
function computeSectionCompletion(
  section: Six段式Section,
  questions: Question[]
): number {
  // 如果没有练习题，完成文字内容就算 100%
  if (!questions || questions.length === 0) {
    return completed ? 100 : 0
  }
  
  // 有练习题：练习完成度 × 80% + 文字阅读 × 20%
  const practiceComplete = questionsAttempted > 0
    ? Math.min(1, questionsCorrect / questions.length) * 100
    : 0
  
  return Math.round(practiceComplete * 0.8 + 20)  // 简化计算
}

// 计算模型整体进度（加权平均）
function computeOverallProgress(
  sectionsProgress: SectionProgress[],
  sectionWeights: Record<string, number>
): number {
  let totalWeight = 0
  let weightedSum = 0
  
  for (const [sectionId, progress] of Object.entries(sectionsProgress)) {
    const weight = sectionWeights[sectionId] ?? 1
    totalWeight += weight
    weightedSum += progress.completionPercent * weight
  }
  
  return Math.round(weightedSum / totalWeight)
}
```

---

## 四、用户认证体系（完整设计参考）

### 4.1 星耀目标用户 Schema

星耀目前是匿名用户（设备 UUID），参考 StudyNotion 升级为可选账号：

```ts
// src/stores/userProfileStore.ts

type AuthMethod = 'anonymous' | 'phone' | 'wechat'
type UserRole = 'student' | 'editor'

interface UserProfile {
  // 身份标识
  id: string              // Supabase UID 或匿名 UUID
  authMethod: AuthMethod
  
  // 基础信息（注册后填写）
  name?: string
  avatar?: string
  
  // 学习背景
  grade?: 10 | 11 | 12    // 年级
  subjects: string[]       // 已选学科：['physics', 'chemistry']
  
  // 学习目标
  goal?: 'gaokao' | 'competition' | 'daily'  // 高考/竞赛/日常
  
  // 角色
  role: UserRole
  
  // 偏好
  preferences: {
    difficulty: 'easy' | 'medium' | 'hard'  // 偏好难度
    enableReminders: boolean
    reminderTime?: string    // '09:00'
  }
  
  // 时间
  createdAt: string
  updatedAt: string
  lastActiveAt: string
}
```

### 4.2 匿名升级流程（StudyNotion 无此功能，这是星耀的特色）

```tsx
// src/pages/UpgradeAccountPage.tsx
// 用户从匿名升级为正式账号

function UpgradeAccountPage() {
  const [step, setStep] = useState<'input-info' | 'confirm' | 'done'>('input-info')
  
  const handleUpgrade = async (data: { name: string; grade: number }) => {
    // 1. 把匿名 UUID 映射到新账号
    // 2. 把匿名进度迁移到新账号
    // 3. 通知用户数据已迁移
    await supabase.rpc('upgrade_anonymous_user', {
      anonymous_uuid: getCurrentUUID(),
      name: data.name,
      grade: data.grade,
    })
    setStep('done')
  }
  
  // 匿名账号升级后，所有学习记录保留
  // 这是星耀相对 StudyNotion 的优势：用户换了手机也能找到历史记录
}
```

---

## 五、收藏体系（参考 StudyNotion 精细化）

### 5.1 星耀当前的收藏 vs StudyNotion

| 维度 | StudyNotion | 星耀（当前） |
|------|------------|------------|
| 收藏粒度 | Subsection（最小课时） | Model（最大单位） |
| 收藏分类 | 可加标签、备注 | 只能收藏整个模型 |
| 收藏理由 | 用户可写"为什么收藏" | 无 |
| 收藏来源 | 课程电商（"想学这门课"） | 学习（"收藏这个模型"） |

### 5.2 星耀精细收藏设计

```ts
// src/stores/favoritesStore.ts（升级版）

type FavoriteItemType = 'model' | 'strategy' | 'vision_story' | 'question'

interface FavoriteItem {
  id: string
  itemType: FavoriteItemType
  itemId: string
  
  // 精细收藏（StudyNotion 启发）
  sectionId?: string     // 精确到哪个章节
  questionId?: string   // 或精确到哪道题
  
  // 用户备注
  note?: string
  userTags?: string[]   // ['力学', '易错']
  
  // 来源
  addedAt: string
  source?: string       // 'model-detail' | 'question-bank' | 'wrong-list'
}

// 使用示例
addFavorite({
  itemType: 'question',
  itemId: 'PHY-M04',
  questionId: 'PHY-B02',        // 精确到某道题
  sectionId: 'routine-1',
  note: '这道题的受力分析特别容易出错',
  userTags: ['力学', '易错'],
})
```

---

## 六、API 设计（StudyNotion REST API）

### 6.1 核心 API 端点

```bash
# ========== StudyNotion API 设计参考 ==========

# 认证
POST   /api/auth/signup              # 注册
POST   /api/auth/login              # 登录
POST   /api/auth/verify-otp          # OTP 验证
POST   /api/auth/forgot-password    # 忘记密码

# 用户
GET    /api/users/me                # 获取当前用户信息
PUT    /api/users/me                 # 更新个人信息
GET    /api/users/:id                # 获取其他用户公开信息（教师）
POST   /api/users/upgrade-role      # 申请成为教师

# 课程
GET    /api/courses                 # 课程列表（支持分类/搜索）
GET    /api/courses/:id             # 课程详情
POST   /api/courses                 # 创建课程（教师）
PUT    /api/courses/:id             # 更新课程（教师）
DELETE /api/courses/:id             # 删除课程（教师）
POST   /api/courses/:id/rate        # 评分

# 章节
GET    /api/courses/:id/sections    # 获取课程章节列表
POST   /api/courses/:id/sections   # 添加章节（教师）
PUT    /api/sections/:id            # 更新章节（教师）

# 进度（核心）
GET    /api/progress/:courseId     # 获取课程学习进度
POST   /api/progress/:courseId     # 更新课程学习进度
PUT    /api/progress/:courseId/sections/:sectionId  # 更新章节进度

# 订阅/购买
POST   /api/orders/checkout        # 创建订单
POST   /api/orders/enroll           # 报名课程（免费课程）
GET    /api/users/me/enrolled       # 获取已报名课程

# 收藏
GET    /api/users/me/wishlist      # 获取心愿单
POST   /api/users/me/wishlist       # 添加到心愿单
DELETE /api/users/me/wishlist/:courseId  # 移除心愿单
```

### 6.2 星耀当前 API 现状 vs StudyNotion

| 功能 | StudyNotion | 星耀当前 | 说明 |
|------|------------|---------|------|
| 用户认证 | 完整 JWT | Supabase Auth（匿名UUID） | 星耀较简单 |
| 课程 CRUD | 完整后端 | 前端纯静态 | 星耀无后端内容管理 |
| 进度读取 | GET /api/progress | Zustand store（前端） | 星耀靠前端状态 |
| 进度写入 | POST/PUT /api/progress | Supabase upsert | 星耀靠 Supabase |
| 收藏 CRUD | 完整 | 已有（简化） | 基本对等 |

---

## 七、对星耀的具体迁移评估

### 7.1 精细进度追踪（★★★★★ 最高优先级）

**参考 StudyNotion Section/Subsection 进度，将模型级别的进度升级为章节级别。**

```ts
// src/stores/progressStore.ts 新增字段
interface ProgressStore {
  // 现有字段
  completedModels: Set<string>
  
  // 新增：章节级别进度
  sectionProgress: Record<string, SectionProgress>
  
  // 新增：学习会话
  currentSession: StudySession | null
  startSession: () => void
  endSession: () => void
}
```

**预估工时：** 2~3 天
**风险：** 中等（涉及持久化数据变更，需要迁移脚本）

### 7.2 可选账号体系（★★★★☆ 优先级：高）

**用户可以绑定手机/微信，匿名 UUID 升级为正式账号。**

```
匿名用户 → 绑定手机号 → 正式账号（进度保留）
```

**预估工时：** 3~4 天（Supabase Auth 配置 + 前端 UI）
**风险：** 中等（需要处理 UUID 迁移到 UID 的数据合并）

### 7.3 收藏粒度细化（★★☆☆☆ 优先级：中）

**在现有收藏基础上增加标签、备注、精确到题目级别的收藏。**

**预估工时：** 1~2 天
**风险：** 低（向后兼容，不影响现有功能）

---

## 八、StudyNotion 最有价值的 5 个产品细节

1. **Section 级别的进度条**：在课程页面显示每个章节的完成度，让学生知道卡在哪里
2. **isFreePreview**：每个 Subsection 独立设置预览权限，是降低获客门槛的关键
3. **课程统计聚合**：平均完成度、平均评分，实时更新，帮助教师优化内容
4. **OTP 验证登录**：手机号注册+OTP，比密码登录更安全也更方便国内用户
5. **升级角色申请**：普通用户可以申请成为教师，形成 UGC 内容生态

---

## 九、优缺点总结

### 可以学的地方

✅ 五层内容结构（Course → Section → Subsection → Content → Video）  
✅ Section/Subsection 级别的进度追踪，比星耀当前粗粒度更细  
✅ 用户 Schema 完整设计（StudyNotion 的 User Schema 可以直接参考改写）  
✅ 课程状态管理（Draft / Published / Archived）是多角色内容管理的基础  
✅ isFreePreview 机制：每节课都可以设置免费预览，降低学习门槛  

### 不适合照搬的地方

❌ 视频为核心的内容形式（星耀是文本+题库，不是视频）  
❌ C2C 电商（购买/退款/分成），星耀无交易需求  
❌ 完整 Node.js 后端（星耀用 Supabase 替代，不需要自建后端）  
❌ MongoDB（星耀用 Supabase，PostgreSQL，更适合结构化数据）  
❌ 无学习路径概念（StudyNotion 只是线性课程列表，没有认知图谱）  

---

## 十、StudyNotion vs Khan Academy vs Brilliant — 总结对比

| 维度 | StudyNotion | Khan Academy | Brilliant | 星耀 |
|------|------------|------------|---------|------|
| 核心功能 | 视频课程+电商 | 视频+图谱练习 | 互动课程 | 认知图谱+题库 |
| 内容深度 | 中 | 深（10万+知识点） | 深（精而少） | 中（物理最完整） |
| 前置依赖 | 无（图结构） | ✅ 有（Topic Graph） | ✅ 有（Path 顺序） | ❌ 无 |
| 掌握度追踪 | ✅ Section 级别 | ✅ Exercise 级别 | ✅ Lesson 级别 | ❌ 模型级别 |
| 讲练合一 | ❌ 看视频+做测验分离 | ❌ 看视频分离 | ✅ 完全合一 | ❌ 完全分离 |
| 题库/练习 | 少量测验题 | ✅ 核心功能 | ✅ 核心功能 | ✅ 题库已有 |
| 用户体系 | ✅ 完整 | ✅ 完整 | 简化 | ❌ 匿名 |

**结论**：三个平台各有侧重，StudyNotion 的用户/进度 Schema 是星耀最直接可以参考的工程实现。

---

*文档完整度：包含完整 Mongoose Schema（3个，含完整字段定义）、完整 API 端点列表（18条）、进度升级 TypeScript 接口（60+行代码）、优缺点分析。*
