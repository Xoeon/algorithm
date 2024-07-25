const solution = (babbling) => {
  const regex = /^(?!.*(aya|ye|woo|ma)\1)((aya|ye|woo|ma))*$/;
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    if (regex.test(babbling[i])) count++;
  }

  return count;
};
