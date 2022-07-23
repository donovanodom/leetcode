const findTheDifference = function(s, t) {
    const chars = new Map()
    for(const char of s){
        if(!chars.has(char)) chars.set(char, 0)
        chars.set(char, chars.get(char) + 1)
    }
    for(const char of t){
        if(!chars.get(char)) return char
        chars.set(char, chars.get(char) - 1)
    }
}