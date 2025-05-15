function solution(sticker) {
  const n = sticker.length;
  if (n === 1) return sticker[0];

  // 1. 첫 번째 스티커를 뜯는 경우
  let prev1 = sticker[0],
    curr1 = sticker[0];
  for (let i = 2; i < n - 1; i++) {
    [prev1, curr1] = [curr1, Math.max(curr1, prev1 + sticker[i])];
  }

  // 2. 첫 번째 스티커를 뜯지 않는 경우
  let prev2 = 0,
    curr2 = sticker[1];
  for (let i = 2; i < n; i++) {
    [prev2, curr2] = [curr2, Math.max(curr2, prev2 + sticker[i])];
  }

  return Math.max(curr1, curr2);
}
