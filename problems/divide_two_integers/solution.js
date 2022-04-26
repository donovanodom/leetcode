const divide = (dividend, divisor) => {
    let result = divisor !== 0 ? dividend / divisor : 0
    
    if (result > 2147483647) return 2147483647 
    if (result < -2147483647) return -2147483648
    
    return result > 0 ? Math.floor(result) : Math.ceil(result)
}


