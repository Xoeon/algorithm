function solution(s) {
  if (s.length < 2) return s.length;

  let maxLen = 0;

  const expand = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      maxLen = Math.max(maxLen, r - l + 1);
      l--;
      r++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i); // 홀수 길이 팰린드롬
    expand(i, i + 1); // 짝수 길이 팰린드롬
  }

  return maxLen;
}
