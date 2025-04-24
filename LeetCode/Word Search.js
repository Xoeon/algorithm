/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const M = board.length;
  const N = board[0].length;

  const dirs = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  function dfs(x, y, idx) {
    if (idx === word.length) return true;

    if (x < 0 || x >= M || y < 0 || y >= N || board[x][y] !== word[idx])
      return false;

    const temp = board[x][y];
    board[x][y] = "#";

    for (const [dx, dy] of dirs) {
      const nx = x + dx,
        ny = y + dy;
      if (dfs(nx, ny, idx + 1)) return true;
    }

    board[x][y] = temp;
    return false;
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};
