/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (triangle.length == 1) return triangle[0][0];

  let arr = [triangle[0][0]];

  for (let i = 1, len = triangle.length; i < len; i++) {
    let row = new Array(triangle[i].length);

    for (let j = 0, len2 = triangle[i].length; j < len2; j++) {
      row[j] = triangle[i][j];

      if (j == len2 - 1) {
        row[j] += arr[j - 1];
      } else if (j == 0) {
        row[j] += arr[j];
      } else {
        row[j] += Math.min(arr[j], arr[j - 1]);
      }
    }

    arr = row;
  }

  return Math.min.apply(null, arr);
};
