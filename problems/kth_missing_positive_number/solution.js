const findKthPositive = function(arr, k) {
    let i = 0, count = 1
    while(k){
        if(arr[i] != count){
            k -= 1
            count++
        }else{
            count++
            i++
        } 
        if(k == 0) return count - 1  
    }
}