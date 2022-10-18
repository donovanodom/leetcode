const largestOddNumber = function(num) {
    for(i = num.length - 1; i >= 0; i--){
        if(num[i] % 2 != 0) return num.slice(0,i + 1)
    }
    return ''
}