const convert = (s, numRows) => {
    if (numRows < 2) return s
    let result = new Array(numRows).fill('')
    let index = 0
    let inverse
    for (i = 0; i < s.length; i++) { 
        result[index] += s[i]
        if(index === numRows - 1) inverse = true 
        if(index === 0) inverse = false
        index = inverse ? index - 1 : index + 1
    }
    return result.join('')
}