const countPrimes = function(n) {
    if(n == 0 || n == 1 || n == 2) return 0
    let dp = Array(n).fill(1) 
    for(i = 0; i < 2; i++){
        dp[i] = 0
    }
    for(i = 2; i < Math.sqrt(n) + 1; i++){
        if(dp[i]){
            for(j = i * i; j < n; j += i){
                dp[j] = 0
            }
        }
    }
    return dp.reduce((a, b) => a + b)
}