const runningSum = function(nums) {
    let sum = 0
    for(i = 0; i < nums.length; i++){
        sum += nums[i]
        nums[i] = sum 
    }
    return nums
}