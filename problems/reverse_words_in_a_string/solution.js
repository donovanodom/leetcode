const reverseWords = function(s) {
    let words = [], i = s.length - 1
    while(i >= 0){
        while(s[i] == ' ') i--
        let j = i - 1
        while(s[j] != ' ' && j >= 0) j--
        let word = s.slice(j + 1, i + 1)
        if(word) words.push(word)
        i = j
    }
    return words.join(' ')
}