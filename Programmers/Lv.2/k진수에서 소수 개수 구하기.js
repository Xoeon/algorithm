/**
 * n이 소수인지 아닌지 반환하는 함수
 * @param {number} n
 * @return {boolean}
 */
function isPrimeNum(n) {
  if (n === 0 || n === 1) return false;
  if (n === 2) return true;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function solution(n, k) {
  const convertedNum = n.toString(k);

  return convertedNum
    .split('0')
    .map(Number)
    .filter((num) => isPrimeNum(num)).length;
}
