const isArmstrong = function(n) {
    let str = String(n), sum = 0
    for(const s of str){
        sum += Math.pow(Number(s),str.length)
    }
    return sum == n
}