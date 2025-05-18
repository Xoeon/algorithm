function solution(n, money) {
  const MOD = 1000000007;
  const dp = Array(n + 1).fill(0);
  dp[0] = 1; // 0원을 만드는 방법은 1가지(동전을 사용 안 하는 방법)

  for (const coin of money) {
    for (let i = coin; i <= n; i++) {
      dp[i] = (dp[i] + dp[i - coin]) % MOD;
    }
  }

  return dp[n];
}
