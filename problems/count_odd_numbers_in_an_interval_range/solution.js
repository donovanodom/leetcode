const countOdds = (low, high) => {
    let diff = high - low
    if(low % 2 != 0) diff++
    if(high % 2 != 0) diff++
    return diff / 2
}