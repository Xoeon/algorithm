const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const N = input[0];
const arr = input[1].split(' ').map((str) => +str);

const hash = [];
hash[1] = 1;
hash[2] = 3;

for (let i = 3; i <= N; i++) {
  hash[i] = Math.max(hash[i - 2] + arr[i - 1], hash[i - 1]);
}

console.log(hash[N]);
