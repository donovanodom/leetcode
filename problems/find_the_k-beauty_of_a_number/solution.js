const divisorSubstrings = function(num, k) {
    let kb = 0
    num = String(num)
    for(i = 0; i < num.length - k + 1; i++){
        let sub = Number(num.slice(i,i + k))
        if(sub == 0) continue
        if(Number(num) % sub == 0) kb++
    }
    return kb
}