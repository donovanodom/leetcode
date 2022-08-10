const validWordSquare = function(words) {
    let i = 0
    while(i < words.length){
        let j = 0
        while(j < words[i].length){
            if(!words[j] || !words[j][i] || !words[i] || !words[i][j] || words[i][j] != words[j][i]) return false
            j++
        }     
        i++
    }
    return true
}