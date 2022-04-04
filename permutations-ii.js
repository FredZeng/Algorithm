/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (nums.length == 1) return [nums];

  nums.sort((a, b) => a - b);
  let result = [];
  let visited = new Array(nums.length).fill(0);

  let backtrace = function (nums, stack) {
    if (stack.length == nums.length) {
      result.push([...stack]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i] == 1) {
        continue;
      }
      if (nums[i] == nums[i - 1] && visited[i - 1] !== 1) {
        continue;
      }

      stack.push(nums[i]);
      visited[i] = 1;

      backtrace(nums, stack);

      stack.pop();
      visited[i] = 0;
    }
  };

  backtrace(nums, []);

  return result;
};
