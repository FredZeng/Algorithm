/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr = arr.sort((a, b) => a - b);

  let min = arr[arr.length - 1];
  let res = [];

  for (let i = 1, len = arr.length; i < len; i++) {
    let tmp = arr[i] - arr[i - 1];

    if (tmp == min) {
      res.push([arr[i - 1], arr[i]]);
    } else if (tmp < min) {
      res = [[arr[i - 1], arr[i]]];
      min = tmp;
    }
  }

  return res;
};
