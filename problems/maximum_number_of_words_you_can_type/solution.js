const canBeTypedWords = function(text, brokenLetters) {
    let i = 0, count = 0
    while(i < text.length){
        let char = brokenLetters.indexOf(text[i])
        if(text[i] == ' ' || i == text.length - 1 && char < 0){
            count++
        }else if(char >= 0){
            while(text[i] != ' ' && i < text.length){
                i++
            }
        }
        i++
    }
    return count
}