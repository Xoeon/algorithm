const arr = [
  [1, 2, 3],
  [16, 14, 15],
  [13, 9, 11],
  [7, 9, 11],
];
const speed = 10;
// const arr = [
//   [150, 160, 140, 170],
//   [131, 132, 133, 134],
//   [99, 101, 102, 103],
// ];
// const speed = 100;

function solution(speed, arr) {
  const n = arr.length;
  const used = new Set();
  const result = Array(n).fill(null);
  let success = false;

  const rankRanges = arr.map((others) => {
    const faster = others.filter((v) => v > speed).length;
    const m = others.length;
    const possible = [];

    for (let r = faster + 1; r <= m + 1; r++) {
      possible.push(r);
    }

    return possible;
  });

  const order = [...Array(n).keys()].sort(
    (a, b) => rankRanges[a].length - rankRanges[b].length
  );

  function dfs(i) {
    if (i === n) {
      success = true;
      return true;
    }

    const idx = order[i];
    for (let rank of rankRanges[idx]) {
      if (!used.has(rank)) {
        used.add(rank);
        result[idx] = rank;

        if (dfs(i + 1)) return true;

        used.delete(rank);
        result[idx] = null;
      }
    }

    return false;
  }

  dfs(0);

  // 백트래킹 실패 시 가능한 값 중 아무거나 배정
  if (!success) {
    return rankRanges.map((ranks) => ranks[0]);
  }

  return result;
}

console.log(solution(speed, arr));
