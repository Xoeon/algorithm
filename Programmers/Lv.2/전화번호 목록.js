function solution(phone_book) {
  const len = phone_book.length;
  for (let i = 0; i < len; i++) {
    const i_len = phone_book[i].length;
    for (let j = 1; i + j < len; j++) {
      for (let k = 0; k < i_len; k++) {
        if (phone_book[i][k] !== phone_book[i + j][k]) {
          break;
        } else {
          if (k === phone_book[i].length - 1) {
            return false;
          }
        }
      }
    }
  }

  return true;
}
