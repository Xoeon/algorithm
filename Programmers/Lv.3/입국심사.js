function solution(n, times) {
  const canProcess = (t) => {
    let sum = 0;
    for (const time of times) {
      sum += Math.floor(t / time);
    }
    return sum >= n;
  };

  let low = 1;
  let high = Math.max(...times) * n;
  let ans = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (canProcess(mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}
