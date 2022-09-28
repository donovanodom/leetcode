const sumOfUnique = function(nums) {
    let obj = {}
    for(const num of nums){
        if(!obj[num]) obj[num] = 0
        obj[num]++
    }
    let uniqs = Object.keys(obj).filter((x) => obj[x] == 1)
    return uniqs.length ? uniqs.reduce((a,b) => Number(a) + Number(b)) : 0
}