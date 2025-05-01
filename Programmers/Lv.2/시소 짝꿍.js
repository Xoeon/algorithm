function solution(weights) {
  const map = new Map();
  let count = 0;

  const ratios = [
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 3],
    [3, 2],
    [3, 4],
    [4, 3],
  ];

  for (let w of weights) {
    for (let [a, b] of ratios) {
      const target = (w * a) / b;
      if (map.has(target)) {
        count += map.get(target);
      }
    }
    map.set(w, (map.get(w) || 0) + 1);
  }

  return count;
}
