function getCombinations(str, n, start = 0, path = "", map) {
  if (path.length === n) {
    map.set(path, (map.get(path) || 0) + 1);
    return;
  }

  for (let i = start; i < str.length; i++) {
    getCombinations(str, n, i + 1, path + str[i], map);
  }
}

function solution(orders, course) {
  const ans = [];

  // 1. 각 주문을 정렬해 조합 생성 기준을 동일하게 맞춤.
  orders = orders.map((order) => order.split("").sort().join(""));

  for (let count of course) {
    const map = new Map();

    // 2. 각 주문에 대한 조합 생성
    for (let order of orders) {
      getCombinations(order, count, 0, "", map);
    }

    // 3. 조합이 없거나 2번 이상 등장한 조합이 없다면 스킵
    if (map.size === 0) continue;

    let maxCount = Math.max(...map.values());
    if (maxCount < 2) continue;

    // 4. 최빈 조합 ans에 추가
    for (const [combo, freq] of map) {
      if (freq === maxCount) ans.push(combo);
    }
  }

  return ans.sort();
}
