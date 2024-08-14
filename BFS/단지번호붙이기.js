const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];
const map = input.slice(1).map((line) => line.split('').map(Number));

let visited = Array.from({ length: N }, () => Array(N).fill(false));
let count = 0;

const bfs = (startX, startY) => {
  let head = 0;

  const queue = [[startX, startY]];
  visited[startX][startY] = true;

  count = 1;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (head < queue.length) {
    const [x, y] = queue[head++];

    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        map[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
        count++;
      }
    }
  }
  return true;
};

const solution = () => {
  let answer = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        if (bfs(i, j)) {
          answer.push(count);
        }
        count = 0;
      }
    }
  }

  console.log(answer.length + '\n' + answer.sort((a, b) => a - b).join('\n'));
};

solution();
