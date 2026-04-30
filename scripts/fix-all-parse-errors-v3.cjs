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
  if (trimmed.endsWith(',')) {
    return trimmed.slice(0, -1) + quoteType + ',';
  }
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
  return line + quoteType;
}

function applyGlobalFixes(content) {
  let lines = content.split('\n');
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let original = line;

    // Pattern 1: // 注释和 export/import 连在一起
    if (line.includes('//') && (line.includes('export') || line.includes('import')) && !line.trim().startsWith('export') && !line.trim().startsWith('import')) {
      line = line.replace(/(\/\/.*)(export\s+const|import\s+)/, '$1\n$2');
    }

    // Pattern 2: 数组中 "" 双引号重复
    line = line.replace(/"([^"\n]*?)""(\s*,|\s*\])/g, '"$1"$2');
    // 行尾 }]"" 或 }"" 或 ]""
    line = line.replace(/(\}|\])""(\s*,|\s*$)/g, '$1"$2');
    line = line.replace(/}""\]/g, '"}]');

    // Pattern 3: cognitiveRoot:",correctPath: → cognitiveRoot:",",correctPath:
    line = line.replace(/cognitiveRoot:\s*",\s*correctPath:/g, 'cognitiveRoot:",",correctPath:');

    // Pattern 4: wrongThinking:"...未闭合,cognitiveRoot:
    // 匹配 wrongThinking:"...内容（不含引号）,cognitiveRoot: 且内容中不含引号
    line = line.replace(/wrongThinking:\s*"([^"\n]*?)\s*,\s*cognitiveRoot:/g, 'wrongThinking:"$1",cognitiveRoot:');
    line = line.replace(/wrongThinking:\s*'([^'\n]*?)\s*,\s*cognitiveRoot:/g, "wrongThinking:'$1',cognitiveRoot:");

    // Pattern 5: correctPath:"...未闭合}, → correctPath:"..."},
    line = line.replace(/correctPath:\s*"([^"\n]*?)\s*\}\s*,?/g, 'correctPath:"$1"},');
    // correctPath:"...未闭合}], → correctPath:"..."}],
    line = line.replace(/correctPath:\s*"([^"\n]*?)\s*\]\s*,?/g, 'correctPath:"$1"}],');

    // Pattern 6: 未闭合字符串 - 检测行内是否有未闭合的引号
    const quoteType = getUnclosedQuoteType(line);
    if (quoteType) {
      line = fixLine(line, quoteType);
    }

    // Pattern 7: ['待填空] → ['待填空']
    line = line.replace(/\['待填空\]/g, "['待填空']");

    // Pattern 8: '待填空 } → '待填空' }
    line = line.replace(/'待填空\s*\}/g, "'待填空' }");
    line = line.replace(/"待填空\s*\}/g, '"待填空" }');

    // Pattern 9: formula: ", note: → formula: "", note:
    line = line.replace(/"formula":\s*",\s*"note":/g, '"formula": "", "note":');
    line = line.replace(/'formula':\s*',\s*'note':/g, "'formula': '', 'note':");

    if (line !== original) {
      lines[i] = line;
      changed = true;
    }
  }

  return { content: lines.join('\n'), changed };
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  // Step 1: 全局模式修复（对所有行）
  let result = applyGlobalFixes(content);
  content = result.content;

  // Step 2: TS Parser 诊断驱动修复
  let maxIterations = 10;
  let iteration = 0;

  while (iteration < maxIterations) {
    iteration++;
    let sf = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
    if (sf.parseDiagnostics.length === 0) break;

    const diagnostics = [...sf.parseDiagnostics];
    const fixes = diagnostics.map(d => {
      const start = d.start || 0;
      const pos = sf.getLineAndCharacterOfPosition(start);
      return {
        lineIdx: pos.line,
        code: d.code,
        msg: ts.flattenDiagnosticMessageText(d.messageText, '\n'),
      };
    });

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
    let lines = content.split('\n');

    for (const fix of uniqueFixes) {
      const lineIdx = fix.lineIdx;
      if (lineIdx >= lines.length) continue;
      let line = lines[lineIdx];

      const quoteType = getUnclosedQuoteType(line);
      if (quoteType) {
        lines[lineIdx] = fixLine(line, quoteType);
        iterationFixed = true;
        continue;
      }

      if (fix.code === 1005) {
        // 检查是否是混用引号
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
    content = lines.join('\n');
  }

  // Final check
  let sf = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
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

  if (content !== original) {
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
