const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const coins = input.map(Number);

const dp = Array(k + 1).fill(Infinity);
dp[0] = 0;

for (const coin of coins) {
  for (let i = coin; i <= k; i++) {
    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  }
}

console.log(dp[k] === Infinity ? -1 : dp[k]);
