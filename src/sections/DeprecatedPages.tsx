import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

// 临时占位页：旧路由全部引导到新题库
export default function FallbackPage() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-6">
        <div className="text-6xl">📝</div>
        <h1 className="text-2xl font-bold">练习中心改版中</h1>
        <p className="text-muted-foreground">
          正在使用新题库系统，请从左侧栏进入"练习中心"访问新入口。
        </p>
        <Link to="/physics/exercises">
          <Button className="gap-2">
            进入新题库 <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </AppLayout>
  )
}