/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  let arr = new Array(n).fill(0);

  for (let i = 0; i < bookings.length; i++) {
    const [j, k, seats] = bookings[i];

    arr[j - 1] += seats;
    k < n && (arr[k] -= seats);
  }

  let result = [arr[0]];

  for (let i = 1; i < n; i++) {
    result.push(result[i - 1] + arr[i]);
  }

  return result;
};
