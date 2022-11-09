const WordDistance = function(wordsDict) {
    let obj = {}
    for(i = 0; i < wordsDict.length; i++){
        let word = wordsDict[i]
        if(!obj[word]) obj[word] = []
        obj[word].push(i)
    }
    this.dict = obj
    this.memo = {}
}

WordDistance.prototype.shortest = function(word1, word2) {
    if(this.memo[word1 + ':' + word2]) return this.memo[word1 + ':' + word2]
    if(this.memo[word2 + ':' + word1]) return this.memo[word2 + ':' + word1]
    let arr1 = this.dict[word1], arr2 = this.dict[word2], min = Infinity, i = 0
    while(i < arr1.length){
        let j = 0
        while(j < arr2.length){
            min = Math.min(min, Math.abs(arr1[i] - arr2[j]))
            j++
        }
        i++
    }
    this.memo[word1 + ':' + word2] = min
    this.memo[word2 + ':' + word1] = min
    return min
}
