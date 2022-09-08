const uncommonFromSentences = function(s1, s2) {
    let seen = new Set(), uncommon = new Set(), i = 0
    while(i < s1.length){
        let j = i + 1
        while(s1[j] && s1[j] != ' '){
            j++
        }
        let char = s1.slice(i,j)
        if(seen.has(char)){
            uncommon.delete(char)
        }else{
            seen.add(char)
            uncommon.add(char)
        }
        i = j + 1
    }
    i = 0
    while(i < s2.length){
        let j = i + 1
        while(s2[j] && s2[j] != ' '){
            j++
        }
        let char = s2.slice(i,j)
        if(seen.has(char)){
            uncommon.delete(char)
        }else{
            seen.add(char)
            uncommon.add(char)
        }
        i = j + 1
    }
    return [...uncommon]
}