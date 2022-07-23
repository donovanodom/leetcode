const missingNumber = function(nums) {
    const nums2 = [...Array(nums.length + 1).keys()]
    nums.sort((a,b) => a-b)
    if(nums[0] != 0) return 0
    if(nums[nums.length - 1] != nums.length) return nums.length
    let l = 0, r = nums.length - 1, m = Math.floor(nums.length/2)
    while(l <= r){
        if(nums[l] + 1 != nums[l + 1]) return nums[l] + 1
        if(nums[r] - 1 != nums[r - 1]) return nums[r] - 1
        if(nums[m] != nums2[m]){
            r = m
            m = Math.floor((r+l)/2)
        }else if(nums[m] == nums2[m]){
            l = m
            m = Math.floor((r+l)/2)
        } 
    }
}