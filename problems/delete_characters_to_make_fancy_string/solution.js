const makeFancyString = function(s) {
    let ans = '', i = 0
    while(i < s.length){
        let j = i + 1
        while(s[i] == s[j]) j++
        if(j - i > 2) ans += s[i].repeat(2)
        else ans += s.slice(i,j)
        i = j
    }
    return ans
}