/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const target = "123450";

  const neighbor = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4],
  ];
  const set = new Set();
  let step = 0;
  let queue = [board.map((it) => it.join("")).join("")];

  while (queue.length > 0) {
    let nextQueue = [];

    for (let i = 0; i < queue.length; i++) {
      if (queue[i] == target) {
        return step;
      }

      set.add(queue[i]);

      let index = queue[i].indexOf("0");

      for (
        let j = 0, arr = queue[i].split("");
        j < neighbor[index].length;
        j++
      ) {
        arr[index] = arr[neighbor[index][j]];
        arr[neighbor[index][j]] = "0";

        let tmp = arr.join("");
        arr[neighbor[index][j]] = arr[index];
        arr[index] = "0";

        if (!set.has(tmp)) {
          nextQueue.push(tmp);
          set.add(tmp);
        }
      }
    }

    step++;
    queue = nextQueue;
  }

  return -1;
};
