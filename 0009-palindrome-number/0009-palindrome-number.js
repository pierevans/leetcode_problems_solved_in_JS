/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversedX = x.toString().split("").reverse()
    return x.toString() === reversedX.join("")
};