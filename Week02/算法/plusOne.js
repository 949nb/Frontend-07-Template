// 66.加一

const arr = [0, 9, 2]
/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0)
            return digits;
    }
    digits.unshift(1)
    return digits
};

console.log(plusOne(arr));