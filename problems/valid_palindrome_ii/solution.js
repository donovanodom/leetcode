const validPalindrome = function(s) {
    let i = 0, j = s.length - 1, dif = 0
    while(i < j && dif <= 1){
        if(s[i] == s[j]){
            i++
            j--
        }else{
            let left = s.split(''), right = s.split('') 
            left.splice(i,1)
            right.splice(j,1)
            return left.join('') == left.reverse().join('') || right.join('') == right.reverse().join('')
        }
    }
    return true
}