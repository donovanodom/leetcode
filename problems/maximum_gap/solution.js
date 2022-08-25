const maximumGap = function(nums) {
    const obj = {}
    for(const num of nums){
        obj[num] = true
    }
    let sorted = Object.keys(obj).map((key) => Number(key)), max = 0
    for(i = 1; i < sorted.length; i++){
        let dif = Math.abs(sorted[i] - sorted[i-1])
        max = Math.max(dif,max)
    }
    return max
}