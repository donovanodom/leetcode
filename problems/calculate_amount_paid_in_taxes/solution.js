const calculateTax = function(brackets, income) {
    let tax = 0, i = 0, j = 0, prev = 0
    while(i < income){
        let [u,p] = brackets[j] 
        while(i < u && i < income) i++
        tax += (i - prev) * (p/100)
        if(j < brackets.length - 1) j++
        prev = i
    }
    return tax
}