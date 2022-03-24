/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = "";

  let word = "";

  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === " ") {
      if (word) {
        result = result ? word + " " + result : word;
        word = "";
      }
    } else {
      word += s[i];
    }
  }

  if (word) {
    return result ? word + " " + result : word;
  }

  return result;
};
