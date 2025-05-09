function solution(n, s) {
  if (s < n) return [-1];

  // 수가 가장 균등하게 분배되어 있을 때 곱이 최대
  const q = Math.floor(s / n);
  let r = s % n;

  const res = Array(n).fill(q);
  for (let i = res.length - 1; i >= 0; i--) {
    if (r-- > 0) res[i]++;
  }

  return res;
}
