/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let rowLen = grid.length;
    let colLen = grid[0].length;

    let arr = new Array(rowLen);
    for (let i = 0; i < rowLen; i++) {
        arr[i] = new Array(colLen);
    }
    arr[0][0] = grid[0][0];

    for (let i = 1; i < rowLen; i++) {
        arr[i][0] = grid[i][0] + arr[i - 1][0];
    }
    for (let j = 1; j < colLen; j++) {
        arr[0][j] = grid[0][j] + arr[0][j - 1];
    }

    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < colLen; j++) {
            arr[i][j] = Math.min(arr[i][j - 1], arr[i - 1][j]) + grid[i][j];
        }
    }

    return arr[rowLen - 1][colLen - 1];
};