/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  for (let i = 0; i < m; i++) {
    if (grid[i][0] == 0) {
      dfs(grid, i, 0);
    }
    if (grid[i][n - 1] == 0) {
      dfs(grid, i, n - 1);
    }
  }

  for (let j = 1; j < n - 1; j++) {
    if (grid[0][j] == 0) {
      dfs(grid, 0, j);
    }
    if (grid[m - 1][j] == 0) {
      dfs(grid, m - 1, j);
    }
  }

  let result = 0;

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (grid[i][j] == 0) {
        result++;
        dfs(grid, i, j);
      }
    }
  }

  return result;
};

/**
 * @param {number[][]} grid
 * @param {number} i
 * @param {number} j
 * @return {void}
 */
let dfs = function (grid, i, j) {
  let m = grid.length;
  let n = grid[0].length;

  if (i < 0 || j < 0 || i >= m || j >= n) {
    return;
  }

  if (grid[i][j] == 1) {
    return;
  }

  grid[i][j] = 1;

  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
};
