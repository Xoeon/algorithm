function ceil(x) {
  const r = x % 1;
  if (r === 0) return x;
  return x > 0 ? x - r + 1 : x - r;
}

function solution(n, stations, w) {
  const range = 2 * w + 1;
  let ans = 0;
  let covered = 0; // 전파가 닿은 마지막 아파트 번호

  for (const s of stations) {
    const start = s - w;
    if (covered + 1 < start) {
      const gap = start - (covered + 1);
      ans += ceil(gap / range);
    }
    covered = s + w;
  }

  if (covered < n) {
    ans += ceil((n - covered) / range);
  }

  return ans;
}
