const slowestKey = function(r, k) {
    let obj = {}, max = r[0], ans = k[0]
    for(i = 1; i < r.length; i++){
        let dur = r[i] - r[i - 1]
        const prev = max
        max = Math.max(dur, max)
        if(dur == prev){
            ans = ans.charCodeAt(0) > k.charCodeAt(i) ? ans : k[i]
        }else if(max == dur){
            ans = k[i]
        }
    }
    return ans
}