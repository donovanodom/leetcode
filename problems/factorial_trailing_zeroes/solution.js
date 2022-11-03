const trailingZeroes = function(n) {
    let i = 1, ans = 0
    while(5 ** i <= n){
        ans += Math.floor(n / 5 ** i)
        i += 1
    }       
    return ans
}