const plusOne = (digits) => {
    digits = BigInt(digits.join(''))
    digits++
    digits = Array.from(String(digits))
    digits = digits.map((digit) => parseInt(digit))
    return digits
}