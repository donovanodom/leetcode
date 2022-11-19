const countKDifference = function(nums, k) {
    nums.sort((a,b) => a - b)
    let i = 0, total = 0
    while(i < nums.length){
        let l = i
        while(nums[i] == nums[i + 1]) i++
        let j = i + 1
        while(j < nums.length){
            let r = j 
            while(nums[j] == nums[j + 1]) j++
            if(Math.abs(nums[i] - nums[j]) == k){
                total += (i - l + 1) * (j - r + 1)
            } 
            j++
        }
        i++
    }
    return total
}