/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const set = new Set();

  for (let str of strs) {
    let temp = str.split("").sort().join("");

    if (!set.has(temp)) {
      set.add(temp);
    }
  }

  const ans = [];

  for (base of set) {
    const arr = [];
    for (str of strs) {
      let temp = str.split("").sort().join("");
      if (base === temp) {
        arr.push(str);
      }
    }
    ans.push(arr);
  }

  return ans;
};
