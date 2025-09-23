/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x

    for(let i = 2; i <= x; i++) {
        if(i * i === x) return i
        if(i * i > x) return i - 1
    }
};