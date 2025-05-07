function findPos(maps, target) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === target) return [i, j];
    }
  }
}

function bfs(maps, start, target) {
  const M = maps.length;
  const N = maps[0].length;

  const visited = Array.from({ length: M }, () => Array(N).fill(false));
  const queue = [[...start, 0]];

  visited[start[0]][start[1]] = true;

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const [x, y, t] = queue.shift();

    if (maps[x][y] === target) return t;

    for (const [dx, dy] of dirs) {
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
        queue.push([nx, ny, t + 1]);
      }
    }
  }

  return -1;
}

function solution(maps) {
  const start = findPos(maps, "S");
  const lever = findPos(maps, "L");
  const exit = findPos(maps, "E");

  const toLever = bfs(maps, start, "L");
  if (toLever === -1) return -1;

  const toExit = bfs(maps, lever, "E");
  if (toExit === -1) return -1;

  return toLever + toExit;
}
