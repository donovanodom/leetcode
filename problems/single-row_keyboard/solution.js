const calculateTime = function(keyboard, word) {
    let chars = {}
    for(i = 0; i < keyboard.length; i++){
        chars[keyboard[i]] = i
    }
    let time = chars[word[0]]
    for(i = 1; i < word.length; i++){
        time += Math.abs(chars[word[i]] - chars[word[i - 1]])
    }
    return time
}