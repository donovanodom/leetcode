const largestAltitude = function(gain) {
    let alt = 0, max = alt
    for(i = 0; i < gain.length; i++){
        alt += gain[i]
        max = Math.max(max, alt)
    }
    return max
}