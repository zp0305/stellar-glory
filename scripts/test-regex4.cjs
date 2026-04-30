const ts = require('typescript');

// 修复 correctPath 未闭合
const code6 = 'wrongThinking:"混用导致方程数不",cognitiveRoot:",",correctPath:"xxx"},{}';
const sf6 = ts.createSourceFile('test6.ts', code6, ts.ScriptTarget.Latest, true);
console.log('Code6 diagnostics:');
sf6.parseDiagnostics.forEach(d => {
  console.log(' ', ts.flattenDiagnosticMessageText(d.messageText, '\n'));
});

// 应该是 correctPath:"xxx"}, 然后 {}
const code7 = 'wrongThinking:"混用导致方程数不",cognitiveRoot:",",correctPath:"xxx"}, {next:"val"}';
const sf7 = ts.createSourceFile('test7.ts', code7, ts.ScriptTarget.Latest, true);
console.log('Code7 diagnostics:', sf7.parseDiagnostics.length);
