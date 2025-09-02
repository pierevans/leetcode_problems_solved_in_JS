/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

 let romanNums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let sum = 0
    let i = 0

    while(i < s.length) {
        let curr = romanNums[s[i]]
        let next = romanNums[s[i + 1]]
        if(next && curr < next) {
            sum += next - curr
            i += 2
        } else {
            sum += curr
            i++
        }
    }
    return sum
};