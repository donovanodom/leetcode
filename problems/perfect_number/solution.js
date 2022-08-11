const checkPerfectNumber = (num) => {
    if(num <= 0) return false
    let sum = 0
    for(i = 1; i < num; i++) {
        if(sum > num) return false
        if(num % i == 0) sum += i
    }
    return sum == num
}