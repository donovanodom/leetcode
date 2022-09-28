const countBalls = function(lowLimit, highLimit) {
    let obj = {}
    for(i = lowLimit; i <= highLimit; i++){
        let str = String(i), box = 0
        for(const s of str){
            box += Number(s)
        }
        if(!obj[box]) obj[box] = 0
        obj[box]++
    }
    return Math.max(...Object.values(obj))
}