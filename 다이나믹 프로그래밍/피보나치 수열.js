/* 일반 재귀 함수 */

const fibo1 = (x) => {
  if (x === 1 || x === 2) return 1;

  return fibo1(x - 1) + fibo1(x - 2);
};

/* 탑다운 메모이제이션 */

const d1 = [];

const fibo2 = (x) => {
  if (x === 1 || x === 2) return 1;

  if (d1[x]) return d1[x];

  d1[x] = fibo2(x - 1) + fibo2(x - 2);

  return d1[x];
};

/* 바텀업 메모이제이션 */

const d2 = [];

d2[1] = 1;
d2[2] = 1;
const n = 99;

for (let i = 3; i < n + 1; i++) {
  d2[i] = d2[i - 1] + d2[i - 2];
}
