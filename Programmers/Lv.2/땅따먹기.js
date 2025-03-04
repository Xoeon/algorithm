function solution(land) {
  const COL = 4;

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < COL; j++) {
      land[i][j] += Math.max(...land[i - 1].filter((_, idx) => idx !== j));
    }
  }

  return Math.max(...land[land.length - 1]);
}
