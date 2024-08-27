const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const N = input[0].split(' ')[0];
const M = input[0].split(' ')[1];
const arr = input[1]
  .split(' ')
  .map((str) => +str)
  .sort((a, b) => b - a);

for (let i = 1; ; i++) {
  let sum = 0;
  let len = arr[0] - i;

  for (let j = 0; j < N; j++) {
    if (arr[j] >= len) {
      sum += arr[j] - len;
    }
  }

  if (sum >= M) {
    console.log(len);
    break;
  }
}
