const canPermutePalindrome = function(s) {
    const chars = new Map()
    for(const char of s){
        if(!chars.has(char)) chars.set(char,0)
        chars.set(char, chars.get(char) + 1) 
    }
    let odds = 0
    for(const [key,value] of chars){
        if(value % 2 != 0) odds++
        if(odds > 1) return false
    }
    return true
}