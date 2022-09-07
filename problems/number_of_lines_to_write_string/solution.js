const numberOfLines = function(widths, s) {
    let abc = Array(26).fill().map((x,i) => x = String.fromCharCode(i + 97)), chars = {}
    for(i = 0; i < 26; i++){
        chars[abc[i]] = widths[i] 
    }
    let count = 0, lines = 0
    for(const char of s){
        if(count + chars[char] <= 100){
            count += chars[char]
        }else{
            count = chars[char]
            lines++
        }
    }
    return [lines + 1, count]
}