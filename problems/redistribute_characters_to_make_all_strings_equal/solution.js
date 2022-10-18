const makeEqual = function(words) {
    const len = words.length
    let obj = {}
    words = words.join('')
    for(const char of words){
        if(!obj[char]) obj[char] = 0
        obj[char]++
    }
    let vals = Object.values(obj), min = Math.min(...vals)
    for(const val of vals){
        if(val % len != 0) return false
    }
    return true
}