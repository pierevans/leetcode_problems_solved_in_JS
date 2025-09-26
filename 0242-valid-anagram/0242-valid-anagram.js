/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    
    let map = {}

    for(let word1 of s) {
        if(!(word1 in map)) {
            map[word1] = 1
        } else {
            map[word1]++
        }
    }

    for(let word2 of t) {
        if(!map[word2]) {
            return false 
        }
        map[word2]--
    }
    return true
};