// kr time은 9시간을 더해줘야 한다.
function getKrTime(date) {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + 9);

  return newDate;
}

function solution(today, terms, privacies) {
  const ans = [];

  // 개인정보 유효기간을 담은 obj 생성
  const termsObj = terms
    .map((e) => e.split(' '))
    .reduce((acc, [key, value]) => {
      acc[key] = +value;
      return acc;
    }, {});

  const calculatedDates = privacies
    .map((privacy) => privacy.split(' '))
    .map(([date, term]) => {
      const formattedDate = new Date(date); // kr time으로 변환하지 않는 이유: 만료 기간 하루 전 값이 나와야 함.
      formattedDate.setMonth(formattedDate.getMonth() + termsObj[term]); // 개인정보 유효기간만큼 더한 값 저장

      return formattedDate;
    });

  // today와 날짜를 비교하는 함수
  function isPastDate(date) {
    const todayDate = getKrTime(today);
    return date.getTime() < todayDate.getTime();
  }

  // 계산된 날짜를 순회하면서 만료기간이면 ans에 push
  for (let i = 0; i < calculatedDates.length; i++) {
    if (isPastDate(calculatedDates[i])) {
      ans.push(i + 1);
    }
  }

  return ans;
}
