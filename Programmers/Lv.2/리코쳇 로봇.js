function solution(board) {
  board = board.map((row) => row.split(""));

  const M = board.length;
  const N = board[0].length;

  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const visited = Array.from({ length: M }, () => Array(N).fill(false));

  const bfs = (startX, startY) => {
    let head = 0;
    const queue = [[startX, startY, 0]];

    visited[startX][startY] = true;

    while (head < queue.length) {
      const [x, y, count] = queue[head++];

      if (board[x][y] === "G") return count;

      for (let [dx, dy] of dirs) {
        let nx = x;
        let ny = y;

        while (
          nx + dx >= 0 &&
          nx + dx < M &&
          ny + dy >= 0 &&
          ny + dy < N &&
          board[nx + dx][ny + dy] !== "D"
        ) {
          nx += dx;
          ny += dy;
        }

        if (!visited[nx][ny]) {
          queue.push([nx, ny, count + 1]);
          visited[nx][ny] = true;
        }
      }
    }

    return -1;
  };

  const findPos = (target) => {
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        if (board[i][j] === target) {
          return [i, j];
        }
      }
    }
  };

  const [startX, startY] = findPos("R");

  return bfs(startX, startY);
}
