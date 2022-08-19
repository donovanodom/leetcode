const largestUniqueNumber = function(nums) {
    let seen = new Set(), i = nums.length - 1, max = -1
    while(i >= 0){
        if(nums.indexOf(nums[i]) == i && !seen.has(nums[i])) max = Math.max(max,nums[i])
        seen.add(nums[i])
        i--
    }
    return max
}