const reverse = (x) => {
    let res = []
    x = String(x)
    for(char=x.length-1;char>=0;char--){
        if(x[char] != '-'){
            res.push(x[char])
        }else{
            res.unshift(x[char])
        }
    }
    res = res.join('')
    return Math.abs(res) < 2147483648 ? res : 0
};  