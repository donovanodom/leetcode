const repeatedNTimes = function(nums) {
    let n = nums.length / 2, obj = {}
    for(const num of nums){
        if(!obj[num]) obj[num] = 0
        obj[num]++
        if(obj[num] == n) return num
    }
}