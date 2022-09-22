const finalPrices = function(p) {
    let i = 0
    while(i < p.length){
        let j = i + 1
        while(p[i] < p[j]) j++
        p[i] = p[j] ? p[i] - p[j] : p[i]
        i++
    }
    return p
}