const kLengthApart = function(nums, k) {
    let i = 0
    while(i < nums.length){
        let j = i + 1
        if(!nums[i]){
            i++
            continue
        }
        while(nums[i] && nums[j] == 0) j++
        if(nums[j] && j - i <= k) return false
        i++
    }
    return true
}