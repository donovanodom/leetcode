const repeatedSubstringPattern = function(s) {
    for(i = 0; i < Math.floor(s.length / 2); i++){
        let sub = s.slice(0,i+1)
        if(s.length % sub.length != 0){
            continue
        } 
        else if(sub.repeat(s.length / sub.length) == s){
            return true
        }
    }
    return false
}
