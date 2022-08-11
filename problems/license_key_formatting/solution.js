const licenseKeyFormatting = function(s, k) {
    
    let chars = '', groups = []
    for(const char of s){
       if(char != '-') chars += char.toUpperCase()
    }
    while(chars.length - k >= 0){
        groups.unshift(chars.slice(chars.length - k))
        chars = chars.slice(0, chars.length - k)
    }
    if(!groups.length) return chars
    return chars ? chars + '-' + groups.join('-') : groups.join('-')
}