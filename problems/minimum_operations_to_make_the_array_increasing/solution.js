const minOperations = function(nums) {
    if(nums.length == 1) return 0
    let count = 0
    for(i = 1; i < nums.length; i++){
        if(nums[i] <= nums[i - 1]){
            let dif = nums[i - 1] + 1 - nums[i]
            count += dif
            nums[i] += dif
        }
    }
    return count
};