const reverseString = (s) => {
    let end = s.length -1
    for(i = 0; i < Math.floor(s.length/2); i++){
        const temp = s[i]
        s[i] = s[end]
        s[end] = temp
        end--
    }
}