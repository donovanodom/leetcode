const productExceptSelf = function(nums) {
    let arr1 = Array(nums.length).fill(0).map((_,i) => i == 0 ? 1 : 0), 
        arr2 = Array(nums.length).fill(0).map((_,i) => i == nums.length - 1 ? 1 : 0)
    for(i = 1; i < nums.length; i++){
        arr1[i] = arr1[i - 1] * nums[i - 1]
    }
    for(i = nums.length - 2; i >= 0; i--){
        arr2[i] = arr2[i + 1] * nums[i + 1]
    }
    for(i = 0; i < nums.length; i++){
        nums[i] = arr1[i] * arr2[i]
    }
    return nums
}