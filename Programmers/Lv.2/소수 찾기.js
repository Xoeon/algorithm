const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const solution = (numbers) => {
  const answer = new Set();
  let nums = numbers.split('');

  const getPermutation = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newFixed = fixed + arr[i];
        const copyArr = [...arr];
        copyArr.splice(i, 1);

        if (!answer.has(parseInt(newFixed)) && isPrime(parseInt(newFixed))) {
          answer.add(parseInt(newFixed));
        }

        getPermutation(copyArr, newFixed);
      }
    }
  };

  getPermutation(nums, '');

  return answer.size;
};
