const largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b) => a - b)
    let i = 0, j = 0
    while(i < k){
        if(nums[i] < nums[j]) j = i
        nums[i] < 0 ? nums[i] = Math.abs(nums[i]) : nums[j] = -nums[j]
        i++
    }
    return nums.reduce((a,b) => a + b)
}