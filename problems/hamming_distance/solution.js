const hammingDistance = (x, y) => {
    x = x.toString(2), y = y.toString(2)
    const max = Math.max(x.length, y.length)
    x = x.padStart(max, '0'), y = y.padStart(max, '0')
    let ans = 0
    for(i = max; i >= 0; i--){
        if(x[i] != y[i]) ans++
    }
    return ans
}