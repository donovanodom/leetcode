const maximum69Number  = function(num) {
    num = String(num)
    for(i = 0; i < num.length; i++){
        if(num[i] == '6') return Number(num.slice(0,i) + '9' + num.slice(i + 1))
    }
    return Number(num)
}