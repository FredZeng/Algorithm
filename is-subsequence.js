/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  if (s === t || t.indexOf(s) > -1) return true;

  let set1 = new Set(s.split(""));
  let set2 = new Set(t.split(""));

  if (Array.from(set1).some((it) => !set2.has(it))) {
    return false;
  }

  let max = s[0] == t[0] ? 1 : 0;

  for (let i = 1, len = t.length; i < len && max < s.length; i++) {
    if (t[i] == s[max]) {
      max++;
    }
  }

  return max == s.length;
};
