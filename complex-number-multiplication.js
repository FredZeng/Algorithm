/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  let [left1, right1] = splitNumber(num1);
  let [left2, right2] = splitNumber(num2);

  let left = left1 * left2 - right1 * right2;
  let right = left1 * right2 + right1 * left2;

  return left + '+' + right + 'i';
};

let splitNumber = function (num) {
  let left = 0,
    right = 0;

  num = num.split('+');

  num.forEach((it) => {
    if (it.indexOf('i') > -1) {
      right = Number.parseInt(it);
    } else {
      left = Number.parseInt(it);
    }
  });

  return [left, right];
};
