const sumOfDigits = function(nums) {
    let min = String(Math.min(...nums)), sum = 0
    for(const str of min){
        sum += Number(str)
    }
    if(sum % 2 == 0) return 1
    return 0
}