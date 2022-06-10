/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let counter = 0;
    for(i in jewels){
        for(j in stones){
            if(jewels[i]==stones[j]){
                counter++;
            }
        }
    }
    return counter;
};