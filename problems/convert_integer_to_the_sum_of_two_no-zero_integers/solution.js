const getNoZeroIntegers = function(n) {
    for(i = 1; i < n; i++){
        if(!String(i).includes('0') && !String(n - i).includes('0'))
            return [i, n - i]
    }
}