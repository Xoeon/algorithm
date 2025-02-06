/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };

  for (const bracket of s) {
    if (bracket in map) {
      if (stack.pop() !== map[bracket]) return false;
    } else {
      stack.push(bracket);
    }
  }

  return stack.length === 0;
};
