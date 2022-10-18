const isCovered = function(ranges, left, right) {
    let arr = []
    for(const range of ranges){
        let [l,r] = range
        while(l <= r){
            arr.push(l)
            l++
        }
    }
    while(left <= right){
        if(!arr.includes(left)) return false
        left++
    }
    return true
}