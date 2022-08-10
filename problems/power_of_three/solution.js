const isPowerOfThree = function(n) {
    if(n == 1) return true
    let factor = 3
    while(factor <= n){
        if(factor == n) return true
        factor *= 3
    }
    return false
}