const maximumDifference = function(nums) {
    let i = 0, max = -1
    while(i < nums.length){
        let j = i + 1
        while(j < nums.length){
            if(nums[j] > nums[i]) max = Math.max(nums[j] - nums[i], max)
            j++
        }
        i++
    }
    return max
}