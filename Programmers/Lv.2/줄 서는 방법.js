function solution(n, k) {
  const ans = [];
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  const factorial = [1];

  for (let i = 1; i <= n; i++) {
    factorial[i] = i * factorial[i - 1];
  }

  k--; // 0-based index

  for (let i = n; i >= 1; i--) {
    const fact = factorial[i - 1];
    const index = Math.floor(k / fact);
    ans.push(nums.splice(index, 1)[0]);
    k %= fact;
  }

  return ans;
}
