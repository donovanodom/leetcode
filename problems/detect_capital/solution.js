const detectCapitalUse = function(word) {
    if(word.length == 1) return true
    let cap = word.charCodeAt(0) > 96 || word.charCodeAt(1) > 96 
    for(i = 1; i < word.length; i++){
        if(word.charCodeAt(i) > 96 != cap) return false
    }
    return true
}