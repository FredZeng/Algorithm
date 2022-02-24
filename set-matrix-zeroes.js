/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let topLeft = matrix[0][0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;

        if (j == 0) {
          topLeft = 0;
        } else {
          matrix[0][j] = 0;
        }
      }
    }
  }

  for (let i = n - 1; i >= 1; i--) {
    if (matrix[0][i] == 0) {
      for (let j = 1; j < m; j++) {
        matrix[j][i] = 0;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] == 0) {
      for (let j = 1; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  if (topLeft == 0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};
