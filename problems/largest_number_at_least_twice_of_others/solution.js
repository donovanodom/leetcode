const dominantIndex = function(nums) {
    let max = Math.max(...nums), index
    for(i = 0; i < nums.length; i++){
        if(nums[i] == max){
            index = i
        }else if(nums[i] > max / 2){
            return -1
        }
    }
    return index
}