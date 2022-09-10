const bitwiseComplement = function(n) {
    let comp = '', bin = n.toString(2)
    for(i = 0; i < bin.length; i++){
        if(bin[i] == '1'){
            comp += '0'
        }else{
            comp += '1'
        }
    }
    return parseInt(comp,2)
}