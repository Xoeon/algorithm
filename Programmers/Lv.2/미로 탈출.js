function solution(maps) {
  const M = maps.length;
  const N = maps[0].length;

  let x = 0;
  let y = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (maps[i][j] === "S") {
        x = i;
        y = j;
        break;
      }
    }
  }

  function bfs(queue, target) {
    const dirs = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    while (queue.length > 0) {
      const [x, y, t] = queue.shift();

      if (maps[x][y] === target) {
        return [x, y, t];
      }

      for (let [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && nx < M && ny >= 0 && ny < N && maps[nx][ny] !== "X") {
          queue.push([nx, ny, t + 1]);
        }
      }
    }

    return -1;
  }

  const l = bfs([[x, y, 0]], "L");

  if (l === -1) {
    return -1;
  } else {
    const e = bfs([l], "E");
    return e === -1 ? -1 : e[2];
  }
}
