const nicks = [
  "imhero111",
  "moneyman",
  "hero111",
  "imher1111",
  "hro111",
  "mmoneyman",
  "moneymann",
];

const emails = [
  "superman5@abcd.com",
  "batman432@korea.co.kr",
  "superman@abcd.com",
  "supertman5@abcd.com",
  "superman@erty.net",
  "batman42@korea.co.kr",
  "batman432@usa.com",
];

function solution(nicks, emails) {
  const isSimilar = (str1, str2, threshold) => {
    const m = str1.length;
    const n = str2.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    const lcsLen = dp[m][n];
    const deletionsNeeded = m - lcsLen + (n - lcsLen);

    return deletionsNeeded <= threshold;
  };
}

solution(nicks, emails);
