/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  if (n == 1) return [["Q"]];
  if (n == 2) return [];

  let res = [];

  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(".");
  }

  let backtrace = function (level, dp) {
    if (level == n) {
      res.push(dp.map((it) => it.join("")));
      return;
    }
    for (let j = 0; j < n; j++) {
      if (!isValid(level, j, dp)) {
        continue;
      }

      dp[level][j] = "Q";
      backtrace(level + 1, dp);
      dp[level][j] = ".";
    }
  };

  backtrace(0, dp);

  return res;
};

let isValid = function (i, j, arr) {
  for (let k = i - 1, m = 1; k >= 0; k--, m++) {
    if (arr[k][j] == "Q" || arr[k][j - m] == "Q" || arr[k][j + m] == "Q") {
      return false;
    }
  }

  return true;
};
