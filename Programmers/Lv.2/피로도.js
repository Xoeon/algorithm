function solution(k, dungeons) {
  let maxCount = 0;

  function getPermutations(arr, n) {
    if (n === 1) return arr.map((el) => [el]);

    const results = [];
    arr.forEach((fixed, idx, array) => {
      const rest = [...array.slice(0, idx), ...array.slice(idx + 1)];
      const permutations = getPermutations(rest, n - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attached);
    });

    return results;
  }

  const permutations = getPermutations(dungeons, dungeons.length);

  permutations.forEach((order) => {
    let currentK = k;
    let count = 0;

    for (const [min, need] of order) {
      if (currentK >= min) {
        currentK -= need;
        count++;
      } else break;
    }

    maxCount = Math.max(maxCount, count);
  });

  return maxCount;
}
