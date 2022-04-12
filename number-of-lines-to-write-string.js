/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let line = 1;
  let w = 0;

  for (let i = 0; i < s.length; i++) {
    let len = widths[s.charCodeAt(i) - 97];
    let nextW = w + len;

    if (nextW <= 100) {
      w = nextW;
    } else {
      line++;
      w = len;
    }
  }

  return [line, w];
};
