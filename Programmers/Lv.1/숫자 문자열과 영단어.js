const num = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const solution = (s) => {
  const num_l = Object.keys(num).length;
  const l = s.length;

  let answer = [];
  let temp = "";

  for (let i = 0; i < l; i++) {
    if (isNaN(s[i])) {
      temp += s[i];
      for (let j = 0; j < num_l; j++) {
        if (temp === num[j]) {
          answer.push(j);
          temp = "";
        }
      }
    } else {
      answer.push(s[i]);
    }
  }

  return +answer.join("");
};
