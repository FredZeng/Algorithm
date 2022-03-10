/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let matrix = [m, n];

  ops.forEach((it) => {
    matrix[0] = Math.min(matrix[0], it[0]);
    matrix[1] = Math.min(matrix[1], it[1]);
  });

  return matrix[0] * matrix[1];
};
