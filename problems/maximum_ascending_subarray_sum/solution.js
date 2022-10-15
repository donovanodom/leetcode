const maxAscendingSum = function(nums) {
    let max = 0, i = 0
    while(i < nums.length){
        let j = i + 1, sum = nums[i]
        while(nums[j] > nums[j - 1]){
            sum += nums[j]
            j++
        }
        max = Math.max(max, sum)
        i = j
    }
    return max
}