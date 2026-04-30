import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 所有学科（物理/化学/数学/生物/英语/语文）均改为按需异步加载
// 数据将在用户首次访问对应学科页面时动态加载
// import '@/data/physics'  // 已移除，改为动态加载

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
