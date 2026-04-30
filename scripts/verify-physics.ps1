# Physics Homepage Verification Script

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Physics Homepage Verification" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check dev server
Write-Host "[1/3] Checking dev server..." -ForegroundColor Yellow
$serverRunning = Get-NetTCPConnection -LocalPort 5173 -State Listen -ErrorAction SilentlyContinue

if ($serverRunning) {
    Write-Host "  [OK] Dev server running on port 5173" -ForegroundColor Green
} else {
    Write-Host "  [ERROR] Dev server not running" -ForegroundColor Red
    Write-Host "  Run: npm run dev" -ForegroundColor Yellow
    exit 1
}

# Check page accessibility
Write-Host ""
Write-Host "[2/3] Checking page accessibility..." -ForegroundColor Yellow
$physicsUrl = "http://localhost:5173/stellar-glory/physics"

try {
    $response = Invoke-WebRequest -Uri $physicsUrl -UseBasicParsing -TimeoutSec 10
    if ($response.StatusCode -eq 200) {
        Write-Host "  [OK] Page accessible (HTTP 200)" -ForegroundColor Green
    }
} catch {
    Write-Host "  [ERROR] Cannot access page: $_" -ForegroundColor Red
    exit 1
}

# Instructions
Write-Host ""
Write-Host "[3/3] Manual Verification Steps" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Open in browser:" -ForegroundColor White
Write-Host "$physicsUrl" -ForegroundColor Green
Write-Host ""
Write-Host "Expected: 12 module cards" -ForegroundColor White
Write-Host ""
Write-Host "Row 1 (5 cards):" -ForegroundColor Cyan
Write-Host "  1. Subject Guide" -ForegroundColor Gray
Write-Host "  2. Knowledge Graph" -ForegroundColor Gray  
Write-Host "  3. Knowledge Details (badge: 42)" -ForegroundColor Gray
Write-Host "  4. Problem Strategies (badge: 90)" -ForegroundColor Gray
Write-Host "  5. Exercise Center (badge: question count)" -ForegroundColor Gray
Write-Host ""
Write-Host "Row 2 (5 cards):" -ForegroundColor Cyan
Write-Host "  6. Formula Lookup" -ForegroundColor Gray
Write-Host "  7. Wrong Questions" -ForegroundColor Gray
Write-Host "  8. Thinking Methods (badge: 7)" -ForegroundColor Gray
Write-Host "  9. Physics Vision (badge: 6)" -ForegroundColor Gray
Write-Host "  10. Learning Report" -ForegroundColor Gray
Write-Host ""
Write-Host "Row 3 (2 cards):" -ForegroundColor Cyan
Write-Host "  11. Competition Zone (badge: Coming Soon)" -ForegroundColor Gray
Write-Host "  12. Learning Path (badge: Coming Soon)" -ForegroundColor Gray
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Shortcuts:" -ForegroundColor White
Write-Host "  Ctrl+Shift+R : Force refresh" -ForegroundColor Gray
Write-Host "  F12          : DevTools console" -ForegroundColor Gray
Write-Host ""

# Open browser
Write-Host "Open browser now? (Y/N)" -ForegroundColor Yellow
$answer = Read-Host

if ($answer -eq 'Y' -or $answer -eq 'y') {
    Write-Host "Opening browser..." -ForegroundColor Green
    Start-Process $physicsUrl
}
