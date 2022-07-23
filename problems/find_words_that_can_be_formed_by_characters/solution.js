const countCharacters = function(words, chars) {
    let answer = 0
    for(const word of words){
        let str = chars, formed = true
        for(const char of word){
            let index = str.indexOf(char)
            if(index < 0){
                formed = false
                break 
            }  
            str = str.slice(0,index) + str.slice(index+1,str.length)
        }
        formed ? answer += word.length : null
    }    
    return answer
}