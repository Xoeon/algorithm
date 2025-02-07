function solution(want, number, discount) {
  let count = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const hash = {};
    for (let j = 0; j < 10; j++) {
      hash[discount[i + j]] = (hash[discount[i + j]] || 0) + 1;
    }

    let flag = true;
    for (let k = 0; k < want.length; k++) {
      if (!hash[want[k]] || hash[want[k]] !== number[k]) {
        flag = false;
      }
    }

    if (flag) count++;
  }

  return count;
}
