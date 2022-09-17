const sumZero = function(n) {
    if(n == 1) return [0]
    let ans = [], sum = 0
    for(i = 1; i < n + 1; i += 2){
        ans.push(i,-i)
    }
    if(n % 2 != 0){
        ans.push(ans.splice(ans.length-3).reduce((a,b) => a + b) - 2, 2)
    }
    return ans
}