const canBeIncreasing = function(nums) {
    let i = 1
    while(i < nums.length){
        if(nums[i - 1] >= nums[i] && nums[i - 1] < nums[i + 1] || nums[i - 1] >= nums[i] && i == nums.length - 1){
            nums.splice(i, 1)
            break
        }else if(nums[i - 1] >= nums[i]){
            nums.splice(i - 1, 1)
            break
        }
        i++
    }
    i = 1
    while(i < nums.length){
        if(nums[i - 1] >= nums[i]){
            return false
        }
        i++
    }
    return true
}