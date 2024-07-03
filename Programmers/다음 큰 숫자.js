const solution = (n) => {
  let result = 0;

  for (let i = n + 1; ; i++) {
    const n_count = n.toString(2).match(/1/g).length;
    const i_count = i.toString(2).match(/1/g).length;

    if (n_count === i_count) {
      result = i;
      break;
    }
  }

  return result;
};
