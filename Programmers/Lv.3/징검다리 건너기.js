function solution(stones, k) {
  let low = 1;
  let high = stones[0];
  for (let s of stones) if (s > high) high = s;

  let ans = 0;
  const canCross = (x) => {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
      count = stones[i] < x ? count + 1 : 0;
      if (count >= k) return false;
    }
    return true;
  };

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canCross(mid)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
}
