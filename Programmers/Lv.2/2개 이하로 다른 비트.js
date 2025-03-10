/* 첫 번째 시도(시간 초과) */
function countDifferentBits(target, compare) {
  let t = target.toString(2);
  const c = compare.toString(2);

  t = '0'.repeat(c.length - t.length) + t;

  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== c[i]) count++;
  }

  return count;
}

function solution(numbers) {
  return numbers.map((number) => {
    for (let i = number + 1; ; i++) {
      const differentCount = countDifferentBits(number, i);
      if (differentCount <= 2) return i;
      else continue;
    }
  });
}

/* Bit Manipulation */
/* 자바스크립트에서는 비트 연산자가 32비트 정수로 자동 변환되기 때문에,
 * 10^15 같은 큰 숫자를 다룰 때 문제가 발생할 수 있다.
 * 즉, 비트 연산 (&, |, ^, <<, >>)을 사용하면 32비트 초과 부분이 잘려버릴 수 있다.
 * 🚨 console.log(9126805503 | 0); // 536884607 (잘림)
 *
 * 따라서 비트 연산자 대신 BigInt를 사용하여 처리한다.
 */
function solution(numbers) {
  return numbers
    .map((x) => {
      x = BigInt(x);

      // 짝수는 항상 0으로 끝남. +1만 해주면 비트가 한 개가 다르면서 최솟값
      if (x % 2n === 0n) return x + 1n;

      let bit = 1n;
      while ((x & bit) !== 0n) bit <<= 1n; // 처음 등장하는 0을 찾는다
      return x + bit - (bit >> 1n); // 0을 1로 변경하고, 오른쪽 1을 0으로 변경
    })
    .map(Number); // 다시 일반 숫자로 변환
}
