/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let temp = 0;
    while(temp < nums.length){
        for(let i=1; i<nums.length; i++){
            if (nums[temp]==nums[i] && temp!=i){
                return true;
            }
        }
        temp++;
    }
    return false;
};