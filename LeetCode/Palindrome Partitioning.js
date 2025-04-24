/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const ans = [];
  const path = [];

  function backtrack(start) {
    if (start === s.length) {
      ans.push([...path]);
      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      const substr = s.slice(start, end);
      if (isPalindrome(substr)) {
        path.push(substr);
        backtrack(end);
        path.pop();
      }
    }
  }

  function isPalindrome(str) {
    let left = 0,
      right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  backtrack(0);
  return ans;
};
