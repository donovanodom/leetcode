const minCostConnectPoints = function(points) {
    let parents = Array(points.length).fill().map((_,i) => i), distances = []
    for(i = 0; i < points.length; i++){
        for(j = i + 1; j < points.length; j++){
            let [x1,y1] = points[i], [x2,y2] = points[j]
            let distance = Math.abs(x1-x2) + Math.abs(y1-y2)
            distances.push([distance, i, j])
        }
    }
    distances.sort((a,b) => a[0] - b[0])
    const find = (node) => {
        if(parents[node] == node){
            return node
        }else{
            parents[node] = find(parents[node])
            return parents[node]
        }
    }
    let total = 0
    for(const [d, x, y] of distances){
        let dx = find(x), dy = find(y)
        if(dx != dy){
            parents[dy] = dx
            total += d
        }  
    }
    return total
}