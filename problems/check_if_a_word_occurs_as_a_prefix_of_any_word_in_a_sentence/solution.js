const isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.split(' ')
    let i = 0
    while(i < sentence.length){
        let word = sentence[i]
        if(word.indexOf(searchWord) == 0) return i + 1
        i++
    }
    return -1
}