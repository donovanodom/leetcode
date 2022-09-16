const stringShift = function(s, shift) {
    for(let [d, a] of shift){
        a = a % s.length
        if(a == 0) continue
        s = d ? s.slice(s.length - a) + s.slice(0, s.length - a) : s.slice(a) + s.slice(0,a)
    }
    return s
}