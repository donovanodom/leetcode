const canJump = function(nums) {
    if(!nums.includes(0)) return true
    let i = nums.length - 1, distance = 0
    while(i >= 0){
        if(nums[i] >= distance){
            distance = 0
        }
        distance++
        i--
    }
    return distance == 1
}