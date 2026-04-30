const ts = require('typescript');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/data');

let totalFiles = 0;
let fixedFiles = 0;
let manualFiles = [];

function getUnclosedQuoteType(line) {
  let inSingle = false, inDouble = false;
  let escape = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (escape) { escape = false; continue; }
    if (ch === '\\') { escape = true; continue; }
    if (ch === "'" && !inDouble) { inSingle = !inSingle; }
    else if (ch === '"' && !inSingle) { inDouble = !inDouble; }
  }
  if (inSingle) return "'";
  if (inDouble) return '"';
  return null;
}

function fixLine(line, quoteType) {
  const trimmed = line.trimEnd();
  // 如果行尾是逗号，引号加在逗号前
  if (trimmed.endsWith(',')) {
    return trimmed.slice(0, -1) + quoteType + ',';
  }
  // 如果行尾是 } 或 ]，引号加在括号前
  if (trimmed.endsWith(' }')) {
    return trimmed.slice(0, -2) + quoteType + ' }';
  }
  if (trimmed.endsWith(' ]')) {
    return trimmed.slice(0, -2) + quoteType + ' ]';
  }
  if (trimmed.endsWith('}') && !trimmed.endsWith('"}') && !trimmed.endsWith("'}")) {
    return trimmed.slice(0, -1) + quoteType + '}';
  }
  if (trimmed.endsWith(']') && !trimmed.endsWith('"]') && !trimmed.endsWith("']")) {
    return trimmed.slice(0, -1) + quoteType + ']';
  }
  // 否则在行尾加引号
  return line + quoteType;
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;
  let lines = content.split('\n');
  
  let sf = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
  if (sf.parseDiagnostics.length === 0) return false;
  
  let maxIterations = 10;
  let iteration = 0;
  let anyFix = false;
  
  while (sf.parseDiagnostics.length > 0 && iteration < maxIterations) {
    iteration++;
    const diagnostics = [...sf.parseDiagnostics];
    
    // 收集需要修复的行，按行号从大到小排序
    const fixes = diagnostics.map(d => {
      const start = d.start || 0;
      const pos = sf.getLineAndCharacterOfPosition(start);
      return {
        lineIdx: pos.line,
        char: pos.character,
        code: d.code,
        msg: ts.flattenDiagnosticMessageText(d.messageText, '\n'),
        start: start
      };
    });
    
    // 去重：同一行只修一次
    const seenLines = new Set();
    const uniqueFixes = [];
    for (const f of fixes) {
      if (!seenLines.has(f.lineIdx)) {
        seenLines.add(f.lineIdx);
        uniqueFixes.push(f);
      }
    }
    uniqueFixes.sort((a, b) => b.lineIdx - a.lineIdx);
    
    let iterationFixed = false;
    
    for (const fix of uniqueFixes) {
      const lineIdx = fix.lineIdx;
      if (lineIdx >= lines.length) continue;
      let line = lines[lineIdx];
      
      // 模式1: // 注释和 export/import 连在一起
      if (line.includes('//') && (line.includes('export') || line.includes('import')) && !line.trim().startsWith('export') && !line.trim().startsWith('import')) {
        lines[lineIdx] = line.replace(/(\/\/.*)(export\s+const|import\s+)/, '$1\n$2');
        iterationFixed = true;
        continue;
      }
      
      // 模式2: 数组中 "" 双引号重复
      if (line.includes('""')) {
        lines[lineIdx] = line.replace(/"([^"\n]*?)""(,|\s*\])/g, '"$1"$2');
        if (lines[lineIdx] !== line) {
          iterationFixed = true;
          continue;
        }
      }
      
      // 模式3: 未闭合字符串 (code 1002)
      const quoteType = getUnclosedQuoteType(line);
      if (quoteType) {
        lines[lineIdx] = fixLine(line, quoteType);
        iterationFixed = true;
        continue;
      }
      
      // 模式4: code 1005 混用引号
      if (fix.code === 1005) {
        const mixMatch = line.match(/:\s*"([^"\n]*?)'\s*[,}\]]/);
        if (mixMatch) {
          lines[lineIdx] = line.replace(/:"([^"\n]*?)'\s*([,}\]])/, ':"$1"$2');
          iterationFixed = true;
          continue;
        }
        const mixMatch2 = line.match(/:\s*'([^'\n]*?)"\s*[,}\]]/);
        if (mixMatch2) {
          lines[lineIdx] = line.replace(/:'([^'\n]*?)"\s*([,}\]])/, ':"$1"$2');
          iterationFixed = true;
          continue;
        }
      }
    }
    
    if (!iterationFixed) break;
    
    anyFix = true;
    content = lines.join('\n');
    sf = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
  }
  
  if (sf.parseDiagnostics.length > 0) {
    const first = sf.parseDiagnostics[0];
    const pos = sf.getLineAndCharacterOfPosition(first.start || 0);
    manualFiles.push({
      file: filePath,
      line: pos.line + 1,
      code: first.code,
      msg: ts.flattenDiagnosticMessageText(first.messageText, '\n').substring(0, 80)
    });
  }
  
  if (anyFix) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

function traverse(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      traverse(fullPath);
    } else if (entry.name.endsWith('.ts')) {
      totalFiles++;
      if (fixFile(fullPath)) {
        fixedFiles++;
        console.log(`Fixed: ${fullPath}`);
      }
    }
  }
}

console.log('Scanning all .ts files in src/data for parse errors...');
traverse(srcDir);

console.log(`\n====================================`);
console.log(`Total files scanned: ${totalFiles}`);
console.log(`Files fixed: ${fixedFiles}`);
console.log(`Files need manual fix: ${manualFiles.length}`);

if (manualFiles.length > 0) {
  console.log(`\nManual fix needed:`);
  for (const m of manualFiles) {
    console.log(`  ${m.file}:${m.line} [Code ${m.code}] ${m.msg}`);
  }
}
