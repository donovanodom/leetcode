const isMajorityElement = function(nums, target) {
    if(nums.length == 1) return nums[0] == target
    let l = 0, r = nums.length - 1
    while(nums[l] != target && l < nums.length){
        l++
    }
    while(nums[r] != target && r >= 0){
        r--
    }
    return r - l + 1 > nums.length / 2
}


