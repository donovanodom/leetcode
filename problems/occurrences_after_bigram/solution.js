const findOcurrences = function(text, first, second) {
    text = text.split(' ')
    let ans = []
    for(i = 2; i < text.length; i++){
        if(text[i - 2] == first && text[i - 1] == second) ans.push(text[i])
    }
    return ans
}