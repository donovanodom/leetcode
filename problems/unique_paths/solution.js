const uniquePaths = function(m, n) {
    return factorial(m + n - 2)/(factorial(m - 1)*factorial(n - 1))
}

const factorial = (num) => {
    let factorial = 1
    for(i = 1; i <= num; i++){
        factorial *= i
    }
    return factorial
}