const busyStudent = function(s, e, q) {
    let res = 0
    for(i = 0; i < s.length; i++){
        if(s[i] <= q && e[i] >= q) res++
    }
    return res
}