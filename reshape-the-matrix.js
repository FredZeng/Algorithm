/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let m = mat.length;
  let n = mat[0].length;

  if (m * n !== r * c) return mat;

  let arr = [];
  let tmp = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (tmp.length < c) {
        tmp.push(mat[i][j]);
      } else {
        arr.push(tmp);
        tmp = [mat[i][j]];
      }
    }
  }

  arr.push(tmp);

  return arr;
};
