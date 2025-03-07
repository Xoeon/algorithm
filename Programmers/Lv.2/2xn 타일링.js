function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  const MOD = 1000000007;
  const map = new Map();

  map.set(1, 1);
  map.set(2, 2);

  for (let i = 3; i <= n; i++) {
    const sum = map.get(i - 1) + map.get(i - 2);
    map.set(i, sum > MOD ? sum % MOD : sum);
  }

  return map.get(n);
}
