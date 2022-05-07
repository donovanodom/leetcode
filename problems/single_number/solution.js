const singleNumber = (nums) => {
    if(nums.length == 1) return nums[0]
    nums = nums.sort(function(a,b){return a - b})
    let pair = 1
    for(i = 0; i < nums.length; i += 2){
        if(nums[i] != nums[pair]) return nums[i]
        pair += 2
    }
}