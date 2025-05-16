function solution(gems) {
  const totalKinds = new Set(gems).size;
  const countMap = new Map();
  let answer = [0, gems.length - 1];
  let start = 0,
    end = 0;

  countMap.set(gems[start], 1);

  while (start < gems.length && end < gems.length) {
    if (countMap.size === totalKinds) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start, end];
      }
      // start를 줄여 구간 축소
      const cnt = countMap.get(gems[start]) - 1;
      if (cnt === 0) countMap.delete(gems[start]);
      else countMap.set(gems[start], cnt);
      start++;
    } else {
      // 보석 종류가 부족할 경우 end를 늘려 구간 확장
      end++;
      if (end === gems.length) break;
      countMap.set(gems[end], (countMap.get(gems[end]) || 0) + 1);
    }
  }

  // 1-based index
  return [answer[0] + 1, answer[1] + 1];
}
