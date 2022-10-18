const checkZeroOnes = function(s) {
    let ones = 0, i = 0
    while(i < s.length){
        let j = i, sub = 0
        while(s[i] == '1' && s[j] == '1'){
            sub++
            j++
        }
        ones = Math.max(ones,sub)
        i = j + 1
    }
    let zeros = 0
    i = 0
    while(i < s.length){
        let j = i, sub = 0
        while(s[i] == '0' && s[j] == '0'){
            sub++
            j++
        }
        zeros = Math.max(zeros,sub)
        i = j + 1
    }
    return ones > zeros
}