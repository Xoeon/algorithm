function solution(arr) {
  let count = [0, 0];

  function compress(x, y, size) {
    let first = arr[x][y];
    let isSame = true;

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[i][j] !== first) {
          isSame = false;
          break;
        }
      }
      if (!isSame) break;
    }

    if (isSame) {
      count[first]++;
      return;
    }

    let half = size / 2;
    compress(x, y, half);
    compress(x, y + half, half);
    compress(x + half, y, half);
    compress(x + half, y + half, half);
  }

  compress(0, 0, arr.length);
  return count;
}
