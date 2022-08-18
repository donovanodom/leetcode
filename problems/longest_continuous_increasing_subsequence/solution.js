const findLengthOfLCIS = function(nums) {
    let ans = 1, max = 1
    for(i = 0; i < nums.length - 1; i++){
        if(nums[i] < nums[i+1]){
            ans++
            max = Math.max(ans,max)
        }else{
            ans = 1
        }
    }
    return max
}