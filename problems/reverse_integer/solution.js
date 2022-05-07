const reverse = (x) => {
    const isEven = x < 0 ? false : true
    x = Math.abs(x)
    x = Array.from(String(x)).reverse()
    x = x.map((x) => parseInt(x)).join('')
    if(-2147483648 <= x && x <= 2147483647){
        return isEven ? x : 0 - x
    }else{
        return 0
    }
}