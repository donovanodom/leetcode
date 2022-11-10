const threeSumSmaller = function(nums, target) {
    let ans = 0, i = 0, rightLimit = nums.length - 1
    nums.sort((a,b) => a - b)
    while(i < nums.length){
        let j = i + 1, k = rightLimit
        while(nums[i] + nums[j] + nums[k] >= target && k > j){
            k--
            rightLimit = k
        } 
        while(j < k){
            let sum = nums[i] + nums[k], l = j
            while(sum + nums[j] < target && j < k) j++    
            ans += j - l
            k--
            j = i + 1
        }
        i++
    }
    return ans
}