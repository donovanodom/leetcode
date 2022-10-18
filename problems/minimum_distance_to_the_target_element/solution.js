const getMinDistance = function(nums, target, start) {
    let i = start, j = start, min = Infinity
    while(i >= 0 || j < nums.length){
        if(i >= 0){
            if(nums[i] == target) min = Math.min(min, Math.abs(i - start))
            i--
        }
        if(j < nums.length){
            if(nums[j] == target) min = Math.min(min, Math.abs(j - start))
            j++
        }
    }
    return min
}