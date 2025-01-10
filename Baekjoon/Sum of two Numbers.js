function sumDigit(decimalNum) {
  return decimalNum
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);
}

function solution(n) {
  let x = Math.floor(n / 2);
  let y = n - x;

  // x와 y의 자릿수 합 차이가 1 이하가 되도록 조정
  while (Math.abs(sumDigit(x) - sumDigit(y)) > 1) {
    x--;
    y++;
  }

  console.log(x, y);
}

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const t = Number(input[0]);
const testCases = input.slice(1).map(Number);

for (const n of testCases) {
  solution(n);
}
