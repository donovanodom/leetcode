const search = function (reader, target) {
    let l = 0, r = 10000, m = Math.floor(r / 2)
    while(l <= r){
        if(reader.get(m) == target) return m
        if(reader.get(m) > target){
            r = m - 1
            m = Math.floor((r + l) / 2)
        }else{
            l = m + 1
            m = Math.floor((r + l) / 2)
        }
    }
    return - 1
}