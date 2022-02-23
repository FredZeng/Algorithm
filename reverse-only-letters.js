/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  if (s.length == 1) return s;

  s = s.split('');
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let validLeft = isValidChar(s[left]);
    let validRight = isValidChar(s[right]);

    if (validLeft && validRight) {
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;

      left++;
      right--;
    } else if (validLeft) {
      right--;
    } else {
      left++;
    }
  }

  return s.join('');
};

var isValidChar = function (char) {
  let charCode = char.charCodeAt(0);
  return (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) || (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0));
};
