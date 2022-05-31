/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = []
    let product1 = 1
    let product2 = 1
    let zeroscount = 0
    for(let j=0; j<nums.length; j++){
        product1 *= nums[j];
        if(nums[j] != 0){
            product2 *= nums[j];
        }else{
            zeroscount++;
        }
            
    }
    for(let i=0; i< nums.length; i++){
        if(zeroscount > 1){
            arr.push(0)
        } else if(nums[i] == 0){
                arr.push(product2)            
        } else{
            arr.push(product1/nums[i]);                    
        }
    }


  return arr;  
};