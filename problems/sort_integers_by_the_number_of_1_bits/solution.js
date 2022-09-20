const sortByBits = function(arr) {
    let obj = {}
    arr.sort((a,b) => a - b)
    for(const num of arr){
        let bin = num.toString(2), count = 0
        for(const s of bin){
            if(s == '1') count++
        }
        if(!obj[count]) obj[count] = []
        obj[count].push(num)
    }
    let ans = []
    Object.values(obj).forEach((x) => ans.push(...x))
    return ans
}