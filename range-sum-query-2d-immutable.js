/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  this.matrix = new Array(m);

  for (let i = 0; i < m; i++) {
    this.matrix[i] = new Array(n);

    for (let j = 0; j < n; j++) {
      this.matrix[i][j] = matrix[i][j] + (this.matrix[i][j - 1] || 0);
      if (i > 0) {
        this.matrix[i][j] +=
          (this.matrix[i - 1][j] || 0) - (this.matrix[i - 1][j - 1] || 0);
      }
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let res = this.matrix[row2][col2] - (this.matrix[row2][col1 - 1] || 0);

  if (row1 > 0) {
    res +=
      (this.matrix[row1 - 1][col1 - 1] || 0) -
      (this.matrix[row1 - 1][col2] || 0);
  }

  return res;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
