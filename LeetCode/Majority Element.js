/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function (nums) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value > nums.length / 2) return key;
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement2 = function (nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};
