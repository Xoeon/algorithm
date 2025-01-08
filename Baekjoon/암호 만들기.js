const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [L, C] = input[0].split(' ').map(Number);
const letters = input[1].split(' ').sort();

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
const results = [];

function generatePasswords(start, password) {
  // 암호 길이가 L이면 조건을 확인하고 결과에 추가
  if (password.length === L) {
    let vowelCount = 0;
    let consonantCount = 0;

    for (const char of password) {
      if (VOWELS.has(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }

    if (vowelCount >= 1 && consonantCount >= 2) {
      results.push(password);
    }
    return;
  }

  // 현재 위치부터 남은 문자들을 순회하며 재귀 호출
  for (let i = start; i < C; i++) {
    generatePasswords(i + 1, password + letters[i]);
  }
}

generatePasswords(0, '');
console.log(results.join('\n'));
