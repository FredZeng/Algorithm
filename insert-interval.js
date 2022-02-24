/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length == 0) {
    return [newInterval];
  } else if (intervals[0][0] > newInterval[1]) {
    return [newInterval, ...intervals];
  } else if (intervals[intervals.length - 1][1] < newInterval[0]) {
    return [...intervals, newInterval];
  }

  let arr = [];
  let min = newInterval[0],
    max = newInterval[1];
  let done = false;

  for (let i = 0, len = intervals.length; i < len; i++) {
    let item = intervals[i];

    if (
      (item[0] >= min && item[1] <= max) ||
      (item[0] <= min && item[1] >= max) ||
      (item[0] <= min && item[1] >= min) ||
      (item[0] <= max && item[1] >= max)
    ) {
      min = Math.min(item[0], min);
      max = Math.max(item[1], max);
      continue;
    }

    if (!done && max < item[0]) {
      arr.push([min, max]);
      done = true;
    }

    arr.push(item);
  }

  if (!done) arr.push([min, max]);

  return arr;
};
