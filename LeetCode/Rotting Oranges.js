/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const M = grid.length;
  const N = grid[0].length;
  const dirs = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const queue = [];
  let freshCount = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 2) queue.push([i, j, 0]);
      else if (grid[i][j] === 1) freshCount++;
    }
  }

  let time = 0;
  while (queue.length) {
    const [x, y, t] = queue.shift();
    time = t;

    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < M && ny >= 0 && ny < N && grid[nx][ny] === 1) {
        grid[nx][ny] = 2;
        freshCount--;
        queue.push([nx, ny, t + 1]);
      }
    }
  }

  return freshCount === 0 ? time : -1;
};
