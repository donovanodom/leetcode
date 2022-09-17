const minTimeToVisitAllPoints = function(points) {
    let ans = 0
    for(i = 1; i < points.length; i++){
        let x1 = points[i - 1][0], y1 = points[i - 1][1]
        let x2 = points[i][0], y2 = points[i][1]
        ans += Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2))
    }
    return ans
}