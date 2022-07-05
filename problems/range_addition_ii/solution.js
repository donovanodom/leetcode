const maxCount = function(m, n, ops) {
    if(!ops.length) return m * n
    const start = ops[0]
    let x = start[0], y = start[1]
    for(const [a,b] of ops){
        if(a > x && b > y) continue
        if(a < x) x = a
        if(b < y) y = b  
    }
    return x * y
}