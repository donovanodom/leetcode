const isConsecutive = function(nums) {
    let min = Math.min(...nums), max = Math.max(...nums)
    if(nums.length != max - min + 1) return false
    let set = new Set([...nums])
    if(set.size != nums.length) return false
    for(const num of nums){
        if(!set.has(num + 1) && num != max) return false
    }
    return true
}