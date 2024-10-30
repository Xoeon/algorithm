function solution(k, tangerine) {
  const count = {};

  for (let t of tangerine) {
    count[t] = count[t] + 1 || 1;
  }

  const sorted_count = Object.values(count).sort((a, b) => b - a);

  let acc = 0;
  for (let i = 0; i < sorted_count.length; i++) {
    if (acc + sorted_count[i] < k) {
      acc += sorted_count[i];
    } else {
      return i + 1;
    }
  }
}
