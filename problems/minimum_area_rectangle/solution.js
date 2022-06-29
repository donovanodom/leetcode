const minAreaRect = (points) => {
    if(points.length < 4) return 0
    if(points.every((x) => x[0] == points[0][0]) || points.every((x) => x[1] == points[0][1])) return 0
    const map = {}
    for (const [x,y] of points){
        if(!map[x]) map[x] = {}
        if(!map[x][y]) map[x][y] = true
    }
    let min = Infinity
    for(const [x1,y1] of points){
        for(const [x2,y2] of points){
            if(x1 == x2 || y1 == y2) continue
            if(map[x1][y2] && map[x2][y1]){
                min = Math.min(min, Math.abs(x1-x2) * Math.abs(y1-y2))
            }
        }
    }
    return min == Infinity ? 0 : min
}