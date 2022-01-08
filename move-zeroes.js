/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (var i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      var num = nums[i];
      nums[i] = 0;
      nums[j] = num;
      j++;
    }
  }
}

// var moveZeroes = function (nums) {
//   var i = 0;

//   while (i < nums.length) {
//     if (nums[i] == 0) {
//       var j = i + 1;

//       while (j < nums.length) {
//         if (nums[j] != 0) {
//           nums[i] = nums[j];
//           nums[j] = 0;
//           break;
//         }
//         j++;
//       }
//     }
//     i++;
//   }
// };
