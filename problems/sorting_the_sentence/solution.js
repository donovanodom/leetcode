const sortSentence = function(s) {
    let ans = {}, i = 0
    while(i < s.length){
        let j = i + 1
        while(s[j] != ' ' && j < s.length) j++
        ans[s[j-1]] = s.slice(i,j-1)
        i = j + 1
    }
    return Object.values(ans).join(' ') 
}