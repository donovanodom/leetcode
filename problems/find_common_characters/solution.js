const commonChars = function(words) {
    if(words.length == 1) return words[0].split('')
    let top = Array(26).fill(0)
    for(i = 0; i < words[0].length; i++){
        top[words[0].charCodeAt(i) - 97]++
    }
    for(i = 0; i < words.length; i++){
        let bottom = Array(26).fill(0)
        for(j = 0; j < words[i].length; j++){
            bottom[words[i].charCodeAt(j) - 97]++
        }
        for(k = 0; k < 26; k++){
            top[k] = Math.min(top[k],bottom[k])
        }
    }
    let res = []
    for(i = 0; i < top.length; i++){
        while(top[i]){
            res.push(String.fromCharCode(i+97))
            top[i]--
        }
    }
    return res
}