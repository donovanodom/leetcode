const countBinarySubstrings = function(s) {
    let count = 1, i = 1, prev = 0, res = 0
    while(i < s.length){
        if(s.charCodeAt(i) == s.charCodeAt(i-1)){
            count++
        }else{
            prev = count
            count = 1
        }
        if(prev >= count) res++
        i++
    }
    return res
}

