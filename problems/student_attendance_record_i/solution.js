const checkRecord = function(s) {
    let streak = 0, absent = 0
    for(const char of s){
        if(char == 'L'){
            streak++
        }else{
            streak = 0
        }
        if(char == 'A') absent++
        if(streak > 2 || absent > 1) return false
    }
    return true
}