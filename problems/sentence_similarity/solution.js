const areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    if(sentence1.length != sentence2.length) return false
    let obj = {}
    for(const [x,y] of similarPairs){
        if(!obj[x]) obj[x] = new Set()
        if(!obj[y]) obj[y] = new Set()
        obj[x].add(y)
        obj[y].add(x)
    }
    
    for(i = 0; i < sentence1.length; i++){
        if(!obj[sentence1[i]]) obj[sentence1[i]] = new Set()
        if(!obj[sentence2[i]]) obj[sentence2[i]] = new Set()
        if(sentence1[i] != sentence2[i] && !obj[sentence1[i]].has(sentence2[i]) && !obj[sentence2[i]].has(sentence1[i])) return false
    }
    return true
}