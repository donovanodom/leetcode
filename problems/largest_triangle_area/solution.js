const largestTriangleArea = function(points) {
    let max = 0
    for(i = 0; i < points.length; i++){
        for(j = i + 1; j < points.length; j++){
            for(k = j + 1; k < points.length; k++){
                max = 
                    Math.max(Math.abs((points[i][0]*(points[j][1] - points[k][1]) + 
                    points[j][0]*(points[k][1] - points[i][1])) +
                    points[k][0]*(points[i][1] - points[j][1])) / 2, max)
            }
        }
    }
    return max
}

