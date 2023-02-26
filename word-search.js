/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let m = board.length;
  let n = board[0].length;

  if (m * n < word.length) return false;

  let backtrace = function(i, j, k) {
      if (i < 0 || i >= m || j <  0 || j >= n) return false;
      if (k == word.length - 1) {
          return board[i][j] == word[k];
      }
      if (board[i][j] !== word[k] || board[i][j] == -1) {
          return false;
      }

      const temp = board[i][j];
      board[i][j] = -1;

      let result = backtrace(i + 1, j, k + 1) || backtrace(i - 1, j, k + 1) || backtrace(i, j + 1, k + 1) || backtrace(i, j - 1, k + 1);

      board[i][j] = temp;

      return result;
  }

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          let result = backtrace(i, j, 0);
          if (result) {
              return true;
          }
      }
  }

  return false;
};