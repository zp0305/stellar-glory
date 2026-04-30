const line = 'cognitiveRoot:",correctPath:"';
const re = /cognitiveRoot:\s*,\s*correctPath:/g;
console.log('Match:', re.test(line));
console.log('Replace:', line.replace(re, 'cognitiveRoot:"",correctPath:'));
