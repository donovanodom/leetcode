const checkOnesSegment = function(s) {
    let i = 0, count = 0
    while(i < s.length){
        if(s[i] == '1'){
            count++
            while(s[i] == '1'){
                i++
            }
        }
        i++
    }
    return count == 1
}