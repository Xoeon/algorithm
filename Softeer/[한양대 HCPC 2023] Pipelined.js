const [N, s] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const arr = s
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(arr.pop() + +N - 1);
