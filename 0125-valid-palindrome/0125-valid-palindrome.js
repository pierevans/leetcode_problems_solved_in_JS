/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789"
    
    if(s === " ") return true
    
    let str = s.split('')
    
    let newStr = str.filter(letter => {
        return alphanumeric.includes(letter.toLowerCase())
    })
    let word = newStr.join("").toLowerCase()
    console.log(word)
    let reversedWord = newStr.reverse().join("").toLowerCase()
    return word === reversedWord
};