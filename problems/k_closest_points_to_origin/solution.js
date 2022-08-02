const kClosest = function(points, k) {
    let distances = []
    for(i = 0; i < points.length; i++){
        let [x,y] = points[i]
        let distance = Math.sqrt((0-x)**2 + (0-y)**2)
        distances.push([distance,i])
    }
    distances.sort((a,b) => a[0] - b[0])
    let answer = []
    for(i = 0; i < k; i++){
        answer.push(points[distances[i][1]])
    }
    return answer
}