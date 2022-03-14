/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  var s = (s1 + " " + s2).split(" ");
  var map = {};

  s.forEach((it) => {
    if (map[it]) {
      map[it]++;
    } else {
      map[it] = 1;
    }
  });

  return Object.keys(map).filter((it) => map[it] == 1);
};
