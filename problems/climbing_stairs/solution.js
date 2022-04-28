const climbStairs = (n) => {
    let arr = [0, 1]
    for(i = 1; i < n + 1; i++){
        arr.push(arr[i] + arr[i-1])
    }
    return arr[arr.length - 1]
}