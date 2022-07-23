const floodFill = function(image, sr, sc, color) {
    let q = [[sc,sr]], visited = new Set(), current = image[sr][sc]
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    while(q.length){
        let [x,y] = q.shift()
        image[y][x] = color
        visited.add(`${x}:${y}`)
        for(const [dirx,diry] of dirs){
            let nextx = dirx + x, nexty = diry + y 
            if(nextx < 0 || nexty < 0) continue         
            if(nextx > image[0].length - 1 || nexty > image.length - 1) continue
            if(image[nexty][nextx] != current) continue
            if(!visited.has(`${nextx}:${nexty}`)){
                q.push([nextx,nexty])
            }
        }
    }
    return image
}