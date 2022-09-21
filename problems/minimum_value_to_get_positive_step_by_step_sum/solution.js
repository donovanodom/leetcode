const minStartValue = function(nums) {
    let sum = 0, min = Infinity, neg = false
    for(const num of nums){
        sum += num
        if(sum < 0) neg = true
        min = Math.min(min, sum)
    }
    return neg ? Math.abs(min) + 1 : 1
}