function countOccurrences(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}

function solution(s) {
  const parsed = s
    .substring(2, s.length - 2)
    .split('},{')
    .map((char) => char.split(',').map(Number))
    .sort((a, b) => a.length - b.length);

  if (parsed.length === 1) return parsed[0];

  const ans = [];

  for (let i = 0; i < parsed.length; i++) {
    if (i === 0) {
      ans.push(parsed[i][0]);
      continue;
    }

    const before = countOccurrences(ans);
    const after = countOccurrences(parsed[i]);

    const addedElement = Object.keys(after)
      .filter((num) => after[num] > (before[num] || 0))
      .map(Number);

    ans.push(...addedElement);
  }

  return ans;
}
