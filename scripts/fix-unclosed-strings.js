import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '../src/data');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;
  
  // Pattern 1: label: '待填空, note:  → label: '待填空', note:
  content = content.replace(/label:\s*'待填空,\s*note:/g, "label: '待填空', note:");

  // Pattern 1b: name: '待填空, formula:  → name: '待填空', formula:
  content = content.replace(/name:\s*'待填空,\s*formula:/g, "name: '待填空', formula:");

  // Pattern 1c: "xxx, "yyy" in arrays → "xxx", "yyy"
  content = content.replace(/"([^"\n]*?),\s+"([^"\n]*?)"/g, '"$1", "$2"');
  
  // Pattern 2: ['待填空]  → ['待填空']
  content = content.replace(/\['待填空\]/g, "['待填空']");
  
  // Pattern 3: '待填空 }  → '待填空' }
  content = content.replace(/'待填空\s*\}/g, "'待填空' }");
  
  // Pattern 4: "待填空 }  → "待填空" }
  content = content.replace(/"待填空\s*\}/g, '"待填空" }');
  
  // Pattern 5: explanation: '待填空 }  → explanation: '待填空' }
  content = content.replace(/explanation:\s*'待填空\s*\}/g, "explanation: '待填空' }");
  
  // Pattern 6: description: '待填空 }  → description: '待填空' }
  content = content.replace(/description:\s*'待填空\s*\}/g, "description: '待填空' }");

  // Pattern 7: commonMistakes: ['待填空]  → commonMistakes: ['待填空']
  content = content.replace(/commonMistakes:\s*\['待填空\]/g, "commonMistakes: ['待填空']");

  // Pattern 8: tips: ['待填空]  → tips: ['待填空']
  content = content.replace(/tips:\s*\['待填空\]/g, "tips: ['待填空']");

  // Pattern 9: decisionTree: ['待填空]  → decisionTree: ['待填空']
  content = content.replace(/decisionTree:\s*\['待填空\]/g, "decisionTree: ['待填空']");

  // Pattern 10: export const Xxx_xxx ConceptData = { → export const Xxx_xxx: ConceptData = {
  content = content.replace(/export\s+const\s+(.+?)\s+(ConceptData|ModelData)\s*=\s*\{/g, 'export const $1: $2 = {');

  // Pattern 10b: export const Xxx_xxx::: ConceptData = { → export const Xxx_xxx: ConceptData = {
  content = content.replace(/export\s+const\s+(.+?)::+\s+(ConceptData|ModelData)\s*=\s*\{/g, 'export const $1: $2 = {');

  // Pattern 11: name: 'xxx,\n  → name: 'xxx',\n  (string not closed before newline + next key)
  content = content.replace(/(name:\s+['"'])([^'"\n]*),\n(\s+[a-zA-Z_]+:)/g, "$1$2',\n$3");

  // Pattern 12: chapter: 'xxx,\n  → chapter: 'xxx',\n
  content = content.replace(/(chapter:\s+['"'])([^'"\n]*),\n(\s+[a-zA-Z_]+:)/g, "$1$2',\n$3");

  // Pattern 13: module: 'xxx,\n  → module: 'xxx',\n
  content = content.replace(/(module:\s+['"'])([^'"\n]*),\n(\s+[a-zA-Z_]+:)/g, "$1$2',\n$3");

  // Pattern 14: title: 'xxx,\n  → title: 'xxx',\n
  content = content.replace(/(title:\s+['"'])([^'"\n]*),\n(\s+[a-zA-Z_]+:)/g, "$1$2',\n$3");

  // Pattern 15: subtitle: 'xxx,\n  → subtitle: 'xxx',\n
  content = content.replace(/(subtitle:\s+['"'])([^'"\n]*),\n(\s+[a-zA-Z_]+:)/g, "$1$2',\n$3");

  // Pattern 16: approach: 'xxx,\n  → approach: 'xxx',\n
  content = content.replace(/(approach:\s+['"'])([^'"\n]*),\n(\s+[a-zA-Z_]+:)/g, "$1$2',\n$3");

  // Pattern 17: lifeApplication: 'xxx,\n  → lifeApplication: 'xxx',\n
  content = content.replace(/(lifeApplication:\s+['"'])([^'"\n]*),\n(\s+[a-zA-Z_]+:|\})/g, "$1$2',\n$3");

  // Pattern 18: core: 'xxx, essence:  → core: 'xxx', essence:
  content = content.replace(/(core:\s+['"'])([^'"\n]*),\s*(essence:)/g, "$1$2',\n  $3");

  // Pattern 19: essence: 'xxx, keyInsight:  → essence: 'xxx', keyInsight:
  content = content.replace(/(essence:\s+['"'])([^'"\n]*),\s*(keyInsight:)/g, "$1$2',\n  $3");

  // Pattern 20: keyInsight: 'xxx }  → keyInsight: 'xxx' }
  content = content.replace(/(keyInsight:\s+['"'])([^'"\n]*)\s*\}/g, "$1$2' }");

  // Pattern 21: principle: 'xxx,\n  → principle: 'xxx',\n
  content = content.replace(/(principle:\s+['"'])([^'"\n]*),\n(\s+[a-zA-Z_]+:|\})/g, "$1$2',\n$3");

  // Pattern 22: any key: 'xxx,\n followed by closing brace → key: 'xxx',\n
  content = content.replace(/(\s+[a-zA-Z_]+:\s+['"'])([^'"\n]*),\n(\s*\})/g, "$1$2',\n$3");

  // Pattern 23: key: "xxx',  → key: "xxx",
  content = content.replace(/(\s+[a-zA-Z_]+:\s+")([^"\n]*?)',\n/g, '$1$2",\n');

  // Pattern 24: key: "xxx ',  → key: "xxx ",
  content = content.replace(/(\s+[a-zA-Z_]+:\s+")([^"\n]*?) ',\n/g, '$1$2 ",\n');

  // Pattern 25: { core: "xxx', essence:  → { core: "xxx", essence:
  content = content.replace(/(\s+core:\s+")([^"\n]*?)',\s*(essence:)/g, '$1$2",\n  $3');

  // Pattern 26: essence: "xxx', keyInsight:  → essence: "xxx", keyInsight:
  content = content.replace(/(essence:\s+")([^"\n]*?)',\s*(keyInsight:)/g, '$1$2",\n  $3');

  // Pattern 27: keyInsight: "xxx ' },  → keyInsight: "xxx " },
  content = content.replace(/(keyInsight:\s+")([^"\n]*?) ' \}/g, '$1$2 " }');

  // Pattern 28: principle: "xxx',  → principle: "xxx",
  content = content.replace(/(principle:\s+")([^"\n]*?)',\n/g, '$1$2",\n');

  // Pattern 29: lifeApplication: "xxx',  → lifeApplication: "xxx",
  content = content.replace(/(lifeApplication:\s+")([^"\n]*?)',\n/g, '$1$2",\n');

  // Pattern 30: approach: "xxx,  → approach: "xxx",
  content = content.replace(/(approach:\s+")([^"\n]*?),\s*(decisionTree:)/g, '$1$2",\n    $3');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  return false;
}

let totalFixed = 0;

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverse(fullPath);
    } else if (file.endsWith('.ts')) {
      if (fixFile(fullPath)) {
        totalFixed++;
      }
    }
  }
}

console.log('Scanning for unclosed string literals...');
traverse(srcDir);
console.log(`Done! Fixed ${totalFixed} files.`);
