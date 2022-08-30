const nextGreatestLetter = function(letters, target) {
    for(const char of letters){
        if(char.charCodeAt(0) > target.charCodeAt(0)){
            return char
        }
    }
    return letters.shift()
}
