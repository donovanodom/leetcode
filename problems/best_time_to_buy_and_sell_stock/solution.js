const maxProfit = (prices) => {
    let profit = 0, min = prices[0]
    for(let i = 1; i < prices.length; ++i) { 
        if(min > prices[i]) min = prices[i]
        if(prices[i] - min > profit) profit = prices[i] - min
    }
    return profit
}