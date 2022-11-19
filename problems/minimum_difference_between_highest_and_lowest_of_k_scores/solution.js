const minimumDifference = function(nums, k) {
    if(nums.length == 1) return 0
    nums.sort((a,b) => a - b)
    let i = 0, ans = Infinity
    while(i <= nums.length - k){
        let j = i + k - 1
        ans = Math.min(Math.abs(nums[i] - nums[j]), ans)
        i++
    }
    return ans
}