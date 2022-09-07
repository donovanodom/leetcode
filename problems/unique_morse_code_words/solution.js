const uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const alphabet = Array(26).fill().map((x,i) => x = String.fromCharCode(i + 97))
    const chars = {}
    for(i = 0; i < alphabet.length; i++){
        chars[alphabet[i]] = morse[i]
    }
    const set = new Set()
    for(const word of words){
        let str = ''
        for(const char of word){
            str += chars[char]
        }
        set.add(str)
    }
    return set.size
}