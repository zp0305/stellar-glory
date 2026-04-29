import { AppLayout } from '@/components/layout/Navigation'
import { Building2 } from 'lucide-react'

interface ComingSoonProps {
  name?: string
  subject?: string
}

export function ComingSoon({ name = '', subject = '' }: ComingSoonProps) {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
          <Building2 className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold mb-2">
          {name ? `${name}建设中` : '该功能建设中'}
        </h2>
        <p className="text-muted-foreground">
          {subject ? `${subject}学科的${name || '此功能'}正在积极开发中` : '我们正在努力建设中'}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          敬请期待，更多精彩内容即将上线
        </p>
      </div>
    </AppLayout>
  )
}