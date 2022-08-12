const reverseOnlyLetters = (s) => {
    let i = 0, j = s.length - 1
    s = s.split('')
    while(i <= j){
        let x = s[i].charCodeAt(0), y = s[j].charCodeAt(0)
        while((x < 65 || x > 90 && x < 97 || x > 122) && i < j){
            i++
            x = s[i].charCodeAt(0)
        }
        while((y < 65 || y > 90 && y < 97 || y > 122) && j > i){
            j--
            y = s[j].charCodeAt(0)
        }
        if(i > j) break
        [s[i],s[j]] = [s[j],s[i]]
        i++
        j--
    }
    return s.join('')
}