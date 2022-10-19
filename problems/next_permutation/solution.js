const nextPermutation = function(nums) {
    let i = nums.length - 2
    while(i >= 0 && nums[i + 1] <= nums[i]) i--
    if(i >= 0){
        let j = nums.length - 1
        while(nums[j] <= nums[i]){
           j-- 
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    if(i < 0){
        nums.reverse()
    }else{
        nums.splice(i + 1, nums.slice(i + 1).length, ...nums.slice(i + 1).reverse())
    }  
}
