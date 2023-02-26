/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    if (nums.length == 1) return;

    let i = 0, j = nums.length - 1, k = 0;

    while (k <= j) {
        switch (nums[k]) {
            case 0:
                nums[k++] = nums[i];
                nums[i++] = 0;
                break;
            case 1:
                k++;
                break;
            case 2:
                nums[k] = nums[j];
                nums[j--] = 2;
                break;
        }
    }
};