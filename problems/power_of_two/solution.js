const isPowerOfTwo = (n) => {
    let result = false
    const powers = [...Array(32).keys()]
    powers.push(powers.map((p) => 0 - p))
    for(const p in powers){
        if(2 ** p == n) result = true
    }
    return result
}