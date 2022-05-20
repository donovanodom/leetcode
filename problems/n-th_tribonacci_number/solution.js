const tribonacci = (n) => {
    let seq = [0,1,1]
    if(n < 3) return seq[n]
    for(i = 2; i < n; i++){
        let num = seq[i] + seq[i - 1] + seq[i - 2]
        seq.push(num)
    }
    return seq[seq.length - 1]
}