const solution = (s) => {
  let x = "";
  let a = 0,
    b = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (x === "") {
      x = s[i];
      a++;
    } else {
      if (s[i] === x) a++;
      else b++;
    }

    if (a === b) {
      if (s[i + 1] !== undefined) {
        count++;
        x = "";
        a = 0;
        b = 0;
      }
    }
  }

  return count + 1;
};
