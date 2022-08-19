const toGoatLatin = function(sentence) {
    let a = 1, i = 0, vowels = ['a','e','i','o','u']
    while(i < sentence.length){
        if(vowels.includes(sentence[i].toLowerCase())){
            while(sentence[i] && sentence[i] != ' '){
                i++
            }
            sentence = sentence.slice(0,i) + 'ma' + 'a'.repeat(a) + ' ' + sentence.slice(i+1)
            i += 2 + a
        }else{
            const temp = sentence[i]
            sentence = sentence.slice(0,i) + sentence.slice(i+1)
            while(sentence[i] && sentence[i] != ' '){
                i++
            }
            sentence = sentence.slice(0,i) + temp + 'ma' + 'a'.repeat(a) + ' ' + sentence.slice(i+1)
            i += 3 + a
        }
        a++
        i++
    }
    return sentence.trim()
}