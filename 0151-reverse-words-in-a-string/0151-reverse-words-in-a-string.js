/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ")
    console.log(words)
    let arr = []
    for(let i = 0; i < words.length; i++) {
        if(words[i] !== "") {
            arr.push(words[i])
        }
    }
        return arr.reverse().join(" ")
};