const plusOne = (digits) => {
    let num = digits.join('')
    num = BigInt(num)
    num++
    num = Array.from(num.toString()).map(Number)
    return num
}
