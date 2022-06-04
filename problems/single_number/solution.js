const singleNumber = (nums) => {
    let i = 0, answer = 0
    while(i < nums.length){
        answer = answer ^ nums[i]
        i++
    }
    return answer
}