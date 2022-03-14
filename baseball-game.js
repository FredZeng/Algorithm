/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  if (ops.length == 1) return Number(ops[0]);

  var res = [];

  for (let i = 0, len = ops.length; i < len; i++) {
    switch (ops[i]) {
      case "+":
        res.push(res[res.length - 1] + res[res.length - 2]);
        break;
      case "D":
        res.push(res[res.length - 1] * 2);
        break;
      case "C":
        res.pop();
        break;
      default:
        res.push(Number(ops[i]));
        break;
    }
  }

  return res.reduce((a, b) => a + b, 0);
};
