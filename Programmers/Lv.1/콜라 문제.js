const solution = (a, b, n) => {
  let bottles = n;
  let answer = 0;

  while (bottles >= a) {
    let given = Math.floor(bottles / a) * b;
    let taken = (given / b) * a;

    bottles = bottles - taken + given;
    console.log(given, taken, bottles);
    answer += given;
  }

  return answer;
};
