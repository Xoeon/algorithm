function solution(X, Y) {
  const xHash = {};
  const yHash = {};

  const arr = [];

  // x 배열을 순회하며 각 숫자(key)가 몇 개 있는지(value) 저장
  for (let char of X) {
    xHash[char] = (xHash[char] || 0) + 1;
  }

  // y 배열을 순회하며 각 숫자(key)가 몇 개 있는지(value) 저장
  for (let char of Y) {
    yHash[char] = (yHash[char] || 0) + 1;
  }

  for (let i = 9; i >= 0; i--) {
    // 9부터 0까지 내림차순으로 큰 값부터 처리
    const key = String(i);
    if (xHash[key] && yHash[key]) {
      const count = Math.min(xHash[key], yHash[key]);
      result += key.repeat(count); // 메모리 절약을 위해 바로 문자열에 추가
    }
  }

  if (arr.length === 0) return '-1';

  arr.sort((a, b) => b - a);
  const ans = arr.join('');

  return ans[0] === '0' ? '0' : ans;
}
