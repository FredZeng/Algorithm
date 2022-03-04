/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return '';

  let map = {};

  for (let i = 0, len = t.length; i < len; i++) {
    map[t[i]] = (map[t[i]] || 0) + 1;
  }

  let res = '';
  let window = {};
  let needCount = Object.keys(map).length;
  let curCount = 0;

  for (let i = 0, j = 0, len = s.length; i < len; i++) {
    let char = s[i];

    if (!map[char]) continue;

    window[char] = (window[char] || 0) + 1;

    if (window[char] == map[char]) {
      curCount++;
    }

    while (curCount == needCount) {
      res = res.length > 0 && res.length < i - j + 1 ? res : s.slice(j, i + 1);

      if (window[s[j]]) {
        window[s[j]]--;

        if (window[s[j]] < map[s[j]]) {
          curCount--;
        }
      }

      j++;
    }
  }

  return res;
};
