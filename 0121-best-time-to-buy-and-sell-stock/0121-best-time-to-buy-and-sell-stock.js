/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0
    let sell = 1
    let maxProfit = 0

    while(buy < prices.length) {
        if(prices[buy] < prices[sell]) {
            let profit = prices[sell] - prices[buy]
            maxProfit  = Math.max(maxProfit, profit)
            sell++
        }else{
            buy = sell
            sell++
        }
    }
        return maxProfit
};