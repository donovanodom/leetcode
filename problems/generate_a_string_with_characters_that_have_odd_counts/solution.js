const generateTheString = function(n) {
    if(n == 1){
        return 'a'
    }else if(n % 2 == 0){
        return 'a'.repeat(n-1) + 'b'.repeat(1)
    }else{
        return 'a'.repeat(n-2) + 'b'.repeat(1) + 'c'.repeat(1)
    }
}