const defangIPaddr = function(address) {
    let res = ''
    for(const char of address){
        if(char == '.'){
            res += `[.]`
        }else{
            res += char
        }
    }
    return res
}