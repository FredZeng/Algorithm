/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let map = {};
  for (let i = 0; i < p.length; i++) {
    let char = p[i];
    map[char] = (map[char] || 0) + 1;
  }

  let arr = [];
  let slow = 0;
  let fast = 0;
  let window = {};
  let valid = 0;

  while (fast < s.length) {
    let char = s[fast];

    if (map[char]) {
      window[char] = (window[char] || 0) + 1;

      if (window[char] <= map[char]) {
        valid++;
      }
    }

    while (valid == p.length) {
      if (fast - slow + 1 == p.length) {
        arr.push(slow);
      }

      if (window[s[slow]]) {
        window[s[slow]]--;

        if (window[s[slow]] < map[s[slow]]) {
          valid--;
        }
      }

      slow++;
    }

    fast++;
  }

  return arr;
};
