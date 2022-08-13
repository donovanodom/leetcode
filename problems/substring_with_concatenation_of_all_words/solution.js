const findSubstring = function(s, words) {
    const map = {}
    for(const word of words){
        if(!map[word]) map[word] = 0
        map[word]++
    }
    let total = words.length, i = 0, j = 0, ans = []
    let copy = {...map}
    while(i < s.length){
        let sub = s.slice(i, i + words[0].length)
        if(!copy[sub] && total == words.length){
            i++
            j++
            continue
        }
        if(copy[sub] && copy[sub] > 0){
            copy[sub]--
            total--
            i += words[0].length
        }else if(total){
            copy = {...map}
            j++
            i = j
            total = words.length
        }  
        if(!total){
            copy = {...map}
            ans.push(j)
            j++
            i = j
            total = words.length
        }
    }
    return ans
}