const lengthOfLongestSubstring = (s) => {
    let q = [], longest = 0
    for(char=0;char<s.length;char++){
        q = q.slice(q.indexOf(s[char])+1)
        q.push(s[char])
        longest = Math.max(longest,q.length)
    }
    return longest
}
