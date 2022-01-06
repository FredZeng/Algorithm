/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var carry = 0;
  var i = num1.length - 1;
  var j = num2.length - 1;
  var res = '';

  while (i >= 0 || j >= 0) {
    var sum = Number(num1[i] || '0') + Number(num2[j] || '0') + carry;

    carry = sum > 9 ? 1 : 0;
    sum = sum % 10;

    res = sum + res;

    i--;
    j--;
  }

  return carry ? carry + res : res;
};
