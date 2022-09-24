const countConsistentStrings = function(allowed, words) {
    let count = 0
    for(const word of words){
        let inc = true
        for(const char of word){
            if(!allowed.includes(char)) inc = false
        }
        if(inc) count++
    }
    return count
}