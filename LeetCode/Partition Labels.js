/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  // 1. 각 문자의 마지막 인덱스 기록
  const lastIndex = new Map();

  for (let i = 0; i < s.length; i++) {
    lastIndex.set(s[i], i);
  }

  // 2. 파티션 탐색
  let start = 0,
    end = 0;
  const result = [];

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastIndex.get(s[i]));
    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
};
