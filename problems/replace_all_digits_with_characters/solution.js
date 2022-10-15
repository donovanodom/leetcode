const replaceDigits = function(s) {
    for(i = 1; i < s.length; i += 2){
        s = s.slice(0,i) + String.fromCharCode(s.charCodeAt(i - 1) + Number(s[i])) + s.slice(i + 1)
    }
    return s
}