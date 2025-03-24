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

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  const g = gcd(x, y);

  return [y / g, x / g];
}
