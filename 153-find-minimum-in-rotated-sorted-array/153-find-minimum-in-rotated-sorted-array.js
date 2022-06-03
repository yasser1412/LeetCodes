/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = nums[0];
    for(i in nums){
        if(min>nums[i]){
            min = nums[i];
        }
    }
    return min;
};