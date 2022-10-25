const numDecodings = function(s) {
    let dp = Array(s.length).fill(0), i = s.length - 1
    dp.push(1)
    while(i >= 0){
        if(s[i] == '0'){
            dp[i] = 0
        }else{
            dp[i] = dp[i + 1]
        }
        if(s[i + 1] && (s[i] == '1' || s[i] == '2' && Number(s[i + 1]) <= 6)){
            dp[i] += dp[i+2]
        }
        i--
    }
    return dp[0]
}