const areOccurrencesEqual = function(s) {
    let obj = {}
    for(const char of s){
        if(!obj[char]) obj[char] = 0
        obj[char]++
    }
    return [...new Set(Object.values(obj))].length == 1
}