const firstUniqChar = (s) => {
    if(s.length == 1) return 0
    s = s.split('')
    for(i = 0; i < s.length; i++){
        const temp = s[i]
        s[i] = null
        if(!s.includes(temp)) return i
        s[i] = temp
    }
    return -1
}