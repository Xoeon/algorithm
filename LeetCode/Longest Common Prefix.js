/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.some((str) => str.length === 0)) return '';

  let prefix = '';

  for (let i = 0; ; i++) {
    if (strs[0][i] === undefined) return prefix;

    let temp = prefix;
    prefix += strs[0][i];

    for (let str of strs) {
      if (str[i] !== strs[0][i]) return temp;
    }
  }

  return prefix;
};
