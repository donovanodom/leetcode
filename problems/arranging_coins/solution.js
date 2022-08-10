const arrangeCoins = (n) => {
    if(n == 1) return 1
    let x = 1, y = 1, arr = {}
    while(y <= n){
        arr[y] = x
        y = x + y + 1
        x++ 
    }
    for(i = n; i >= 0; i--){
        if(arr[i]) return arr[i]
    }
}