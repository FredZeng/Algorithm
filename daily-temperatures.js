/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  if (temperatures.length === 1) return [0];
  if (temperatures.length === 2) {
    return temperatures[1] > temperatures[0] ? [1, 0] : [0, 0];
  }
  let lastIndex = temperatures.length - 1;
  let answer = new Array(temperatures.length);
  answer[lastIndex] = 0;
  let stack = [lastIndex];

  for (let i = lastIndex - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }

    answer[i] = stack.length > 0 ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }

  return answer;
};
