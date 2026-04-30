const ts = require('typescript');

// 问题代码：缺少逗号分隔
const code1 = 'cognitiveRoot:",correctPath:"xxx"';
const sf1 = ts.createSourceFile('test1.ts', code1, ts.ScriptTarget.Latest, true);
console.log('Code1 (missing comma) diagnostics:', sf1.parseDiagnostics.length);

// 修复后：加了逗号
const code2 = 'cognitiveRoot:",",correctPath:"xxx"';
const sf2 = ts.createSourceFile('test2.ts', code2, ts.ScriptTarget.Latest, true);
console.log('Code2 (fixed) diagnostics:', sf2.parseDiagnostics.length);

// 还有 wrongThinking 未闭合的情况
const code3 = 'wrongThinking:"混用导致方程数不,cognitiveRoot:",",correctPath:"xxx"';
const sf3 = ts.createSourceFile('test3.ts', code3, ts.ScriptTarget.Latest, true);
console.log('Code3 (unclosed wrongThinking) diagnostics:', sf3.parseDiagnostics.length);

// 修复 wrongThinking
const code4 = 'wrongThinking:"混用导致方程数不",cognitiveRoot:",",correctPath:"xxx"';
const sf4 = ts.createSourceFile('test4.ts', code4, ts.ScriptTarget.Latest, true);
console.log('Code4 (fixed wrongThinking) diagnostics:', sf4.parseDiagnostics.length);
