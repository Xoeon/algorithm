const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];
const map = input.slice(1).map((line) => line.split('').map(Number));

let visited = Array.from({ length: N }, () => Array(N).fill(false));

let count = 0;
let answer = [];

const dfs = (x, y) => {
  if (x <= -1 || x >= N || y <= -1 || y >= N) {
    return false;
  }

  if (map[x][y] === 1 && !visited[x][y]) {
    visited[x][y] = true;
    count++;

    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
    return true;
  }

  return false;
};

const solution = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (dfs(i, j)) {
        answer.push(count);
        count = 0;
      }
    }
  }

  console.log(answer.length + '\n' + answer.sort((a, b) => a - b).join('\n'));
};

solution();
