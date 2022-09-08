const largeGroupPositions = function(s) {
    let obj = {}, i = 0
    while(i < s.length){
        let j = i
        while(s[i] == s[j]){
            j++
        }
        if(j - i > 2){
            obj[i] = j - 1
        }
        i = j
    }
    return Object.entries(obj)
}