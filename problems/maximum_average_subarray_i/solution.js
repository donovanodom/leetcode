const findMaxAverage = function(nums, k) {
    if(nums.length == k) return nums.reduce((a,b) => a + b) / k
    let i = 0, j = k, curr = nums.slice(i,j).reduce((a,b) => a + b), max = curr / k
    while(j < nums.length){
        curr += nums[j]
        curr -= nums[i]
        max = Math.max(curr / k,max)
        i++
        j++
    }
    return max
}