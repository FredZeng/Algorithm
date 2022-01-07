/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 1) {
    return strs[0];
  }

  var maxLen = Math.min.apply(null, strs.map(it => it.length));

  if (maxLen == 0) {
    return '';
  }

  for (var i = 0; i < maxLen; i++) {
    var str = strs[0][i];
    for (var j = 1; j < strs.length; j++) {
      if (strs[j][i] !== str) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0].slice(0, maxLen);
};
