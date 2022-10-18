const isSumEqual = function(firstWord, secondWord, targetWord) {
    return numVal(firstWord) + numVal(secondWord) == numVal(targetWord)
}

const numVal = (s) => {
    let num = ''
    for(i = 0; i < s.length; i++){
        num += s.charCodeAt(i) - 97
    }
    return Number(num)
}