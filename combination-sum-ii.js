/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates = candidates.filter((it) => it <= target);

  if (candidates.length == 0) return [];

  candidates = candidates.sort((a, b) => a - b);

  let result = [];
  let used = [];

  let backtrace = function (index, target, stack) {
    if (target == 0) {
      result.push([...stack]);
      return;
    } else if (target < candidates[index]) {
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (i > 0 && candidates[i] == candidates[i - 1] && !used[i - 1]) {
        continue;
      }

      stack.push(candidates[i]);
      used[i] = true;
      backtrace(i + 1, target - candidates[i], stack);
      used[i] = false;
      stack.pop();
    }
  };

  backtrace(0, target, []);

  return result;
};

// var combinationSum2 = function (candidates, target) {
//   if (candidates.length == 1) {
//     return candidates[0] == target ? [candidates] : [];
//   }

//   candidates.sort((a, b) => a - b);
//   let res = [];

//   let backtrace = function (start, stack, target) {
//     if (target == 0) {
//       res.push([...stack]);
//       return;
//     } else if (target < 0) {
//       return;
//     }

//     for (let i = start; i < candidates.length; i++) {
//       if (i > start && candidates[i] == candidates[i - 1]) {
//         continue;
//       }

//       stack.push(candidates[i]);
//       backtrace(i + 1, stack, target - candidates[i]);
//       stack.pop();
//     }
//   };

//   backtrace(0, [], target);

//   return res;
// };
