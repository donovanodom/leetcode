const isPrefixString = function(s, words) {
    let i = 0
    for(const word of words){
        if(s.slice(i,i + word.length) != word) return false
        i = i + word.length
        if(i == s.length) return true
    }
    return false
}