const stringMatching = function(words) {
    let ans = new Set(), i = 0
    while(i < words.length){
        let j = i + 1
        while(j < words.length){
            if(words[i].includes(words[j])){
                ans.add(words[j])
            }else if(words[j].includes(words[i])){
                ans.add(words[i])
            }
            j++
        }
        i++
    }
    return [...ans]
}