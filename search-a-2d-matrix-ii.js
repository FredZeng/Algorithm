/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  if (m == 1) {
    return matrix[0].includes(target);
  }

  if (n == 1) {
    return matrix.findIndex(it => it[0] == target) > -1;
  }

  let i = 0;
  let j = n - 1;

  while (i < m && j >= 0) {
    if (matrix[i][j] == target) {
      return true;
    }
    if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }

  return false;
};
