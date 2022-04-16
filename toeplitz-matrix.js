/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  for (let i = 0; i < n; i++) {
    if (dfs(matrix, 0, i) == false) {
      return false;
    }
  }

  for (let i = 1; i < m; i++) {
    if (dfs(matrix, i, 0) == false) {
      return false;
    }
  }

  return true;
};

let dfs = function (matrix, i, j) {
  let nextI = i + 1;
  let nextJ = j + 1;
  if (nextI >= matrix.length || nextJ >= matrix[0].length) {
    return true;
  }

  if (matrix[i][j] !== matrix[nextI][nextJ]) {
    return false;
  }

  return dfs(matrix, nextI, nextJ);
};
