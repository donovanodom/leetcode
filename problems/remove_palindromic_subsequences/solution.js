const removePalindromeSub = function(s) {
    const r = s.split('').reverse().join('')
    return s == r ? 1 : 2
}