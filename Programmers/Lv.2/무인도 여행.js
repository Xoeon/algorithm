function solution(maps) {
  const M = maps.length;
  const N = maps[0].length;

  const visited = Array.from({ length: M }, () => Array(N).fill(false));
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const bfs = (startX, startY) => {
    const queue = [[startX, startY]];
    let head = 0;
    let sum = Number(maps[startX][startY]);
    visited[startX][startY] = true;

    while (head < queue.length) {
      const [x, y] = queue[head++];

      for (let [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 &&
          nx < M &&
          ny >= 0 &&
          ny < N &&
          !visited[nx][ny] &&
          maps[nx][ny] !== "X"
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          sum += Number(maps[nx][ny]);
        }
      }
    }

    return sum;
  };

  const ans = [];
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        ans.push(bfs(i, j));
      }
    }
  }

  return ans.length !== 0 ? ans.sort((a, b) => a - b) : [-1];
}
