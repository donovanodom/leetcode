const maxPower = function(s) {
    let max = 0, i = 0
    while(i < s.length){
        let j = i + 1
        while(s[i] == s[j]) j++
        max = Math.max(max, j - i)
        i++
    }
    return max
}