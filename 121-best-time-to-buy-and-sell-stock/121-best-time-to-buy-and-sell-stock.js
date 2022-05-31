/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0;
    let sell = 1;
    let profit = 0;
    
    while(sell < prices.length){
        if(prices[sell] > prices[buy]){
            let diff = prices[sell] - prices[buy];
            profit = Math.max(profit, diff);
        } else{
            buy = sell;
        }
        sell++;
    }
    return profit;
};