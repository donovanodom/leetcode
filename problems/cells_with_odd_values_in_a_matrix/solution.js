const oddCells = function(m, n, indices) {
    const arr = Array(m * n).fill(0)
    for(const [r, c] of indices){
        for(i = r * n; i < r * n + n; i++){
            arr[i]++
        }
        for(i = c; i < arr.length; i += n){
            arr[i]++
        }
    }
    let sum = 0
    for(const num of arr){
        if(num % 2 != 0) sum++
    }
    return sum
}