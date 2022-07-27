const pivotIndex = function(nums) {
    if(nums.length == 1) return 0    
    let left = 0, right = nums.slice(1).reduce((a,b) => a + b)
    for(i = 1; i < nums.length + 1; i++){
        if(left == right) return i - 1
        left += nums[i - 1]
        right -= nums[i]
    }
    return -1
} 