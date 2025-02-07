function solution(n, left, right) {
  const arr = [];

  for (let index = left; index <= right; index++) {
    const i = Math.floor(index / n);
    const j = index % n;

    arr.push(Math.max(i, j) + 1);
  }

  return arr;
}
