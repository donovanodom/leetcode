const fairCandySwap = function(aliceSizes, bobSizes) {
    let sumA = aliceSizes.reduce((a,b) => a + b), sumB = bobSizes.reduce((a,b) => a + b)
    let res = [], dif = (sumB - sumA) / 2, set = new Set(aliceSizes)
    for(const el of bobSizes){
        if(set.has(el - dif)) return [el - dif,el]
    }
    return []
}