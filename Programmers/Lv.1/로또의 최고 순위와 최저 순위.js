const ranking = {
  6: 1,
  5: 2,
  4: 3,
  3: 4,
  2: 5,
  1: 6,
  0: 6,
};

const solution = (lottos, win_nums) => {
  let count = lottos.filter((num) => win_nums.includes(num)).length;
  const zero = lottos.filter((num) => num === 0).length;

  return [ranking[count + zero], ranking[count]];
};
