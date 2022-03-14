/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length == 1) {
    return intervals;
  }

  intervals = intervals.sort((a, b) => a[0] - b[0]);

  var res = [intervals[0]];

  for (var i = 1, len = intervals.length; i < len; i++) {
    var top = res[res.length - 1];
    var current = intervals[i];

    if (current[0] <= top[1]) {
      top[1] = Math.max(top[1], current[1]);
    } else {
      res.push(current);
    }
  }

  return res;
};
