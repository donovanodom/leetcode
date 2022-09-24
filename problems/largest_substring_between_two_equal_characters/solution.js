const maxLengthBetweenEqualCharacters = function(s) {
    let max = -1, i = 0
    while(i < s.length){
        let j = i + 1
        while(j < s.length){
            if(s[i] == s[j]) max = Math.max(max, j - i - 1)
            j++
        }
        i++
    }
    return max
}