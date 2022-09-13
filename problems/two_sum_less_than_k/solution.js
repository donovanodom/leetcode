const twoSumLessThanK = function(nums, k) {
    let max = -1
    for(i = 0; i < nums.length; i++){
        for(j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] < k) max = Math.max(nums[i] + nums[j],max)
        }
    }
    return max
};