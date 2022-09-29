const minOperations = function(s) {
    let d1 = 0, d2 = 0
    for(i = 0; i < s.length; i++){
        if(s[i] == '0' && i % 2 == 0) d2++
        else if(s[i] == '0' && i % 2 != 0) d1++
        else if(s[i] == '1' && i % 2 == 0) d1++
        else if(s[i] == '1' && i % 2 != 0) d2++
    }
    return d1 > d2 ? d2 : d1
}