const subtractProductAndSum = (n) => {
    n = Array.from(String(n), Number)
    let product = 1, sum = 0
    for(i = 0; i < n.length; i++){
        product = product * n[i]
        sum += n[i]
    }
    return product - sum
}