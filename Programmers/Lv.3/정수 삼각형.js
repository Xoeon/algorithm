function solution(triangle) {
  const H = triangle.length;
  if (H === 1) return triangle[0];

  const dp = Array.from({ length: H }, (_, i) => Array(i + 1).fill(0));
  dp[0][0] = triangle[0][0];
  dp[1][0] = dp[0][0] + triangle[1][0];
  dp[1][1] = dp[0][0] + triangle[1][1];

  for (let i = 1; i < H - 1; i++) {
    for (let j = 0; j < i + 1; j++) {
      dp[i + 1][j] = Math.max(dp[i + 1][j], triangle[i + 1][j] + dp[i][j]);
      dp[i + 1][j + 1] = Math.max(
        dp[i + 1][j + 1],
        triangle[i + 1][j + 1] + dp[i][j]
      );
    }
  }

  return Math.max(...dp[H - 1]);
}
