const buildArray = function(nums) {
    let i = 0, answer = Array(nums.length).fill(0)
    while(i < nums.length){
        answer[i] = nums[nums[i]]
        i++
    }
    return answer
}