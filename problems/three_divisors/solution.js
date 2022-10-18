const isThree = function(n) {
    let count = 0, i = 1
    while(i <= n){
        if(n % i == 0) count++
        if(count > 3) return false
        i++
    }
    return count == 3
}