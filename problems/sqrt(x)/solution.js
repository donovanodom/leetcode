const mySqrt = (x) => {
    let result, num = 0
    while((num * num) <= x){
        result = num
        num++
    }
    return result 
}