const solution = (phone_number) => {
  let answer = new Array(phone_number.length).fill("*");

  for (let i = 0; i < 4; i++) {
    answer[i] = phone_number[phone_number.length - i - 1];
  }

  return answer.reverse().join("");
};
