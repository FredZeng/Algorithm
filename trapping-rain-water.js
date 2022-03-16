/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length <= 1) return 0;
  let sum = 0;

  let maxLeft = 0;
  let maxRight = 0;

  let left = 0;
  let right = height.length - 1;

  while (left <= right) {
    if (height[left] <= height[right]) {
      maxLeft = Math.max(maxLeft, height[left]);

      sum += maxLeft - height[left];

      left++;
    } else {
      maxRight = Math.max(maxRight, height[right]);

      sum += maxRight - height[right];

      right--;
    }
  }

  return sum;
};
