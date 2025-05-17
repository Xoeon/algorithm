function solution(board) {
  const N = board.length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const dist = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(4).fill(Infinity))
  );

  const queue = [];

  // (0, 0)에서 네 방향으로 출발
  for (let dir = 0; dir < 4; dir++) {
    dist[0][0][dir] = 0;
    queue.push([0, 0, 0, dir]);
  }

  let head = 0;
  while (head < queue.length) {
    const [x, y, cost, prevDir] = queue[head++];

    for (let newDir = 0; newDir < 4; newDir++) {
      const nx = x + dx[newDir];
      const ny = y + dy[newDir];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N || board[nx][ny] === 1)
        continue;

      const addCost = prevDir === newDir ? 100 : 600;
      const newCost = cost + addCost;

      if (dist[nx][ny][newDir] > newCost) {
        dist[nx][ny][newDir] = newCost;
        queue.push([nx, ny, newCost, newDir]);
      }
    }
  }

  return Math.min(...dist[N - 1][N - 1]);
}
