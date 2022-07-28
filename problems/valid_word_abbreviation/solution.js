const validWordAbbreviation = function(word, abbr) {
    let i = 0, j = 0, num = 0
    while(i < abbr.length && j < word.length) {
        if(!abbr[i].match(/[a-z]/i)) {
            num = num * 10 + Number(abbr[i])
            if(num == 0) return false
            i++
        }else if(num > 0) {
            j += num
            num = 0
        }else if(abbr[i] == word[j]) {
            i++
            j++
        }else{
            return false
        } 
    }
    return i == abbr.length && j + num == word.length
}