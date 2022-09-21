const findLucky = function(arr) {
    let obj = {}
    for(const num of arr){
        if(!obj[num]) obj[num] = 0
        obj[num]++
    }
    let max = -1
    Object.keys(obj).forEach((key) => {
        if(key == obj[key]) max = Math.max(obj[key], max)
    })
    return max
}