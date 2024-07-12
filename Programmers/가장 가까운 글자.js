const solution = (s) => {
  const l = s.length;
  let answer = [-1]; // 첫 글자는 무조건 -1

  for (let i = 1; i < l; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        answer.push(i - j);
        break;
      }
    }
    if (answer.length !== i + 1) {
      // 중첩 반복문을 다 돌 때까지 push된 요소가 없으면 -1
      answer.push(-1);
    }
  }

  return answer;
};
