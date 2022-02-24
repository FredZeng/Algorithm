/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [[]];

  for (let i = 0, len = nums.length; i < len; i++) {
    result = result.concat(result.map((it) => [...it, nums[i]]));
  }

  // 回溯法
  // let backtrace = function (index, stack) {
  //     result.push([...stack]);

  //     for (let i = index, len = nums.length; i < len; i++) {
  //         stack.push(nums[i]);
  //         backtrace(i + 1, stack);
  //         stack.pop();
  //     }
  // }

  // for (let i = 0, len = nums.length; i < len; i++) {
  //     backtrace(i + 1, [[nums[i]]]);
  // }

  return result;
};
