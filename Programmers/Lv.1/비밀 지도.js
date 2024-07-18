const solution = (n, arr1, arr2) => {
  const bin1 = [],
    bin2 = [];
  const answer = [];

  const len = arr1.length;

  for (let i = 0; i < len; i++) {
    bin1.push(arr1[i].toString(2).padStart(n, "0"));
    bin2.push(arr2[i].toString(2).padStart(n, "0"));
  }

  for (let i = 0; i < len; i++) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      if (+bin1[i][j] || +bin2[i][j]) {
        temp += "#";
      } else {
        temp += " ";
      }
    }
    answer.push(temp);
  }

  return answer;
};
