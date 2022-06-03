/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let isIn = false; 
    for(i in nums){
        if(target == nums[i]){
            isIn = true;
            return i;
        }
    }
    if(!isIn){
        return -1
    }
};