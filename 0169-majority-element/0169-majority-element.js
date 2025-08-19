/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     let object = {}
   let highestVal = 0 // the highest value
   let highestKey = ""

   for(let i = 0; i < nums.length; i++) {
        let num = nums[i]

        if(num in object) {
            object[num] += 1
        } else {
            object[num] = 1
        }

        if(object[num] > highestVal) {
            highestVal = object[num]
            highestKey = num
        }
   }
    return highestKey
};