const isAlienSorted = function(words, order) {
    if(words.length == 1) return true
    const abc = Array(26).fill().map((x,i) => x = String.fromCharCode(i + 97)), dict = {}
    for(i = 0; i < order.length; i++){
        dict[order[i]] = abc[i]
    }
    let translation = []
    for(i = 0; i < words.length; i++){
        let str = ''
        for(j = 0; j < words[i].length; j++){
            str += dict[words[i][j]]
        }
        translation.push(str)
    }
    for(i = 1; i < translation.length; i++){
        if(translation[i].localeCompare(translation[i-1]) < 0) return false
    }
    return true
}