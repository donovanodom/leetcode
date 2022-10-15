const checkIfPangram = function(sentence) {
    const alp = Array(26).fill().map((_,i) => String.fromCharCode(i + 97))
    for(const char of alp){
        if(!sentence.includes(char)) return false
    }
    return true
}