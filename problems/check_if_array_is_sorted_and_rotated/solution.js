const check = function(nums) {
    if([...new Set(nums)].length == 1) return true
    let br = 1
    if(nums[0] < nums[nums.length - 1]) br--
    for(i = 1; i < nums.length; i++){
        if(nums[i] < nums[i-1]) br--
    }
    return br == 0
}