const areAlmostEqual = function(s1, s2) {
    if(s1 == s2) return true
    let l, r, i = 0, j = s1.length - 1
    while(s1[i] == s2[i] && i < j){
        i++
    }
    while(s1[j] == s2[j] && i < j){
        j--
    }
    if(i == j || s1[i] != s2[j] || s1[j] != s2[i]) return false
    return s1.slice(0,i) + s1.slice(i+1,j) + s1.slice(j + 1) == s2.slice(0,i) + s2.slice(i+1,j) + s2.slice(j + 1)
}