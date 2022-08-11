const findWords = function(words) {
    const rows = ["qwertyuiop","asdfghjkl","zxcvbnm"], ans = []
    for(const row of rows){
            for(const word of words){
                let valid = true
                for(const char of word){
                    if(row.indexOf(char.toLowerCase()) < 0){
                        valid = false
                        break
                    }
                }
                if(valid) ans.push(word)
            }
    }
    return ans
}