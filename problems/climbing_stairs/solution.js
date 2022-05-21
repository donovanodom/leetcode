const climbStairs = (n) => {
    let seq = [0, 1]
    for(i = 1; i < n + 1; i++){
        seq.push(seq[i] + seq[i - 1])
    }
    return seq[seq.length - 1]
}