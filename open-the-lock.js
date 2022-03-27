/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  if ("0000" == target) return 0;

  let visited = new Set(deadends);
  if (visited.has("0000")) return -1;

  visited.add("0000");
  let queue = ["0000"];
  let step = 0;

  while (queue.length > 0) {
    let nextQueue = [];

    for (let i = 0, len = queue.length; i < len; i++) {
      let cur = queue[i];

      if (cur == target) {
        return step;
      }
      for (let j = 0, str = cur.split(""); j < 4; j++) {
        let origin = str[j];

        str[j] = (+origin + 1) % 10;
        let next = str.join("");
        if (!visited.has(next)) {
          nextQueue.push(next);
          visited.add(next);
        }

        str[j] = origin == "0" ? "9" : origin - 1;
        next = str.join("");
        if (!visited.has(next)) {
          nextQueue.push(next);
          visited.add(next);
        }

        str[j] = origin;
      }
    }

    step++;
    queue = nextQueue;
  }

  return -1;
};
