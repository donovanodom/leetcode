const isDecomposable = function(s) {
    let i = 0, used = false
    while(i < s.length){
        let j = i + 1
        while(s[i] == s[j]){
            j++
        }
        let len = j - i
        if(len % 3 == 0){
            i = j
        }else if((len - 2) % 3 == 0 && !used){
            used = true
            i = j
        }else{
            return false
        }
    }
    return used
}