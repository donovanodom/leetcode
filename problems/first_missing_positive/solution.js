const firstMissingPositive = (nums) => {
    nums = [...new Set(nums.sort((a,b) => a - b).filter((x) => x > 0))]
    let i = 0
    if(nums[i] != 1) return 1
    console.log(nums)
    while(i < nums.length){
        if(nums[i] + 1 == nums[i + 1]){
            i++
        }else{
            return nums[i] + 1 
        } 
    }
    return nums[nums.length - 1] + 1
}