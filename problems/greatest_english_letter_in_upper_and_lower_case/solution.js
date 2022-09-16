const greatestLetter = function(s) {
    const abc = Array(26).fill().map((x,i) => x = String.fromCharCode(i+65)).reverse()
    let low = '', upp = ''
    for(const char of s){
        if(/^[a-z]+$/.test(char)) low += char
        if(/^[A-Z]+$/.test(char)) upp += char
    }
    for(const char of abc){
        if(low.includes(char.toLowerCase()) && upp.includes(char)) return char
    }
    return ''
}