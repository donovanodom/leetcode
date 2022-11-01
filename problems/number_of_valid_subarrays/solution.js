const validSubarrays = function(nums) {
    let ans = 0, stack = []
    for(i = 0; i < nums.length; i++){
        let num = nums[i]
        while(stack.length && nums[stack[stack.length - 1]] > num){
            ans += i - stack.pop()
        }
        stack.push(i)
    }
    while(stack.length){
        ans += nums.length - stack.pop()
    }
    return ans
}

