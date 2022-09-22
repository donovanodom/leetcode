const shuffle = function(nums, n) {
    let ans = Array(2 * n).fill(0)
    for(i = 0; i < n; i++){
        ans[i * 2] = nums[i]
        ans[i * 2 + 1] = nums[i + n]
    }
    return ans
}