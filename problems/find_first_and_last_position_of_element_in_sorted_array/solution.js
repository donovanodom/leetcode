const searchRange = (nums, target) => {
    let answer = [-1, -1]
    for(i = nums.length - 1; i >= 0; i--){
        if(nums[i] == target){
            answer.unshift(i)
            break
        }
    }
    for(i = 0; i < nums.length; i++){
        if(nums[i] == target){
            answer.unshift(i)
            break
        }
    }
    return answer.slice(0,2)
    
}