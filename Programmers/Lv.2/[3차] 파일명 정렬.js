function isNum(str) {
  if (str === ' ') return false;
  return !isNaN(Number(str)) ? true : false;
}

function parseArr(str) {
  let numStart = false;
  let [head, number, tail] = Array(3).fill('');
  let index = 0;

  while (true) {
    if (!numStart) {
      if (isNum(str[index])) {
        number += str[index];
        numStart = true;
      } else head += str[index];
    } else {
      if (isNum(str[index])) {
        number += str[index];
      } else break;
    }
    index++;
  }

  return [head, number, str.substring(index)];
}

function solution(files) {
  const arr = [];

  for (let file of files) {
    arr.push(parseArr(file));
  }

  return arr
    .sort(
      (a, b) =>
        a[0].toLowerCase().localeCompare(b[0].toLowerCase()) ||
        +a[1] + '' - (+b[1] + '')
    )
    .map((splited) => splited.join(''));
}
