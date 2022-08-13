/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let m = board.length;
  let n = board[0].length;

  if (m < 3 || n < 3) {
    return;
  }

  let arr = [];
  for (let i = 0; i < m; i++) {
    arr.push(new Array(n).fill(0));
  }

  let visit = [];
  for (let j = 0; j < n; j++) {
    arr[0][j] = 1;
    arr[m - 1][j] = 1;

    if (board[0][j] === "O") {
      visit.push([0, j]);
    }
    if (board[m - 1][j] === "O") {
      visit.push([m - 1, j]);
    }
  }

  for (let i = 1; i < m - 1; i++) {
    arr[i][0] = 1;
    arr[i][n - 1] = 1;

    if (board[i][0] === "O") {
      visit.push([i, 0]);
    }
    if (board[i][n - 1] === "O") {
      visit.push([i, n - 1]);
    }
  }

  while (visit.length > 0) {
    let nextQueue = [];

    for (let i = 0, len = visit.length; i < len; i++) {
      let [x, y] = visit[i];

      let leftX = x - 1;
      let rightX = x + 1;
      let topY = y - 1;
      let bottomY = y + 1;

      let result = [
        [leftX, y],
        [rightX, y],
        [x, topY],
        [x, bottomY],
      ];
      for (let j = 0; j < result.length; j++) {
        let [dx, dy] = result[j];

        if (dx < 0 || dx >= m || dy < 0 || dy >= n || arr[dx][dy] === 1) {
          continue;
        }

        arr[dx][dy] = 1;

        if (board[dx][dy] === "O") {
          nextQueue.push([dx, dy]);
        }
      }
    }

    visit = nextQueue;
  }

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (arr[i][j] === 0) {
        board[i][j] = "X";
      }
    }
  }
};
