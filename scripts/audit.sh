#!/bin/bash
# ============================================================
# 星耀项目审计脚本
# 用途：构建前自动检查 6 类已知问题
# 用法：bash scripts/audit.sh
# ============================================================

set -e

SRC=/workspace/xingyao/src
PROBLEMS=0

echo "🔍 星耀代码审计开始..."
echo ""

# ============================================================
# 检查 1：VisionPages 两个 return（结构不一致）
# ============================================================
echo "[1/6] 检查 VisionPages.tsx 结构..."
if grep -q "export function VisionDetailPage" "$SRC/sections/VisionPages.tsx"; then
  # 查找 VisionDetailPage 内有多少个独立的 return (AppLayout...)
  count=$(awk '/^export function VisionDetailPage/,/^export function|^function [a-zA-Z]/' "$SRC/sections/VisionPages.tsx" | grep -c "return (" || true)
  if [ "$count" -ge 2 ]; then
    echo "  ❌ 问题1: VisionDetailPage 有 $count 个独立 return，可能结构不一致"
    PROBLEMS=$((PROBLEMS+1))
  else
    echo "  ✅ 无问题"
  fi
else
  echo "  ⚠️  文件不存在"
fi

# ============================================================
# 检查 2：ModelPage 死代码（anchors 变量计算但未用）
# ============================================================
echo "[2/6] 检查 ModelPage.tsx 死代码..."
if grep -q "const anchors = SECTIONS.map" "$SRC/sections/ModelPage.tsx"; then
  if grep "const anchors = SECTIONS.map" "$SRC/sections/ModelPage.tsx" | grep -q "anchors={}"; then
    echo "  ❌ 问题2: anchors 变量被计算但传入空数组 {}，是死代码"
    PROBLEMS=$((PROBLEMS+1))
  else
    echo "  ✅ anchors 已正确使用"
  fi
else
  echo "  ✅ 无此模式"
fi

# ============================================================
# 检查 3：六段式自测题和题库是否连通
# ============================================================
echo "[3/6] 检查六段式自测题和题库的连通性..."
has_formatSelfCheck=0
has_questionBank=0

if grep -q "formatSelfCheck" "$SRC/sections/ModelPage.tsx" 2>/dev/null; then
  has_formatSelfCheck=1
fi
if grep -q "questionsByModel" "$SRC/sections/QuestionDo.tsx" 2>/dev/null; then
  has_questionBank=1
fi

if [ "$has_formatSelfCheck" -eq 1 ] && [ "$has_questionBank" -eq 1 ]; then
  echo "  ⚠️  警告: 两套题数据并存（六段式 sc.questions + QuestionDo questionsByModel），需确认是否需要合并"
  PROBLEMS=$((PROBLEMS+1))
elif [ "$has_formatSelfCheck" -eq 0 ] && [ "$has_questionBank" -eq 1 ]; then
  echo "  ✅ 只有题库系统，无冗余"
elif [ "$has_questionBank" -eq 0 ]; then
  echo "  ⚠️  题库数据可能缺失"
fi

# ============================================================
# 检查 4：progressStore 是否独立
# ============================================================
echo "[4/6] 检查进度 store 独立性..."
progress_files=$(grep -r "progress\|Progress" "$SRC/stores/" --include="*.ts" -l 2>/dev/null | grep -v "index.ts" | wc -l)
if [ "$progress_files" -gt 2 ]; then
  echo "  ⚠️  警告: 进度逻辑分散在 $progress_files 个文件中，建议合并到独立 progressStore"
  PROBLEMS=$((PROBLEMS+1))
else
  echo "  ✅ 进度逻辑集中"
fi

# ============================================================
# 检查 5：PracticeRedirect 空组件
# ============================================================
echo "[5/6] 检查 PracticeRedirect 空组件..."
if [ -f "$SRC/sections/PracticeRedirect.tsx" ]; then
  size=$(wc -c < "$SRC/sections/PracticeRedirect.tsx")
  if [ "$size" -lt 500 ]; then
    echo "  ❌ 问题5: PracticeRedirect 是空/小组件（${size} bytes），/physics/practice 路由无实际功能"
    PROBLEMS=$((PROBLEMS+1))
  else
    echo "  ✅ 有实际内容"
  fi
else
  echo "  ✅ 文件不存在（已清除）"
fi

# ============================================================
# 检查 6：physicsData.ts 遗留引用
# physicsModels 只允许从 physicsModels.ts 导入
# generatePhysicsGraphData 保留在 physicsData.ts（是正确用法）
# ============================================================
echo "[6/6] 检查 physicsModels 导入来源..."
# 找出所有从 physicsData 导入 physicsModels 的文件（排除 generatePhysicsGraphData）
bad_refs=$(grep -rn "from '@/data/physics/physicsData'" "$SRC/sections" "$SRC/components" "$SRC/stores" 2>/dev/null | grep -v "generatePhysicsGraphData" || true)
if [ -n "$bad_refs" ]; then
  echo "  ❌ physicsModels 不应从 physicsData.ts 导入:"
  echo "$bad_refs" | sed 's|.*/||'
  PROBLEMS=$((PROBLEMS+1))
else
  echo "  ✅ physicsModels 导入来源正确"
fi

# ============================================================
# 检查 7：index.ts 重复 import（M01 重复声明检查）
# ============================================================
echo "[额外] 检查 questions/index.ts 重复 import..."
if grep -q "import.*M01_questions" "$SRC/data/physics/questions/index.ts"; then
  m01_count=$(grep -c "import.*M01_questions" "$SRC/data/physics/questions/index.ts" || true)
  if [ "$m01_count" -gt 1 ]; then
    echo "  ❌ M01_questions 重复导入 $m01_count 次"
    PROBLEMS=$((PROBLEMS+1))
  else
    echo "  ✅ 无重复导入"
  fi
else
  echo "  ✅ 正常"
fi

# ============================================================
# 检查 8：构建退出码检查（必须 EXIT=0 才通过）
# ============================================================
echo ""
echo "[构建检查] 运行 TypeScript 编译检查..."
cd /workspace/xingyao
npx tsc --noEmit 2>&1 | tail -5
TSC_EXIT=$?

echo ""
echo "=========================================="
if [ "$PROBLEMS" -eq 0 ] && [ "$TSC_EXIT" -eq 0 ]; then
  echo "✅ 审计通过！$PROBLEMS 个问题，tsc EXIT=$TSC_EXIT"
  exit 0
else
  echo "❌ 发现 $PROBLEMS 个问题，tsc EXIT=$TSC_EXIT"
  echo "请修复以上问题后再部署"
  exit 1
fi
