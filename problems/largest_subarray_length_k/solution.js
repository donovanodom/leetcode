const largestSubarray = function(nums, k) {
    let i = 1, cur = nums.slice(0,k)
    while(i < nums.length - k + 1){
        if(nums[i] > cur[0]){
            cur = nums.slice(i,i + k)
        }else if(nums[i] == cur[0]){
            let j = i + 1, p = 1
            while(j < i + k){
                if(nums[j] > cur[p]){
                    cur = nums.slice(i, i + k)
                    break
                }else if(nums[j] < cur[p]){
                    break
                }
                j++
                p++
            }
        }
        i++
    }
    return cur
}