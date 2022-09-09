const addToArrayForm = function(num, k) {
    k = String(k) .padStart(num.length, '0').split('')
    let max = Math.max(num.length, k.length), car = 0, res = Array(max).fill(0)
    while(num.length < max){
        num = [0,...num]
    }
    for(i = max - 1; i >= 0; i--){
        let a = Number(k[i]), sum = a + num[i] + car
        if(sum > 9){
            car = 1
            res[i] = sum % 10
        }else{
            car = 0
            res[i] = sum
        }
    } 
    return car ? [1,...res] : res
}