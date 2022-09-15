const trimMean = function(arr) {
    arr.sort((a,b) => a - b)
    let l = arr.length * .05, r = arr.length - l, sum = 0
    for(i = l; i < r; i++){
        sum += arr[i]
    }
    return sum / (r-l)
}