const slowestKey = function(r, k) {
    let obj = {}, max = r[0]
    obj[k[0]] = r[0]
    for(i = 1; i < r.length; i++){
        if(!obj[k[i]]) obj[k[i]] = 0
        obj[k[i]] = Math.max(r[i] - r[i - 1], obj[k[i]])
        max = Math.max(max, obj[k[i]])
    }
    let ans = Object.keys(obj).filter((x) => obj[x] == max).sort()
    return ans.pop()
}