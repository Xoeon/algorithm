const solution = (sizes) => {
  const l = sizes.length;
  let w = [],
    h = [];

  for (let i = 0; i < l; i++) {
    let [a, b] = sizes[i];

    if (b > a) {
      w.push(b);
      h.push(a);
    } else {
      w.push(a);
      h.push(b);
    }
  }

  return Math.max(...w) * Math.max(...h);
};
