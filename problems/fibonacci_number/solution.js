const fib = (n) => {
    let seq = [0,1]
    if(n < 2) return seq[n]
    for(i = 1; i < n; i++){
        let num = seq[i] + seq[i - 1]
        seq.push(num)
    }
    return seq[seq.length - 1]
}