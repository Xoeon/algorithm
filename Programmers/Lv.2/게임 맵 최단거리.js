function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

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
          maps[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }

    return -1;
  }

  return bfs();
}
