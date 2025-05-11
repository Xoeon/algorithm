const maze = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 0, 0],
];

const N = maze.length;
const M = maze[0].length;

/* 방향 벡터 */
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [false, false])
);

const queue = [[0, 0, 0, 0]]; // x, y, dist, usedKey(0 or 1)
visited[0][0][0] = true;

function bfs() {
  let head = 0;

  while (head < queue.length) {
    const [x, y, dist, usedKey] = queue[head++];

    if (x === N - 1 && y === M - 1) {
      return dist;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        // 다음 칸이 통로이고, 열쇠 사용 여부로는 방문하지 않은 경우
        if (maze[nx][ny] === 1 && !visited[nx][ny][usedKey]) {
          visited[nx][ny][usedKey] = true;
          queue.push([nx, ny, dist + 1, usedKey]);
        }

        // 다음 칸이 벽이고, 아직 열쇠를 사용하지 않은 경우
        if (maze[nx][ny] === 0 && usedKey === 0 && !visited[nx][ny][1]) {
          visited[nx][ny][1] = true;
          queue.push([nx, ny, dist + 1, 1]);
        }
      }
    }
  }

  return -1;
}

console.log(bfs());
