const sumBase = function(n, k) {
    n = n.toString(k)
    let ans = 0
    for(const num of n){
        ans += Number(num)
    }
    return ans
};