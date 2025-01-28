function solution(name) {
  const nameLength = name.length;
  let answer = 0;

  // 알파벳 변경 횟수 계산
  for (let char of name) {
    const up = char.charCodeAt() - "A".charCodeAt();
    const down = "Z".charCodeAt() - char.charCodeAt() + 1;
    answer += Math.min(up, down);
  }

  // 커서 이동 최소화 계산
  let minMove = nameLength - 1;
  for (let i = 0; i < nameLength; i++) {
    let nextIndex = i + 1;

    // 연속된 'A' 구간 탐색
    while (nextIndex < nameLength && name[nextIndex] === "A") {
      nextIndex++;
    }

    const move =
      i + nameLength - nextIndex + Math.min(i, nameLength - nextIndex);
    minMove = Math.min(minMove, move);
  }

  answer += minMove;
  return answer;
}
