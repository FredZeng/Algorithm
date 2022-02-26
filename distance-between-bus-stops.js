/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  let min = Math.min(start, destination);
  let max = Math.max(start, destination);

  let sum = 0;
  let positive = 0;

  for (let i = 0, len = distance.length; i < len; i++) {
    sum += distance[i];

    if (i >= min && i < max) {
      positive += distance[i];
    }
  }

  return Math.min(positive, sum - positive);
};
