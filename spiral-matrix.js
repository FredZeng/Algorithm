/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length == 1) {
    return matrix[0];
  } else if (matrix[0].length == 1) {
    return matrix.map((it) => it[0]);
  }

  // 0 - 向右
  // 1 - 向下
  // 2 - 向左
  // 3 - 向上
  let direction = 0;
  let result = [matrix[0][0]];
  matrix[0][0] = true;
  let m = matrix.length;
  let n = matrix[0].length;
  let total = m * n;
  let i = 0,
    j = 0;

  while (result.length < total) {
    if (direction == 0) {
      let nextJ = j + 1;

      if (nextJ >= n || matrix[i][nextJ] === true) {
        direction = 1;
      } else {
        result.push(matrix[i][nextJ]);
        matrix[i][nextJ] = true;
        j++;
      }
    }

    if (direction == 1) {
      let nextI = i + 1;

      if (nextI >= m || matrix[nextI][j] === true) {
        direction = 2;
      } else {
        result.push(matrix[nextI][j]);
        matrix[nextI][j] = true;
        i++;
      }
    }

    if (direction == 2) {
      let nextJ = j - 1;

      if (nextJ < 0 || matrix[i][nextJ] === true) {
        direction = 3;
      } else {
        result.push(matrix[i][nextJ]);
        matrix[i][nextJ] = true;
        j--;
      }
    }

    if (direction == 3) {
      let nextI = i - 1;

      if (nextI < 0 || matrix[nextI][j] === true) {
        direction = 0;
      } else {
        result.push(matrix[nextI][j]);
        matrix[nextI][j] = true;
        i--;
      }
    }
  }

  return result;
};
