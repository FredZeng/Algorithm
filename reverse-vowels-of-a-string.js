/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  if (s.length == 1) return s;

  let arr = s.split("");

  let i = 0;
  let j = s.length - 1;

  let map = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
  };

  while (i < j) {
    if (map[s[i]] && map[s[j]]) {
      // switch
      let tmp = s[i];
      arr[i] = s[j];
      arr[j] = tmp;
      i++;
      j--;
    } else if (map[s[i]]) {
      j--;
    } else if (map[s[j]]) {
      i++;
    } else {
      i++;
      j--;
    }
  }

  return arr.join("");
};
