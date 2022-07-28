const countBits = function(n) {
    let res = new Array(n + 1).fill(0), off = 1
    for(i = 1; i < n + 1; i++){
        if(off * 2 == i){
            off *= 2
        }
        res[i] = res[i - off] + 1
    }
    return res
}

