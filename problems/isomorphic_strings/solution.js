const isIsomorphic = function(s, t) {
    if(s.length != t.length) return false
    let chars1 = {}, chars2 = {}
    for(i = 0; i < s.length; i++){
        if(s[i] == s[i-1] && t[i] == t[i-1]) continue
        if(!chars1[s[i]]){
            chars1[s[i]] = t[i]
        } 
        if(!chars2[t[i]]){
            chars2[t[i]] = s[i]
        } 
        if(chars1[s[i]] != t[i] || chars2[t[i]] != s[i]) return false
    }
    return true
}