const mostCommonWord = function(paragraph, banned) {
    let set = new Set(), counts = {}, max = 0, most 
    for(const word of banned){
        set.add(word.toLowerCase())
    }   
    paragraph = paragraph.replace(/\!|\?|\'|\,|\;|\./g, ' ')
    let i = 0
    while(i < paragraph.length){
        let j = i + 1
        if(paragraph[i] == ' '){
            while(paragraph[i] == ' ' && paragraph[j] == ' '){
                j++
            }
            paragraph = paragraph.slice(0,i) + ' ' + paragraph.slice(j)
        }
        i++
    }
    paragraph = paragraph.trim().split(' ')
    for(let word of paragraph){
        word = word.toLowerCase()
        if(set.has(word)) continue
        if(!counts[word]) counts[word] = 0
        counts[word]++
        max = Math.max(counts[word], max)
        most = max == counts[word] ? word : most
    }
    return most
}