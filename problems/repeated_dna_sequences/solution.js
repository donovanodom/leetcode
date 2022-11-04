const findRepeatedDnaSequences = function(s) {
    let i = s.length - 1, obj = {}, ans = new Set()
    while(i - 9 >= 0){
        let seq = s.slice(i - 9, i + 1)
        if(!obj[seq]) obj[seq] = 0
        obj[seq]++
        i--
    }
    return Object.keys(obj).filter((key) => obj[key] > 1)
}