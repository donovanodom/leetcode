const fourSum = function(nums, target) {
    let answer = []
    nums.sort((a,b) => a - b)
    for(i = 0; i < nums.length - 3; i++){
        for(j = i + 1; j < nums.length - 2; j++){
            let min = j + 1, max = nums.length - 1
            while(min < max){
                let sum = nums[i] + nums[j] + nums[min] + nums[max]
                if(sum == target){
                    answer.push([nums[i],nums[j],nums[min],nums[max]])
                    while(nums[max] == nums[max - 1]){
                        max--
                    }
                    while(nums[min] == nums[min + 1]){
                        min++
                    }
                    max--
                    min++
                }else if(sum > target){
                    max--
                }else{
                    min++
                }
            }
            while(nums[j] == nums[j+1]){
                j++
            }
            while(nums[i] == nums[i+1]){
                i++
            }
        }
    }
    return answer
}