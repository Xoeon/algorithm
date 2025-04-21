function solution(n) {
  const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

  const dx = [1, 0, -1];
  const dy = [0, 1, -1];

  let x = 0,
    y = 0;
  let dir = 0;
  let num = 1;
  const max = (n * (n + 1)) / 2;

  while (num <= max) {
    triangle[x][y] = num++;

    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (nx >= 0 && nx < n && ny >= 0 && ny < n && triangle[nx][ny] === 0) {
      x = nx;
      y = ny;
    } else {
      dir = (dir + 1) % 3;
      x = x + dx[dir];
      y = y + dy[dir];
    }
  }

  return triangle.flat();
}
