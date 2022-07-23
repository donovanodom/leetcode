const missingNumber = function(nums) {
    let sum1 = 0, sum2 = 0
    for(i = 0; i < nums.length + 1; i++){
        sum1 += i
        if(i < nums.length) sum2 += nums[i]
    }
    return sum1 - sum2
}