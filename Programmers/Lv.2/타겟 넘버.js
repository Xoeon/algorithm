function solution(numbers, target) {
  const n = numbers.length;
  const combinations = [];

  function getCombinations(index, path) {
    if (path.length > 0) combinations.push([...path]);

    for (let i = index; i < n; i++) {
      path.push(i);
      getCombinations(i + 1, path);
      path.pop();
    }
  }

  getCombinations(0, []);

  let count = 0;

  for (let arr of combinations) {
    const sum = numbers.map((num, i) => (arr.includes(i) ? -num : num));
    if (sum.reduce((acc, curr) => acc + curr, 0) === target) count++;
  }

  return count;
}
