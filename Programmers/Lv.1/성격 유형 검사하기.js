const points = {
  R: 0,
  T: 0,
  C: 0,
  F: 0,
  J: 0,
  M: 0,
  A: 0,
  N: 0,
};

function addPoints(survey, choice) {
  const [firstChar, secondChar] = [survey[0], survey[1]];

  if (choice === 4) return; // 선택이 4이면 점수 변동 없음
  else if (choice > 4) {
    // choice가 5,6,7일 때
    points[secondChar] += choice - 4;
  } else {
    // choice가 1,2,3일 때
    points[firstChar] += 4 - choice;
  }
}

function solution(surveys, choices) {
  const types = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];
  const len = surveys.length;
  const ans = [];

  // 설문조사 결과 기반으로 점수 추가
  for (let i = 0; i < len; i++) {
    addPoints(surveys[i], choices[i]);
  }

  // 순차적으로 R-T, C-F, J-M, A-N을 비교하여 더 높은 점수를 가진 유형을 결과에 추가
  for (const [type1, type2] of types) {
    ans.push(points[type1] >= points[type2] ? type1 : type2);
  }

  return ans.join('');
}
