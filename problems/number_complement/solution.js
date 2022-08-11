const findComplement = function(num) {
    num = num.toString(2)
    const len = num.length
    for(i = 0; i < len; i++){
        num = num[i] == '0' ? num.slice(0,i) + '1' +  num.slice(i + 1) : num.slice(0,i) + '0' +  num.slice(i + 1)
    }
    return parseInt(num.padStart(len,'0'),2)
}