const shortestDistance = (wordsDict, word1, word2) => {
    return Math.min(shortest(wordsDict,word1,word2), shortest(wordsDict,word2,word1))
}

const shortest = (arr, str1, str2) => {
    let i = 0, min = Infinity
    while(i < arr.length){
        let j = i + 1
        if(arr[i] == str1){
            while(j < arr.length){
                if(arr[j] == str2){
                    min = Math.min(min, j - i)
                    break
                } 
                j++
            }
        }
        i++
    }
    return min
}