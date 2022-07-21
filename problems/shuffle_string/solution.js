const restoreString = function(s, indices) {
    let answer = s.slice().split(''), l = 0, r = s.length - 1
    while(l<=r){
        answer[indices[l]] = s[l] 
        answer[indices[r]] = s[r] 
        l++
        r--
    }
    return answer.join('')
}