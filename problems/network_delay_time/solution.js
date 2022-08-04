const networkDelayTime = function(times, n, k) {
    const signals = Array(n).fill(Infinity)
    signals[k-1] = 0
    let iterate = true
    while(iterate){
        iterate = false
        for(const [x,y,time] of times){
            let dx = signals[x - 1], dy = signals[y - 1]
            if(dx == Infinity) continue
            if(dy > dx + time){
                signals[y - 1] = dx + time
                iterate = true
            }
        }
    }
    return Math.max(...signals) == Infinity ? -1 : Math.max(...signals)
}