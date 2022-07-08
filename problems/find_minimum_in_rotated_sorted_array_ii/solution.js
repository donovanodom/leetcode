const findMin = function(nums) {
    if(nums.length < 2) return nums[0] 
    let start = 0, end = nums.length - 1 
    if(nums[start] < nums[end]) return nums[start] 
    while(start <= end){
        let middle = Math.floor((start + end) / 2) 
        if(nums[middle] < nums[middle - 1]) return nums[middle]
        if(nums[middle] > nums[middle + 1]) return nums[middle + 1]
        if(nums[middle] > nums[end]){ 
            start = middle + 1
        }else if(nums[middle] < nums[end]){
            end = middle
        }else{
            end--       
        }   
    }
    return nums[0]
}