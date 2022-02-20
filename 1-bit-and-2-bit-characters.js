/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let len = bits.length;
    if (len == 1) return true;
    if (bits[len - 2] == 0) return true;

    let sum = 0;
    for (let i = len - 2; i >= 0; i--) {
        if (bits[i] == 0) {
            break;
        } else {
            sum++;
        }
    }

    return sum % 2 !== 1;
};