const longestConsecutive = function(nums) {
    let max = 0, sub = 1, set = new Set(nums)
    while(set.size){
        let temp = nums.pop(), start = temp 
        set.delete(temp)
        while(set.has(start + 1)){
            sub++
            set.delete(start + 1)
            start++
        }
        start = temp 
        while(set.has(start - 1)){
            sub++
            set.delete(start - 1)
            start--
        }
        max = Math.max(sub, max)
        sub = 1
    }
    return max
}
