import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'

// 旧路由自动跳转到新题库
export default function PracticeRedirect() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/physics/exercises', { replace: true })
  }, [navigate])
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground">正在跳转到新题库...</p>
      </div>
    </AppLayout>
  )
}
