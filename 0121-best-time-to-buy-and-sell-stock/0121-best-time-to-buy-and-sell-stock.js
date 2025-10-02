/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0
    let j = 1
    let profitMax = 0
    while(i < prices.length) {
        if(prices[i] < prices[j]){
            profit = prices[j] - prices[i]
            profitMax = Math.max(profitMax, profit)
            j++
        }else {
            i = j
            j++
        }
    }
    return profitMax
};