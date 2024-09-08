const N = +require('fs').readFileSync('./input.txt').toString();

const d = [];
d[1] = 1;
d[2] = 3;

for (let i = 3; i <= N; i++) {
  d[i] = d[i - 1] + 2 * d[i - 2];
}

console.log(d[N] % 796796);
