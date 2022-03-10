/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let i = Math.floor(Math.sqrt(area));

  while (area % i !== 0) {
    i--;
  }

  return [area / i, i];
};
