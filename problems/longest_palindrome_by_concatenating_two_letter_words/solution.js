const longestPalindrome = function(words) {
    let obj = {}, max = 0, seen = new Set(), set = new Set(words), doubles = false
    for(const word of words){
        if(!obj[word]) obj[word] = 0
        obj[word]++
    }
    for(const word of set){
        if(!seen.has(word)){
            seen.add(word)
            let adj = word[1] + word[0]
            if(word == adj){
                if(obj[word] % 2 == 0){
                    max += obj[word]
                }else{
                    doubles = true
                    max += obj[word] - 1
                }
            }else if(set.has(adj)){
                seen.add(adj)
                max += 2 * Math.min(obj[adj],obj[word])
            }  
        }
          
    }
    max *= 2
    if(2 * words.length > max && doubles) max += 2
    return max
}