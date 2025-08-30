/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // let arr = s.split(" ")
    // let array = []
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] !== "") {
    //         array.push(arr[i])
    //     }
    // }
    // return array[array.length -1].length

    words = s.trim().split(" ")
    return words[words.length -1].length 
};