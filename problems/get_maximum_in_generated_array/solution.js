const getMaximumGenerated = function(n) {
    let arr = Array(n+1).fill(0)
    arr[0] = 0
    n > 0 ? arr[1] = 1 : null
    for(i = 0; i < arr.length; i++){
        if(2 <= 2 * i && 2 * i <= n){
            arr[2 * i] = arr[i]
        }
        if(2 <= 2 * i + 1 && 2 * i + 1 <= n){
            arr[2 * i + 1] = arr[i] + arr[i + 1]
        }
    }
    return Math.max(...arr)
}