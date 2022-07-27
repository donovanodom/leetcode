const reorderSpaces = function(text) {
    let spaces = 0, words = []
    while(text[0]){
        if(text[0] == ' '){
            spaces++
            text = text.slice(1)
        }else if(text[0] && text[0] != ' '){
            let word = ''
            while(text[0] && text[0] != ' '){
                word += text[0]
                text = text.slice(1)
            }
            words.push(word)
        }
    }
    if(words.length == 1) return words[0] + ' '.repeat(spaces)
    return words.join(' '.repeat(Math.floor(spaces / (words.length - 1)))) + ' '.repeat(spaces % (words.length - 1))  
}