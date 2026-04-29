import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 注册所有学科数据（副作用导入，触发 registerSubject）
import '@/data/physics'
import '@/data/chemistry'
import '@/data/math'
import '@/data/biology'
import '@/data/english'
import '@/data/chinese'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
