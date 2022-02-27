/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  if (target >= letters[letters.length - 1]) return letters[0];

  let left = 0;
  let right = letters.length - 1;

  while (left < right) {
    let mid = left + ((right - left) >> 1);

    let char = letters[mid];

    if (char <= target) {
      left = mid + 1;
    } else if (char > target) {
      right = mid;
    }
  }

  return letters[right];
};
