const isOneBitCharacter = function(bits) {
    let len = bits.length, i = 0
    while(i + 1 < len){
        if(bits[i] == 1){
            bits.splice(i,2)
            len--
        }else{
            bits.splice(i,1)
        }
        len--
    }
    return len
}