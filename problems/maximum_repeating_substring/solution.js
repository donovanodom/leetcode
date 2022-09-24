const maxRepeating = function(sequence, word) {
    let k = 0, str = word
    while(true){
        if(sequence.includes(str)){
            k++
        }else{
            return k
        }
        str += word
    }
}