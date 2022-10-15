const truncateSentence = function(s, k) {
    let i = 0
    while(k){
        while(s[i] != ' ' && i < s.length) i++
        i++
        k--
    }
    return s.slice(0,i - 1)
}