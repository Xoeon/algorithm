/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  let rows = Array.from({ length: numRows }, () => '');
  let index = 0,
    direction = 1;

  for (let char of s) {
    rows[index] += char;
    if (index === 0) direction = 1;
    if (index === numRows - 1) direction = -1;
    index += direction;
  }

  return rows.join('');
};
