const prefixCount = function(words, pref) {
    let answer = 0
    for(const word of words){
        if (word.indexOf(pref) == 0) answer++
    }
    return answer
}