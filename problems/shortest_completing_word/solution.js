const shortestCompletingWord = function(licensePlate, words) {
    words.sort((a,b) => a.length - b.length)
    let str = {}, count = 0
    for(const char of licensePlate){
        if(Number(char) || char == ' ' || char == 0) continue
        if(!str[char.toLowerCase()]) str[char.toLowerCase()] = 0
        str[char.toLowerCase()]++
        count++
    }
    for(let word of words){
        let copy = {...str}, x = count, i = 0
        while(i < word.length){
            if(copy[word[i]]){
                copy[word[i]]--
                x--   
            }
            i++
        }
        if(!x) return word
    }

};