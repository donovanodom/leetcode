const findMin = function(nums) {
    // edge case for one element 
    if(nums.length == 1) return nums[0] 
    // set variables for first and last element
    let start = 0, end = nums.length - 1 
    // if already sorted return first element
    if(nums[start] < nums[end]) return nums[start] 
    while(start <= end){
        // set our middle element
        let middle = Math.floor((start + end) / 2) 
        // if next element is decending, next element must be the smallest
        if(nums[middle] > nums[middle + 1]){
            return nums[middle + 1] 
        // if previous element is ascending, current element must be the smallest 
        }else if(nums[middle] < nums[middle - 1]){
            return nums[middle]
        }else{
            // if middle element is less than start, check the first half of the array
            if(nums[middle] < nums[start]){
                end = middle - 1
            // if middle element is greater than start, check the second half of the array
            }else{
                start = middle + 1
            }   
        }   
    }
}