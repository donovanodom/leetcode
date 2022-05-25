const isAnagram = (s, t) => {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    if(s.includes(t) && t.includes(s)) return true
    return false
}