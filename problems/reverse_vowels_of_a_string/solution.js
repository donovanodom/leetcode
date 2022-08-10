const reverseVowels = function(s) {
    s = s.split('')
    let i = 0, j = s.length - 1
    while(i < j){
        if(s[i].match(/[aeiou]/i)){
            console.log(s[j])
            while(!s[j].match(/[aeiou]/i)){
                j--
            }
            [s[i],s[j]] = [s[j],s[i]]   
            j--
        }
        i++
    }
    return s.join('')
}