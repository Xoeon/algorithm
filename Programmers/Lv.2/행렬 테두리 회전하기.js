function solution(rows, columns, queries) {
  const matrix = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => i * columns + j + 1)
  );

  const ans = [];

  for (let [x1, y1, x2, y2] of queries) {
    const top = x1 - 1,
      left = y1 - 1,
      bottom = x2 - 1,
      right = y2 - 1;
    let prev = matrix[top][left];
    let min = prev;

    // top
    for (let y = left + 1; y <= right; y++) {
      [matrix[top][y], prev] = [prev, matrix[top][y]];
      min = Math.min(min, prev);
    }

    // right
    for (let x = top + 1; x <= bottom; x++) {
      [matrix[x][right], prev] = [prev, matrix[x][right]];
      min = Math.min(min, prev);
    }

    // bottom
    for (let y = right - 1; y >= left; y--) {
      [matrix[bottom][y], prev] = [prev, matrix[bottom][y]];
      min = Math.min(min, prev);
    }

    // left
    for (let x = bottom - 1; x >= top; x--) {
      [matrix[x][left], prev] = [prev, matrix[x][left]];
      min = Math.min(min, prev);
    }

    ans.push(min);
  }

  return ans;
}
