function solution(cylinder, a) {
  let x = cylinder.filter((num) => !num).length;
  let y = 0;
  const arr = cylinder.concat(cylinder);

  for (let i = 0; i < cylinder.length; i++) {
    if (arr[i]) continue;

    let flag = true;
    for (let j = 1; j <= a; j++) {
      if (arr[i + j]) {
        flag = false;
        break;
      }
    }
    if (flag) y++;
  }

  if (y === 0) return [0, 1];

  let i = x,
    j = y;
  while (j !== 0) {
    let temp = i;
    i = j;
    j = temp % j;
  }

  return [y / i, x / i];
}
