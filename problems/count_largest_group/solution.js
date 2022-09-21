const countLargestGroup = function(n) {
    let obj = {}, max = 0
    for(i = 1; i <= n; i++){
        let sum = 0, d = String(i)
        for(const char of d){
            sum += Number(char)
        }
        if(!obj[sum]) obj[sum] = 0
        obj[sum]++
        max = Math.max(max, obj[sum])
    }
    return Object.keys(obj).filter((key) => obj[key] == max).length
}