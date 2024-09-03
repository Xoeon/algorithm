const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const N = input[0];
const arr = input[1].split(' ').map((str) => +str);

const hash = [];
hash[1] = 1;
hash[2] = 3;

const dp = (n) => {
  if (n === 1) return hash[1];
  if (n === 2) return hash[2];

  if (!hash[n]) {
    hash[n] = Math.max(hash[n - 2] + arr[n - 1], hash[n - 1]);
  }

  return hash[n];
};

for (let i = 1; i <= N; i++) {
  dp(i);
}

console.log(hash[N]);
