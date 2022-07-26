const findMaxConsecutiveOnes = function(nums) {
    let max = 0, submax = 0
    for(const num of nums){
        if(num == 1) submax++
        if(num == 0){
            if(max > nums.length/2) break
            submax = 0
        } 
        max = Math.max(submax, max)
        
    }
    return max
}