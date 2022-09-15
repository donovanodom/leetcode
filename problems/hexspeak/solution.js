const toHexspeak = function(num) {
    let hex = Number(num).toString(16)
    for(i = 0; i < hex.length; i++){
        if(hex[i] == '1') hex = hex.slice(0,i) + 'I' + hex.slice(i + 1)
        if(hex[i] == '0') hex = hex.slice(0,i) + 'O' + hex.slice(i + 1)
        hex[i] = hex = hex.slice(0,i) + hex[i].toUpperCase() + hex.slice(i + 1) 
        if(/\d/.test(hex[i])) return "ERROR"
    }
    return hex
}