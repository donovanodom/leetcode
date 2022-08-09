const summaryRanges = function(nums) {
    let i = 0, answer = []
    while(i < nums.length){
        let j = i + 1
        if(nums[i] + 1 == nums[j]){
            while(nums[j] - 1 == nums[j - 1]){
                j++
            }
            answer.push(`${nums[i]}->${nums[j - 1]}`)
            i = j
        }else{
            answer.push(`${nums[i]}`)
            i++
        }
    }
    return answer
}