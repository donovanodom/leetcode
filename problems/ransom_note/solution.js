const canConstruct = (ransomNote, magazine) => {
    let answer = false
    const magazineLength = magazine.length
    for(const char in ransomNote){
        if(magazine.includes(ransomNote[char])){
            magazine = magazine.replace(ransomNote[char], '')
        }
        if(magazineLength - ransomNote.length == magazine.length) answer = true
    }
    return answer
}