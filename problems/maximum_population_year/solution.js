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
    let max = Object.entries(obj).sort((x, y) => y[1] - x[1])[0][0]
    return logs[max][0]
}