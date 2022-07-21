const targetIndices = function(nums, target) {
    let answer = []
    nums.sort((a,b) => a - b)
    for(i=0;i<nums.length;i++){
        if (nums[i] == target) answer.push(i)
    }
    return answer
}
