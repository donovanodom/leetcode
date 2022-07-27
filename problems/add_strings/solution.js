const addStrings = function(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, carry = 0, result = ''
    while(i >= 0 || j >= 0 || carry){
        let x = num1[i] || 0, y = num2[j] || 0
        let sum = `${+x + + y + carry}`
        carry = sum >= 10 ? 1 : 0
        result = sum[sum.length-1] + result
        i--
        j--
    }
    return result
} 