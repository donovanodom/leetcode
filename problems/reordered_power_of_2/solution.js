const reorderedPowerOf2 = function(n) {
    if(n == 1) return true
    const pows = Array(29).fill(0).map((_,i) => i + 1)
    for(const pow of pows){
        let str1 = String(2 ** pow).split('').sort().join(''), str2 = String(n).split('').sort().join('')
        if(str1.length > str2.length) break
        if(str1 == str2) return true
    }
    return false
}