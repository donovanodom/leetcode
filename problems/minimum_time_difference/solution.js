const findMinDifference = (timePoints) => {
    const uniq = [... new Set(timePoints)]
    if(uniq.length != timePoints.length) return 0
    timePoints = timePoints.map((point) => convertToMins(point))
    let i = 0, minimum = Infinity
    while(i < timePoints.length - 1){
        for(j = i + 1; j < timePoints.length; j++){
            if(timePoints[i] > timePoints[j]){
                minimum = Math.min(minimum, Math.min(timePoints[i] - timePoints[j], Math.abs(timePoints[i] - 1440) + timePoints[j]))
            }
            if(timePoints[j] > timePoints[i]){
                minimum = Math.min(minimum, Math.min(timePoints[j] - timePoints[i], Math.abs(timePoints[j] - 1440) + timePoints[i]))
            }
        }
        i++
    }
    return minimum
}

const convertToMins = (time) => {
    let hours = time[0] + time[1]
    return hours * 60 + parseInt(time[3] + time[4])
}