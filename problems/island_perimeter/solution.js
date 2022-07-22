const islandPerimeter = function(grid) {
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    let per = 0, start 
    for(i = 0; i < grid.length;i++){
        if(start) break
        for(j = 0; j < grid[0].length;j++){
            if(grid[i][j]){
                start = [j,i]
                break
            } 
        } 
    }
    let q2 = [start], nq2 = [], visited = new Set()
    while(q2.length){
        let [x,y] = q2.shift()
        visited.add(`${x}:${y}`)
        for(const [dirX,dirY] of dirs){
            let nextX = dirX + x, nextY = dirY + y
            if(nextX < 0 || nextY < 0) continue
            if(nextX >= grid[0].length || nextY >= grid.length) continue
            if(!grid[nextY][nextX]) continue
            if(!visited.has(`${nextX}:${nextY}`)){
                visited.add(`${nextX}:${nextY}`)
                nq2.push([nextX,nextY])
                q2.push([nextX,nextY])
            }else{
                per--
            }
        }  
        per += (4 - nq2.length)
        nq2 = []
    }
    return per
}