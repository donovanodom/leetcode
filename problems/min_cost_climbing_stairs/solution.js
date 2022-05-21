const minCostClimbingStairs = (cost) => {
    let dp = [0,0]
    for(i = 2; i <= cost.length; i++){
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }
    return dp[cost.length]
}