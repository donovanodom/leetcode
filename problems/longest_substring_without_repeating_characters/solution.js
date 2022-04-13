const lengthOfLongestSubstring = (s) => {
    let substr = []
    let longest = 0
    for (i = 0; i < s.length; i++) {
        substr = substr.slice(substr.indexOf(s[i])+1)
        substr.push(s[i])
        longest = Math.max(longest, substr.length)
    }
    return longest
};