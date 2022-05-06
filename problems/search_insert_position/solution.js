const searchInsert = (nums, target) => {
    let index = 0
    for(i = 0; i < nums.length; i++){
        if(nums[i] === target){
            index = i
        }
        if(nums[i] < target && nums[i+1] > target){
            index = i + 1
        }
        if(nums[nums.length - 1] < target){
            index = nums.length
        }
    }
    return index
};