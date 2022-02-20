/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] == 1) return 0;

    let row = obstacleGrid.length;
    let col = obstacleGrid[0].length;

    let arr = new Array(row);
    for (let i = 0; i < row; i++) {
        arr[i] = new Array(col);
    }
    arr[0][0] = 1;

    for (let i = 1, block = false; i < col; i++) {
        if (obstacleGrid[0][i] == 1) {
            block = true;
        }
        arr[0][i] = block ? 0 : 1;
    }

    for (let j = 1, block = false; j < row; j++) {
        if (obstacleGrid[j][0] == 1) {
            block = true;
        }
        arr[j][0] = block ? 0 : 1;
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (obstacleGrid[i][j] == 1) {
                arr[i][j] = 0;
            } else {
                arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
            }
        }
    }

    return arr[row - 1][col - 1] || 0;
};