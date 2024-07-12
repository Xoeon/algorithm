const solution = (friends, gifts) => {
  const length = friends.length;

  const giftPoints = new Array(length).fill(0); // 선물 지수
  const index = {}; // 친구 이름을 배열 인덱스에 매핑하는 객체
  const record = []; // 각 친구 간 선물을 주고받은 횟수를 기록하는 2차원 배열
  const points = new Array(length).fill(0); // 각 친구의 점수

  for (let i = 0; i < length; i++) {
    record[i] = new Array(length).fill(0);
    index[friends[i]] = i; // 객체에 친구 이름을 인덱스로 매핑
    // e.g. { a: 1, b: 2, c: 2}
  }

  gifts.forEach((gift) => {
    const [giver, taker] = gift.split(" ");

    // 선물 주고받은 횟수 계산
    record[index[giver]][index[taker]] += 1;

    // 선물 지수 계산
    giftPoints[index[giver]] += 1;
    giftPoints[index[taker]] -= 1;
  });

  // 점수 계산
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (record[i][j] > record[j][i]) {
        points[i] += 1;
      } else if (record[i][j] === record[j][i]) {
        if (giftPoints[i] > giftPoints[j]) {
          points[i] += 1;
        }
      }
    }
  }

  return Math.max(...points);
};
