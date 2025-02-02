/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let arr = x.toString().split("");
  return arr.join("") === arr.reverse().join("") ? true : false;
};
