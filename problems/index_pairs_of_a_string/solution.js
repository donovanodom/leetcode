const indexPairs = function(text, words) {
    let ans = [], i = 0
    while(i < text.length){
        let j = i
        while(j < text.length){
            let word = text.slice(i,j+1)
            if(words.includes(word)) ans.push([i,j])
            j++
        }
        i++
    }
    return ans
}