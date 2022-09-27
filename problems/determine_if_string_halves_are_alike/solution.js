const halvesAreAlike = function(s) {
    let l = 0, r = s.length - 1, lbank = 0, rbank = 0
    while(l < r){
        if(/[aeiou]/.test(s[l].toLowerCase())) lbank++
        if(/[aeiou]/.test(s[r].toLowerCase())) rbank++
        l++
        r--
    }
    return lbank == rbank
}