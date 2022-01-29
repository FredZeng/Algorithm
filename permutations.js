/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var res = [];
  var len = nums.length;

  var backtrace = function (nums, track) {
    if (track.length === len) {
      res.push([...track]);
      return;
    }

    for (let i = 0; i < len; i++) {
      var num = nums[i];

      if (track.indexOf(num) > -1) {
        continue;
      }

      track.push(num);

      backtrace(nums, track);

      track.pop();
    }
  };

  backtrace(nums, []);

  return res;
};

// var permute = function (nums) {
//   if (nums.length == 1) {
//     return [nums];
//   } else if (nums.length == 2) {
//     return [nums, [nums[1], nums[0]]];
//   }

//   let res = [];

//   for (let i = 0, len = nums.length; i < len; i++) {
//     const top = nums.pop();

//     res.push(...permute(nums).map((it) => [top, ...it]));

//     nums.unshift(top);
//   }

//   return res;
// };
