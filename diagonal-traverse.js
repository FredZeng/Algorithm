/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let m = mat.length;
  let n = mat[0].length;

  if (m == 1) return mat[0];
  if (n == 1) return mat.map((it) => it[0]);

  let result = [];
  let i = 0;
  let j = 0;
  let flag = true;
  let count = m * n;
  m--;
  n--;

  while (result.length < count) {
    result.push(mat[i][j]);

    if (flag) {
      if (j == n) {
        i++;
        flag = false;
      } else if (i == 0) {
        j++;
        flag = false;
      } else {
        i--;
        j++;
      }
    } else {
      if (i == m) {
        j++;
        flag = true;
      } else if (j == 0) {
        i++;
        flag = true;
      } else {
        i++;
        j--;
      }
    }
  }

  return result;
};
