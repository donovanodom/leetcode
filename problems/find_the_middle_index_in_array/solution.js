const findMiddleIndex = (nums) => {
    let left = 0, right = nums.reduce((a,b) => a + b), i = 0  
    while(i < nums.length){
        right -= nums[i]
        if(left == right) return i
        left += nums[i]
        i++
    }
    return -1
}