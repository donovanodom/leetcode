const maxProduct = function(nums) {
    let ans = nums[0], max = ans, min = ans
    for(i = 1; i < nums.length; i++){
        let temp = max, num = nums[i]
        max = Math.max(num, Math.max(num * max, num * min))
        min = Math.min(num, Math.min(num * temp, num * min))
        ans = Math.max(ans, max)
    }
    return ans
}