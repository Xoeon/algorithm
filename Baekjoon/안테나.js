const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const N = input[0];
const arr = input[1]
  .split(' ')
  .map((str) => +str)
  .sort((a, b) => a - b);

const mid = arr[Math.floor((N - 1) / 2)];

console.log(mid);
