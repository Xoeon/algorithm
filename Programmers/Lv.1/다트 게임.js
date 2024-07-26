const splitResult = (result) => {
  let temp = "";
  let arr = [];

  for (let i = 0; i < result.length; i++) {
    temp += result[i];

    if (isNaN(+result[i])) {
      if (!isNaN(+result[i + 1]) || result[i + 1] == undefined) {
        arr.push(temp);
        temp = "";
      }
    }
  }

  return arr;
};

const splitStr = (str) => {
  let temp = "";
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*" || str[i] === "#") {
      arr.push(str[i]);
    } else if (!isNaN(+str[i])) {
      temp += str[i];
    } else {
      arr.push(temp);
      arr.push(str[i]);
      temp = "";
    }
  }

  return arr;
};

const formatter = (str) => {
  if (str === "S") return 1;
  else if (str === "D") return 2;
  else return 3;
};

const solution = (dartResult) => {
  let arr = splitResult(dartResult);
  let score = [];

  for (let i = 0; i < arr.length; i++) {
    let str = splitStr(arr[i]);
    let temp = 0;

    temp = (+str[0]) ** formatter(str[1]);

    if (str[2]) {
      if (str[2] === "*") {
        temp *= 2;
        if (i !== 0) {
          score[i - 1] *= 2;
        }
      } else {
        temp *= -1;
      }
    }

    score.push(temp);
  }

  return score.reduce((acc, curr) => acc + curr);
};
