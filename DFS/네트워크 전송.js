function minTime(olive, networks) {
  const memo = new Map();

  function dfs(i, oilLeft) {
    if (i >= networks.length) return 0;
    const key = `${i},${oilLeft}`;
    if (memo.has(key)) return memo.get(key);

    const x = networks[i];
    // 1. 바르지 않는 경우
    let min = x + dfs(i + 1, oilLeft);

    // 2. 바를 수 있다면
    if (oilLeft >= x) {
      const oiled = (2 / x) + dfs(i + 2, oilLeft - x);
      min = Math.min(min, oiled);
    }

    memo.set(key, min);
    return min;
  }

  return dfs(0, olive);
}

// 예제 테스트
console.log(minTime(6, [2, 4, 4]));           // 7
console.log(minTime(10, [12, 14, 100, 1000])); // 1126