const ts = require('typescript');

const code4 = 'wrongThinking:"混用导致方程数不",cognitiveRoot:",",correctPath:"xxx"';
const sf4 = ts.createSourceFile('test4.ts', code4, ts.ScriptTarget.Latest, true);
console.log('Code4 diagnostics:');
sf4.parseDiagnostics.forEach(d => {
  console.log(' ', ts.flattenDiagnosticMessageText(d.messageText, '\n'));
});

// 现在加上 correctPath 未闭合的情况（实际代码中的问题）
const code5 = 'wrongThinking:"混用导致方程数不",cognitiveRoot:",",correctPath:"xxx},{}';
const sf5 = ts.createSourceFile('test5.ts', code5, ts.ScriptTarget.Latest, true);
console.log('Code5 (unclosed correctPath) diagnostics:', sf5.parseDiagnostics.length);

// 修复 correctPath 未闭合
const code6 = 'wrongThinking:"混用导致方程数不",cognitiveRoot:",",correctPath:"xxx"},{}';
const sf6 = ts.createSourceFile('test6.ts', code6, ts.ScriptTarget.Latest, true);
console.log('Code6 (fixed correctPath) diagnostics:', sf6.parseDiagnostics.length);
