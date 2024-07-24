const isPrimeNum = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const solution = (nums) => {
  const len = nums.length;
  let answer = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (k = j + 1; k < len; k++) {
        if (isPrimeNum(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }

  return answer;
};
