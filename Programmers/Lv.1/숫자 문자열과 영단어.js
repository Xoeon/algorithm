const num = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const solution1 = (s) => {
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

const solution2 = (s) => {
  const l = num.length;
  let answer = s;

  for (let i = 0; i < l; i++) {
    let arr = answer.split(num[i]);
    answer = arr.join(i);
  }

  return +answer;
};

const solution3 = (s) => {
  let charSet = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let [key, value] of Object.entries(charSet)) {
    let re = new RegExp(key, "g");
    s = s.replace(re, value);
  }
  return +s;
};
