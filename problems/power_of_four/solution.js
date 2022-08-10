const isPowerOfFour = function(n) {
    let factor = 1
    while(factor <= n){
        if(factor == n) return true
        factor *= 4
    }
    return false
}