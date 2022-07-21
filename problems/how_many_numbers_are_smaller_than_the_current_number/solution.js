const smallerNumbersThanCurrent = function(nums) {
    const answer = [...nums]
    nums.sort((a,b) => a-b)
    for(i=0;i<nums.length;i++){
        answer[i] = nums.indexOf(answer[i])
    }
    return answer
}