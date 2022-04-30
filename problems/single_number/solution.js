const singleNumber = (nums) => {
    if(nums.length == 1) return nums[0]
    for(i = 0; i < nums.length; i++){
        let stack = nums.filter((num) => num == nums[i])
        if(stack.length == 1) return stack[0]
    }
}