/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let queue = [];
  let left = -s.length;
  let arr = new Array(s.length);

  for (let i = 0; i < s.length; i++) {
    if (s[i] == c) {
      queue.push(i);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (queue[0] == i) {
      arr[i] = 0;
      left = i;
      queue.shift();
    } else {
      arr[i] = i - left;
      if (queue.length > 0) {
        arr[i] = Math.min(arr[i], queue[0] - i);
      }
    }
  }

  return arr;
};
