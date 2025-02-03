function expandFromCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return s.substring(left + 1, right);
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let longest = '';

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandFromCenter(s, i, i);
    let evenPalindrome = expandFromCenter(s, i, i + 1);

    if (oddPalindrome.length > longest.length) longest = oddPalindrome;
    if (evenPalindrome.length > longest.length) longest = evenPalindrome;
  }

  return longest;
};
