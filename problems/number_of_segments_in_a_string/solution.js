const countSegments = function(s) {
    if(!s.length) return 0
    s = s.split(' ')
    let ans = s.length
    for(const x of s){
        if(!x) ans--
    }
    return ans
}