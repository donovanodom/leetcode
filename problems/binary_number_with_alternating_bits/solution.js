const hasAlternatingBits = function(n) {
    let bin = n.toString(2)
    for(i = 1; i < bin.length; i++){
        if(bin[i] == bin[i - 1]) return false
    }
    return true
}