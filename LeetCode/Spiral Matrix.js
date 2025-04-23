/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const M = matrix.length;
  const N = matrix[0].length;

  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = Array.from({ length: M }, () => Array(N).fill(false));

  let count = 0;
  let x = 0,
    y = 0;

  const ans = [matrix[x][y]];
  visited[x][y] = true;

  while (ans.length < M * N) {
    let [dx, dy] = dirs[count % 4];
    let nx = x + dx;
    let ny = y + dy;

    if (nx < 0 || nx >= M || ny < 0 || ny >= N || visited[nx][ny]) {
      [dx, dy] = dirs[++count % 4];
      nx = x + dx;
      ny = y + dy;
    }
    ans.push(matrix[nx][ny]);
    visited[nx][ny] = true;

    x = nx;
    y = ny;
  }

  return ans;
};
