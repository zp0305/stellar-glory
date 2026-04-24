import { cn } from '@/lib/utils'

interface LayoutProps {
  children: React.ReactNode
  showSubjectNav?: boolean
  className?: string
  fullWidth?: boolean
}

export function Layout({ 
  children, 
  showSubjectNav = false, 
  className,
  fullWidth = false 
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-14 border-b flex items-center px-4"><span className="font-bold text-foreground">星耀</span></div>
      
      <main className={cn(
        "min-h-[calc(100vh-3.5rem)]",
        !fullWidth && "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
        className
      )}>
        {children}
      </main>
      
      <footer className="border-t border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xs">星</span>
              </div>
              <span className="text-sm font-medium">星途 V2.0</span>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              面向中国高中生的六科学习辅助平台
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">关于我们</a>
              <a href="#" className="hover:text-foreground transition-colors">使用条款</a>
              <a href="#" className="hover:text-foreground transition-colors">隐私政策</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
