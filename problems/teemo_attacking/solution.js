const findPoisonedDuration = function(timeSeries, duration) {
    let ans = 0, i = 0
    while(i < timeSeries.length){
        if(timeSeries[i+1] && timeSeries[i] + duration >= timeSeries[i+1]){
            ans += (timeSeries[i+1] - timeSeries[i])
        }else{
            let count = duration
            while(count){
                ans++
                count--
            } 
        }
        i++
    }
    return ans
}