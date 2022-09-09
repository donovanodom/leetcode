const repeatedNTimes = function(nums) {
    let n = nums.length / 2, obj = {}, counts = {}
    for(const num of nums){
        if(!obj[num]) obj[num] = 0
        obj[num]++
        counts[obj[num]] = num
    }
    return counts[n]
}