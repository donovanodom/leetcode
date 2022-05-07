const isPalindrome = (s) => {
    s = s.split('').filter((char) => char.match(/^[0-9a-zA-Z]+$/)).map((char) => char.toLowerCase())
    let copy = [...s.slice()]
    copy = copy.reverse().join('')
    s = s.join('')
    return s == copy
}