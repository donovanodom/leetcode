const reversePrefix = function(word, ch) {
    let i = 0, pre = ''
    while(i < word.length){
        pre = word[i] + pre
        if(word[i] == ch) return pre + word.slice(i + 1)
        i++
    }
    return word
}