/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) {
    return n;
  }

  var arr = [1, 2, 3];

  for (var i = 3; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n - 1];
};

// var map = { 1: 1, 2: 2 };

// var climbStairs = function (n) {
//   if (n < 3) {
//     return n;
//   } else if (map[n]) {
//     return map[n];
//   }

//   var res = climbStairs(n - 1) + climbStairs(n - 2);

//   map[n] = res;

//   return res;
// };
