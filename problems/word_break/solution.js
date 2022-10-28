const wordBreak = function(s, wordDict) {
    let dict = new Set(wordDict), seen = new Set(), q = [0]
    while(q.length){
        let cur = q.shift()
        if(!seen.has(cur)){
            for(i = cur; i < s.length; i++){
                let word = s.slice(cur, i + 1)
                if(dict.has(word)){
                    if(i == s.length - 1) return true
                    q.push(i + 1)
                }
            }
        }
        seen.add(cur)
    }
    return false
}