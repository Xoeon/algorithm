const solution = (n, m, section) => {
  const len = section.length;

  let wall = new Array(n).fill(true);
  let count = 0;

  for (let i = 0; i < len; i++) {
    wall[section[i] - 1] = false;
  }

  for (let i = 0; i < n; i++) {
    if (!wall[i]) {
      for (let j = 0; j < m; j++) {
        wall[i + j] = true;
      }
      count++;
    }
  }

  return count;
};
