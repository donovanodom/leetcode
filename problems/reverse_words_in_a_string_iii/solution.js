const reverseWords = (s) => {
    s = s.split(' ')
    s = s.map((x) => x.split('').reverse().join(''))
    return s.join(' ')
}