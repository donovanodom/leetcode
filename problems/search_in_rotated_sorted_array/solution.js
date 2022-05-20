const search = (nums, target) => {
    if(nums.indexOf(target) == 0) return 0
    return nums.indexOf(target) ? nums.indexOf(target) : -1
}