const countLetters = function(s) {
    let count = 0, i = 0
    while(i < s.length){
        let j = i, char = s[i]
        while(j < s.length && s[i] == s[j]){
            count++
            j++
        }
        i++
    }
    return count
}