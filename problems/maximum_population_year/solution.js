const maximumPopulation = function(logs) {
    logs.sort((a,b) => a[0] - b[0])
    const obj = {}
    for(i = 0; i < logs.length; i++){
        let [x,y] = logs[i]
        obj[i] = 1
        for(const [b,d] of logs){
            if(x < d && x >= b) obj[i]++
        }
    }
    const pops = Object.values(obj)
    return logs[pops.indexOf(Math.max(...pops))][0]
}