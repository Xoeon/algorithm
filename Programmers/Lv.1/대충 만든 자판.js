const solution = (keymap, targets) => {
  let charSet = {};

  keymap.forEach((keys) => {
    for (let i = 0; i < keys.length; i++) {
      let char = keys[i];
      charSet[char] = charSet[char] < i + 1 ? charSet[char] : i + 1;
    }
  });

  let answer = targets.map((target) => {
    let temp = 0;
    for (let char of target) {
      if (charSet[char]) {
        temp += charSet[char];
      } else {
        return -1;
      }
    }

    return temp;
  });

  return answer;
};
