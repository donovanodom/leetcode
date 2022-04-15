const lengthOfLastWord = (s) => {
    let words = s.split(' ')
    for(i = words.length - 1; i >= 0; i--){
        if(words[i].trim()){
            return words[i].length
        }
    }
};