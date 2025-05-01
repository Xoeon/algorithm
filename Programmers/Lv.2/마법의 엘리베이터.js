function solution(storey) {
  let count = 0;

  while (storey > 0) {
    let digit = storey % 10;

    if (digit > 5) {
      count += 10 - digit;
      storey = Math.floor(storey / 10) + 1;
    } else if (digit < 5) {
      count += digit;
      storey = Math.floor(storey / 10);
    } else {
      let next = Math.floor(storey / 10) % 10;
      if (next >= 5) {
        count += 5;
        storey = Math.floor(storey / 10) + 1;
      } else {
        count += 5;
        storey = Math.floor(storey / 10);
      }
    }
  }

  return count;
}
