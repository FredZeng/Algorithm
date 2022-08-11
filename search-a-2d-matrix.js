/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  function getValueAtIndex(index) {
    let x = Math.floor(index / n);
    let y = index % n;

    return matrix[x][y];
  }

  let left = 0, right = m * n - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);

    let value = getValueAtIndex(mid);

    if (value === target) {
      return true;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};
