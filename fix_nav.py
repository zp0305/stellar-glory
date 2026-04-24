#!/usr/bin/env python3
"""Fix all navigation issues in one shot."""
import os

base = '/workspace/xingyao/src/sections'

files_to_fix = {
    f'{base}/QuestionBankSelect.tsx': [
        ("import { Layout } from '@/components/Layout';\n", "import { AppLayout } from '@/components/layout/Navigation'\n"),
        ("<Layout showSubjectNav>\n", "<AppLayout showSubjectNav>\n"),
        ("</Layout>\n", "</AppLayout>\n"),
    ],
    f'{base}/VisionHome.tsx': [
        ("import { Layout } from '@/components/Layout';\n", "import { AppLayout } from '@/components/layout/Navigation'\n"),
        ("<Layout showSubjectNav>\n", "<AppLayout showSubjectNav>\n"),
        ("</Layout>\n", "</AppLayout>\n"),
    ],
    f'{base}/ModelPage.tsx': [
        ("import { Layout } from '@/components/Layout';\n", "import { AppLayout } from '@/components/layout/Navigation'\n"),
        ("<Layout showSubjectNav>\n", "<AppLayout showSubjectNav>\n"),
        ("</Layout>\n", "</AppLayout>\n"),
    ],
    f'{base}/QuestionPage.tsx': [
        ("import { Layout } from '@/components/Layout';\n", "import { AppLayout } from '@/components/layout/Navigation'\n"),
        ("<Layout showSubjectNav>\n", "<AppLayout showSubjectNav>\n"),
        ("</Layout>\n", "</AppLayout>\n"),
    ],
    f'{base}/ModelList.tsx': [
        ("import { Layout } from '@/components/Layout';\n", "import { AppLayout } from '@/components/layout/Navigation'\n"),
        ("<Layout showSubjectNav>\n", "<AppLayout showSubjectNav>\n"),
        ("</Layout>\n", "</AppLayout>\n"),
    ],
}

for filepath, replacements in files_to_fix.items():
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        for old, new in replacements:
            content = content.replace(old, new)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'OK {filepath}')
    except Exception as e:
        print(f'FAIL {filepath}: {e}')

# Fix App.tsx - remove ChapterPracticePage wrapper
app_path = '/workspace/xingyao/src/App.tsx'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

# Remove the ChapterPracticePageWrapper
app_content = app_content.replace(
    "function ChapterPracticePageWrapper() {\n  const path = window.location.pathname\n  const chapterId = path.split('/').pop() || ''\n  return <ChapterPracticePage chapterId={chapterId} />\n}\n",
    ""
)
app_content = app_content.replace(
    "<Route path=\"/physics/practice/chapter/:chapterId\" element={<ChapterPracticePage />} />\n",
    "<Route path=\"/physics/practice/chapter/:chapterId\" element={<ChapterPracticePage />} />\n"
)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_content)
print('OK App.tsx (removed wrapper)')

print('ALL DONE')
