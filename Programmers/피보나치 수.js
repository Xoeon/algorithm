const solution = (n) => {
  const fibonacci = (num) => {
    if (num <= 1) {
      return num;
    }

    let a = 0;
    b = 1;
    for (let i = 2; i <= num; i++) {
      let temp = (a + b) % 1234567;
      a = b;
      b = temp;
    }
    return b;
  };

  return fibonacci(n);
};
