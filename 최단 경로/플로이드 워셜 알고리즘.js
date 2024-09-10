const INF = 1e9; // 무한을 의미하는 값으로 10억 설정

const input = require('fs').readFileSync('./input.txt').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));

for (let i = 1; i <= n; i++) {
  graph[i][i] = 0;
}

arr.forEach((line) => {
  const [a, b, c] = line;
  graph[a][b] = c; // A->B 비용은 C
});

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (graph[i][j] === INF) {
      console.log('INFINITY');
    } else {
      console.log(graph[i][j]);
    }
  }
}
