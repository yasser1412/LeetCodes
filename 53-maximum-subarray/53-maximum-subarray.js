/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let counter = 0;
    let max_sum = nums[0];
    for(i in nums){
        counter+=nums[i];
        if(counter > max_sum){
            max_sum = counter
        }
        if(counter < 0){
            counter = 0;
        }
    }
    return max_sum
    
};