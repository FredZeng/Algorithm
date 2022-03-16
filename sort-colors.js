/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    if (nums.length == 1) return;

    let num0 = 0, num1 = 0;

    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] == 0) {
            num0++;
        } else if (nums[i] == 1) {
            num1++;
        }
    }

    if (num0 == nums.length || num1 == nums.length || (num0 == 0 && num1 == 0)) {
        return;
    }

    for (let i = 0, len = nums.length; i < len; i++) {
        if (num0) {
            nums[i] = 0;
            num0--;
        } else if (num1) {
            nums[i] = 1;
            num1--;
        } else {
            nums[i] = 2;
        }
    }
};