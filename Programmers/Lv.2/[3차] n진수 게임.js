function solution(n, t, m, p) {
  const arr = [];
  const length = p + (t - 1) * m;

  let num = 0;
  let count = 0;

  while (arr.length < length) {
    const convertedNum = count.toString(n);
    arr.push(...convertedNum.split(''));
    count++;
  }

  let ans = '';

  for (let i = 0; i < t; i++) {
    ans += arr[p - 1 + m * i];
  }

  return ans.toUpperCase();
}
