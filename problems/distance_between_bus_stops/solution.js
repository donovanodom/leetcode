const distanceBetweenBusStops = function(d, s, e) {
    if(s == e) return 0
    const t = s
    s = s < e ? s : e
    e = s == e ? t : e
    let l = s, r = e, cw = 0, ccw = 0
    while(l < r){
        cw += d[l]
        l++
    }
    while(s > 0){
        ccw += d[s - 1]
        s--
    }
    while(e < d.length){
        ccw += d[e]
        e++
    }
    return Math.min(cw,ccw)
}