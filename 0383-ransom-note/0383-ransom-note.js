/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = {}
    let j = 0
    for(let i = 0; i < magazine.length; i++) {
        let key = magazine[i]
        
        if(!(key in map)) {
            map[key] = 1
        } else {
            map[key] += 1 
        }
    }
    for(let i = 0; i < ransomNote.length; i++) {
        // console.log()
        if(!(ransomNote[i] in map) || map[ransomNote[i]] === 0) {
            return false
        }
        map[ransomNote[i]]--
    }
    return true
};