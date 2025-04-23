/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const M = grid.length;
  const N = grid[0].length;

  const visited = Array.from({ length: M }, () => Array(N).fill(false));
  const dirs = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  function bfs(startX, startY) {
    const queue = [[startX, startY]];
    visited[startX][startY] = true;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 &&
          nx < M &&
          ny >= 0 &&
          ny < N &&
          grid[nx][ny] === "1" &&
          !visited[nx][ny]
        ) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && grid[i][j] === "1") {
        bfs(i, j);
        count++;
      }
    }
  }

  return count;
};
