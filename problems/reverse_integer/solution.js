const reverse = (x) => {
    let result = []
    const num =  String(x)
    for(i = num.length -1; i >= 0; i--){
        if(num[i] != '-'){
            result.push(num[i])
        }else{
            result.unshift(num[i])
        }
    }
    result = result.join('')
    return Math.abs((result)) < 2147483647 ? result : 0
};  