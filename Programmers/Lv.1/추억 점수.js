const solution = (name, yearning, photo) => {
  const score = {};
  let answer = [];

  name.forEach((person, i) => {
    score[person] = yearning[i];
  });

  for (let i = 0; i < photo.length; i++) {
    let temp = 0;

    photo[i].reduce((_, curr) => {
      if (score[curr] !== undefined) {
        temp += score[curr];
      }
    }, 0);

    answer.push(temp);
  }

  return answer;
};
