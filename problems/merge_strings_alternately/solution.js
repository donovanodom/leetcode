const mergeAlternately = function(word1, word2) {
    let ans = ''
    while(word1.length && word2.length){
        ans += word1[0]
        word1 = word1.slice(1)
        ans += word2[0]
        word2 = word2.slice(1)
    }
    return ans + word1 + word2
}