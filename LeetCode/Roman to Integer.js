const romanNum = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && romanNum[s[i]] < romanNum[s[i + 1]]) {
      ans -= romanNum[s[i]];
    } else {
      ans += romanNum[s[i]];
    }
  }

  return ans;
};
