const solution = (food) => {
  const len = food.length;
  let answer = [];

  for (let i = 1; i < len; i++) {
    answer.push((i + "").repeat(Math.floor(food[i] / 2)));
  }

  return answer.join("") + "0" + answer.reverse().join("");
};
