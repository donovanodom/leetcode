const specialArray = function(nums) {
    let i = 0, p = 0
    nums.sort((a,b) => a - b)
    while(i <= Math.max(...nums)){
        if(nums.slice(p).length == i) return i
        while(i >= nums[p]) p++
        i++
    }
    return -1
}