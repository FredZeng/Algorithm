/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let map = {};

  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] = (map[s1[i]] || 0) + 1;
  }

  let temp = {};
  let window = 0;
  let slow = 0;
  let fast = 0;

  while (fast < s2.length) {
    if (map[s2[fast]]) {
      temp[s2[fast]] = (temp[s2[fast]] || 0) + 1;

      if (temp[s2[fast]] <= map[s2[fast]]) {
        window++;
      }
    }

    while (window == s1.length) {
      if (fast - slow + 1 == s1.length) {
        return true;
      }

      if (temp[s2[slow]]) {
        temp[s2[slow]]--;

        if (temp[s2[slow]] < map[s2[slow]]) {
          window--;
        }
      }

      slow++;
    }

    fast++;
  }

  return false;
};
