const numberOfPairs = function(nums) {
    let answer = [0,0]
    for(i = nums.length - 1; i >= 0; i--){
        if(nums[i] == -1) continue
        let compare = nums.indexOf(nums[i])
        if(compare != i){
            answer[0]++
            nums[i] = -1
            nums[compare] = -1
        }else{
            answer[1]++
        }
    }
    return answer
}