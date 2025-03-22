function solution(fruit, k) {
  const charLen = fruit[0].length;
  const set = new Set();

  function getPermutation(start, count, path) {
    if (count === k) {
      set.add(path);
      return;
    }

    for (let i = start; i < fruit.length; i++) {
      let str = "";
      for (let j = 0; j < charLen; j++) {
        if (fruit[i][j] === "1" || path[j] === "1") {
          str += "1";
        } else {
          str += "0";
        }
      }
      getPermutation(i + 1, count + 1, str);
    }
  }

  getPermutation(0, 0, "");
  return set.size;
}
