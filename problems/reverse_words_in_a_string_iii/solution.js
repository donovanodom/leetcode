const reverseWords = (s) => {
    return s.split(' ').map((x) => x.split('').reverse().join('')).join(' ')
}