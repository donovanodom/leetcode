const reverseWords = function(s) {
    let i = 0, spaces = [], str = ''
    for(idx = 0; idx < s.length; idx++){
        if(s[idx] == ' ') spaces.unshift(s.length - idx - 1)
    }
    while(i < s.length){
        let sub = ''
        while(s[i] != ' ' && i < s.length){
            sub += s[i]
            i++
        } 
        str = sub + str
        i++
    }
    let char = 0
    while(char < s.length){
        if(char == spaces[0]){
            s[char] = ' '
            spaces.shift()
        }else{
            s[char] = str[0]
            str = str.slice(1)
        }
        char++
    }
}