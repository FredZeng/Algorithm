/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 1) {
    return strs[0];
  }

  let res = "";
  let i = 0;

  while (true) {
    let char = strs[0][i];

    if (char === undefined) break;

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return res;
      }
    }

    res += char;
    i++;
  }

  return res;
};
