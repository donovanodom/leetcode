const finalValueAfterOperations = function(operations) {
    let ans = 0
    for(const str of operations){
        if(str[0] == '-' || str[2] == '-') ans--
        else ans++
    }
    return ans
}