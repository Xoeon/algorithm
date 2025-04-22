const input = require("fs").readFileSync("./input.txt").toString().split("\n");
const N = +input[0];
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

const prefix = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    prefix[i][j] =
      arr[i - 1][j - 1] +
      prefix[i - 1][j] +
      prefix[i][j - 1] -
      prefix[i - 1][j - 1];
  }
}

let max = -Infinity;

for (let size = 1; size <= N; size++) {
  for (let i = 0; i + size <= N; i++) {
    for (let j = 0; j + size <= N; j++) {
      const x1 = i + 1;
      const y1 = j + 1;
      const x2 = i + size;
      const y2 = j + size;

      const sum =
        prefix[x2][y2] -
        prefix[x1 - 1][y2] -
        prefix[x2][y1 - 1] +
        prefix[x1 - 1][y1 - 1];

      max = Math.max(max, sum);
    }
  }
}

console.log(max);
