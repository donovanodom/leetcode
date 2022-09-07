const rotateString = function(s, goal) {
    let n = s.length
    while(n >= 0){
        s = s.slice(1) + s.slice(0,1)
        if(s == goal) return true
        n--
    }
    return false
}