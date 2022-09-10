const fixedPoint = function(arr) {
    for(i = 0; i < arr.length; i++){
        if(arr[i] == i){
            return i
        }else if(arr[i] > i){
            return -1
        }
    }
    return -1
}