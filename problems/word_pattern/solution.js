const wordPattern = (pattern, s) => {
    const chars = {}
    s = s.split(' ')
    if(s.length != pattern.length) return false
    for(i = 0; i < pattern.length; i++){
        let key = pattern[i].charCodeAt(0)
        if(!chars[s[i]] && !chars[key]){
            chars[s[i]] = key
            chars[key] = s[i]
        }
        if(chars[s[i]] != key || chars[key] != s[i]) return false
    }
    return true
}