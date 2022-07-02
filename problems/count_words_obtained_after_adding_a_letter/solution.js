const sortStr = (str) => {
    return str.split('').sort((a,b) =>  a.localeCompare(b)).join('')
}

const wordCount = function(startWords, targetWords) {
    let set = new Set(startWords), count = 0
    for(const word of startWords){
        set.add(sortStr(word))
    }
    for(let word of targetWords){
        word = sortStr(word)
        for(i = 0; i < word.length; i++){
            const temp = word.slice(0, i) + word.slice(i + 1)
            if(set.has(temp)){
                count++ 
                break
            }
        }
    }
    return count
}