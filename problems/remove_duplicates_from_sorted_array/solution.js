const removeDuplicates = (nums) => {
    let point = 0
    for(i = 0; i < nums.length; i++){
        point++
        if(nums[i] == nums[point]){
            delete nums[i]
        }
    }
    nums.sort(function(a,b){return a - b})
    for(i = nums.length - 1; i >= 0; i--){
        if(!nums[i] && nums[i] != 0) nums.pop()
    }
};