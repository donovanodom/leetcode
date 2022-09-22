const xorOperation = function(n, start) {
    let arr = []
    for(i = 0; i < n; i++){
        arr.push(start + 2 * i)
    }
    return arr.reduce((a,b) => a ^ b)
}