const threeConsecutiveOdds = function(arr) {
    let count = 0
    for(const num of arr){
        if(count == 3) return true
        if(num % 2 != 0) count++
        else count = 0
    }
    if(count == 3) return true
    return false
}