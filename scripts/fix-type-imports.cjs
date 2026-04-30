/**
 * 批量修复类型导入：将 import { Type } from './types' 改为 import type { Type } from './types'
 * 然后恢复 tsconfig.app.json 中的 verbatimModuleSyntax: true
 */
const fs = require('fs');
const path = require('path');

let fixedFiles = 0;
let totalChanges = 0;

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  // Pattern: import { A, B, C } from './types'  →  import type { A, B, C } from './types'
  // Also handle: import { A } from '../types' or import { A } from '@/data/.../types'
  content = content.replace(
    /^import\s+\{([^}]+)\}\s+from\s+(['"])([^'"]*)types\2/gm,
    (match, imports, quote, prefix) => {
      totalChanges++;
      return `import type {${imports}} from ${quote}${prefix}types${quote}`;
    }
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    fixedFiles++;
    console.log('  Fixed:', filePath.replace(process.cwd(), '.'));
  }
}

function scanDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(full);
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      fixFile(full);
    }
  }
}

console.log('Scanning src/data for type imports...');
scanDir(path.join(process.cwd(), 'src/data'));

console.log(`\nFixed ${fixedFiles} files, ${totalChanges} imports.`);

// Restore verbatimModuleSyntax
const tsconfigPath = path.join(process.cwd(), 'tsconfig.app.json');
let tsconfig = fs.readFileSync(tsconfigPath, 'utf-8');
if (tsconfig.includes('"verbatimModuleSyntax": false')) {
  tsconfig = tsconfig.replace('"verbatimModuleSyntax": false,', '"verbatimModuleSyntax": true,');
  fs.writeFileSync(tsconfigPath, tsconfig, 'utf-8');
  console.log('\nRestored verbatimModuleSyntax: true in tsconfig.app.json');
} else {
  console.log('\ntsconfig.app.json already has verbatimModuleSyntax: true (or not found)');
}
