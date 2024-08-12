const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let maze = input.slice(1).map((line) => line.split('').map(Number));

/* 방향 벡터 */
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/* 방문 체크 배열 */
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const queue = [[0, 0, 1]];
visited[0][0] = true;

function bfs() {
  let head = 0;

  while (head < queue.length) {
    const [x, y, dist] = queue[head++];

    if (x === N - 1 && y === M - 1) {
      return dist;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        maze[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
}

console.log(bfs());
