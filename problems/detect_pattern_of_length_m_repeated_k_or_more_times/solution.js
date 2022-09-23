const containsPattern = function(arr, m, k) {
    let i = 0, str = arr.map((x) => String(x)), max = 0
    while(i < str.length){
        let j = i + m, sub = 1
        while(j < str.length){
            if(str.slice(j).join(',').indexOf(str.slice(i,j).join(',')) == 0){
                const temp = i
                i = j
                j += j - temp
                sub++
                max = Math.max(sub,max)
            }else{
                sub = 1
                i++
                j = i + m
            }
        }
        i++
    }
    return max >= k
}