/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  if (matrix[0][0] > target || matrix[m - 1][n - 1] < target) return false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][n - 1] < target) continue;
    else {
      let start = 0;
      let end = n - 1;

      while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (matrix[i][mid] === target) {
          return true;
        } else if (matrix[i][mid] < target) {
          start = mid + 1;
        } else if (matrix[i][mid] > target) {
          end = mid - 1;
        }
      }

      return false;
    }
  }

  return false;
};
