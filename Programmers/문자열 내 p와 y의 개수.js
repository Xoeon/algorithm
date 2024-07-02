const solution = (s) => {
  const str = [...s.toLowerCase()];

  const length_p = str.filter((char) => char === "p").length;
  const length_y = str.filter((char) => char === "y").length;

  return length_p === length_y ? true : false;
};
