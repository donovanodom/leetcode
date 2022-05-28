const numIdenticalPairs = (nums) => {
    let answer = 0, i = 0, j = 1
    while(i < nums.length - 1){
        if(nums[i] == nums[j]){ 
            answer++
            if(j == nums.length - 1){
                i++
                j = i + 1
            }else{
                j++
            }
        }else if(j == nums.length - 1){
            i++
            j = i + 1
        }else{
            j++
        } 
    }
    return answer
}