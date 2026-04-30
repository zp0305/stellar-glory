const line = 'abc}]""';
const re = /(\}|\])""\s*$/g;
console.log('Line:', line);
console.log('Match:', re.test(line));
console.log('Replace:', line.replace(re, '$1",'));

// 测试 routines/01.ts 的实际行
const line2 = 'errorMap: [{wrongThinking:"死套 v = v₀ + at，忽略题目是否真的给v₀",cognitiveRoot:",",correctPath:"核心是识别已知量类型，按\\"给什么→选什么\\"的信号触发，而非背公式顺},{wrongThinking:"x = v₀t + ½at² v² - v₀² = 2ax 混用导致方程数不",cognitiveRoot:",",correctPath:"核心是识别已知量类型，按\\"给什么→选什么\\"的信号触发，而非背公式顺}]"",';
console.log('Line2 match:', re.test(line2));
console.log('Line2 replace:', line2.replace(re, '$1",'));
