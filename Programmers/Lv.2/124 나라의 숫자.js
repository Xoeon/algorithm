function solution(n) {
  const set = [1, 2, 4];
  let result = "";

  while (n > 0) {
    let r = n % 3;
    n = Math.floor(n / 3);

    if (r === 0) {
      r = 3;
      n -= 1;
    }

    result = set[r - 1] + result;
  }

  return result;
}
