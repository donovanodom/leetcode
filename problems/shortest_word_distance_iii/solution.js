const shortestWordDistance = function(wordsDict, word1, word2) {
    let obj = {}
    for(let i = 0; i < wordsDict.length; i++){
        let word = wordsDict[i]
        if(!obj[word]) obj[word] = []
        obj[word].push(i)
    }
    let arr1 = obj[word1], arr2 = obj[word2], min = Infinity, i = 0
    while(i < arr1.length){
        let j = 0
        while(j < arr2.length){
            if(arr1[i] != arr2[j]){
                min = Math.min(min, Math.abs(arr1[i] - arr2[j]))
            }
            j++
        }
        i++
    }
    return min
}

