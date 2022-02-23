/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates = candidates.filter((it) => it <= target);

  if (candidates.length == 0) return [];

  let result = [];

  let backtrace = function (startIndex, target, stack) {
    if (target == 0) {
      result.push([...stack]);
      return;
    } else if (target < 0) {
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      stack.push(candidates[i]);
      backtrace(i, target - candidates[i], stack);
      stack.pop();
    }
  };

  backtrace(0, target, []);

  return result;
};
