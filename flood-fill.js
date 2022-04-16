/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  dfs(image, sr, sc, image[sr][sc], newColor);

  return image;
};

let dfs = function (image, sr, sc, target, newColor) {
  if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) {
    return;
  }

  if (image[sr][sc] !== target) {
    return;
  }

  if (image[sr][sc] == newColor) {
    return;
  }

  image[sr][sc] = newColor;

  dfs(image, sr + 1, sc, target, newColor);
  dfs(image, sr - 1, sc, target, newColor);
  dfs(image, sr, sc + 1, target, newColor);
  dfs(image, sr, sc - 1, target, newColor);
};
