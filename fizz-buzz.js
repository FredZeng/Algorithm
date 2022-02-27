/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = new Array(n);

  for (let i = 1; i <= n; i++) {
    let three = i % 3 == 0;
    let five = i % 5 == 0;

    if (three && five) {
      arr[i - 1] = "FizzBuzz";
    } else if (three) {
      arr[i - 1] = "Fizz";
    } else if (five) {
      arr[i - 1] = "Buzz";
    } else {
      arr[i - 1] = i + "";
    }
  }

  return arr;
};
