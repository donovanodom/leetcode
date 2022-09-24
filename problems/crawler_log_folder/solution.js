const minOperations = function(logs) {
    let cnt = 0
    for(const log of logs){
        if(log == "../"){
            cnt = cnt ? cnt - 1 : cnt
        }else if(log == "./"){
            continue
        }else{
            cnt++
        }
    }
    return cnt
}