function solution(elements) {
  const set = new Set();
  const arr = elements.concat(elements);

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      set.add(arr.slice(j, j + i).reduce((acc, curr) => acc + curr, 0));
    }
  }

  return set.size;
}
