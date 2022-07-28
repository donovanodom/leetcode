const convertToTitle = function(columnNumber) {
    const alpha = Array(26).fill(0).map(( _,i) => String.fromCharCode(65 + i))
    let nums = {}, count = 0, factor = columnNumber
    for(i = 1; i < alpha.length + 1; i++){
        nums[i] = alpha[i - 1]
    }
    let answer = ''
    while(factor > 26){
        count++
        factor -= 26
        if(factor < 26 && count > 26){
            answer = nums[factor] + answer
            factor = count
            count = 0
        }
    }
    return nums[count] ? nums[count] + nums[factor] + answer : nums[factor]
}
