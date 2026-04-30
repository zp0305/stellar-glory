# 物理学科主页验证脚本
# 使用方法：在 PowerShell 中运行 .\verify-physics-homepage.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  物理学科主页模块卡片验证脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 1. 检查开发服务器是否运行
Write-Host "[1/4] 检查开发服务器状态..." -ForegroundColor Yellow
$serverPort = 5173
$serverRunning = Get-NetTCPConnection -LocalPort $serverPort -State Listen -ErrorAction SilentlyContinue

if ($serverRunning) {
    Write-Host "  ✅ 开发服务器正在运行 (端口 $serverPort)" -ForegroundColor Green
} else {
    Write-Host "  ❌ 开发服务器未运行" -ForegroundColor Red
    Write-Host "  请运行: npm run dev" -ForegroundColor Yellow
    exit 1
}

# 2. 尝试访问物理学科主页
Write-Host ""
Write-Host "[2/4] 尝试访问物理学科主页..." -ForegroundColor Yellow
$baseUrl = "http://localhost:$serverPort"
$physicsUrl = "$baseUrl/stellar-glory/physics"

try {
    $response = Invoke-WebRequest -Uri $physicsUrl -UseBasicParsing -TimeoutSec 10
    $statusCode = $response.StatusCode
    
    if ($statusCode -eq 200) {
        Write-Host "  ✅ 页面访问成功 (HTTP $statusCode)" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  页面返回状态码: $statusCode" -ForegroundColor Yellow
    }
} catch {
    Write-Host "  ❌ 无法访问页面: $_" -ForegroundColor Red
    exit 1
}

# 3. 检查构建状态
Write-Host ""
Write-Host "[3/4] 检查 TypeScript 类型..." -ForegroundColor Yellow
$tscResult = & npx tsc --noEmit 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✅ TypeScript 类型检查通过" -ForegroundColor Green
} else {
    Write-Host "  ⚠️  发现类型错误，请检查代码" -ForegroundColor Yellow
    Write-Host "  运行: npx tsc --noEmit" -ForegroundColor Gray
}

# 4. 提供手动验证指引
Write-Host ""
Write-Host "[4/4] 手动验证指引" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "请在浏览器中打开以下URL：" -ForegroundColor White
Write-Host "$physicsUrl" -ForegroundColor Green
Write-Host ""
Write-Host "验证要点：" -ForegroundColor White
Write-Host "  1. 首次访问应显示 loading（1-3秒）" -ForegroundColor Gray
Write-Host "  2. 加载完成后应显示 12 个模块卡片：" -ForegroundColor Gray
Write-Host ""
Write-Host "  第一排（5个）：" -ForegroundColor Cyan
Write-Host "    • 学科指南 " -ForegroundColor Gray
Write-Host "    • 认知图谱 " -ForegroundColor Gray
Write-Host "    • 知识详解 📚 (应显示'42个')" -ForegroundColor Gray
Write-Host "    • 解题套路 💡 (应显示'90条')" -ForegroundColor Gray
Write-Host "    • 练习中心 🎯 (应显示题数)" -ForegroundColor Gray
Write-Host ""
Write-Host "  第二排（5个）：" -ForegroundColor Cyan
Write-Host "    • 公式速查 " -ForegroundColor Gray
Write-Host "    • 错题本 🧪" -ForegroundColor Gray
Write-Host "    • 思维方法 ⚡ (应显示'7个')" -ForegroundColor Gray
Write-Host "    • 物理视界 ️ (应显示'6个')" -ForegroundColor Gray
Write-Host "    • 学习报告 " -ForegroundColor Gray
Write-Host ""
Write-Host "  第三排（2个）：" -ForegroundColor Cyan
Write-Host "    • 竞赛专区 🏆 (即将上线)" -ForegroundColor Gray
Write-Host "    • 学习路径 🛤️ (即将上线)" -ForegroundColor Gray
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "快捷键：" -ForegroundColor White
Write-Host "  • Ctrl+Shift+R : 强制刷新页面" -ForegroundColor Gray
Write-Host "  • F12          : 打开开发者工具查看控制台" -ForegroundColor Gray
Write-Host ""

# 5. 打开浏览器（可选）
Write-Host "是否现在打开浏览器？(Y/N)" -ForegroundColor Yellow
$openBrowser = Read-Host

if ($openBrowser -eq 'Y' -or $openBrowser -eq 'y') {
    Write-Host "正在打开浏览器..." -ForegroundColor Green
    Start-Process $physicsUrl
}

Write-Host ""
Write-Host "验证完成后，请将结果反馈给开发团队。" -ForegroundColor Cyan
Write-Host ""
