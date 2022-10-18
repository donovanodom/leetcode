const getLucky = function(s, k) {
    let n = ''
    for(const char of s){
        n += char.charCodeAt(0) - 96
    }
    while(k){
        n = String(n.split('').reduce((a,b) => Number(a) + Number(b)))
        k--
    }
    return n
}