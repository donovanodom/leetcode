const uniquePathsWithObstacles = function(grid) {
    let dp = [...grid]
    for(i = 0; i < grid.length; i++){
        for(j = 0; j < grid[i].length; j++){
            if(grid[i][j] == 1){
                dp[i][j] = 0
            }else if(i == 0 && j == 0){
                dp[i][j] = 1
            }else if(i == 0){
                dp[i][j] = dp[i][j - 1]
            }else if(j == 0){
                dp[i][j] = dp[i - 1][j]
            }else{
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }
    return dp.pop().pop()
}

