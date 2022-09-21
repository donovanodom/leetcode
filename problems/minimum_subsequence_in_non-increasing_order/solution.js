const minSubsequence = function(nums) {
    let target = nums.reduce((a,b) => a + b) / 2
    nums.sort((a,b) => b - a)
    let cur = 0
    for(i = 0; i < nums.length; i++){
        cur += nums[i]
        if(cur > target) return nums.slice(0,i + 1)
    }
}