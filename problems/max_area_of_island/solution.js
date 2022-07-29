const maxAreaOfIsland = function(grid) {
    let m = grid[0].length, n = grid.length, max = 0
    if(m * n == 1) return grid[0][0]
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    const destroyIsland = (coordinates) => {
        let island = 0, q = [coordinates]
        while(q.length){
            let [x,y] = q.shift()
            if(!grid[y][x]) continue
            grid[y][x] = 0
            island++
            for(const [dx,dy] of dirs){
                let nx = dx + x, ny = dy + y
                if(nx < 0 || ny < 0 || nx > m - 1 || ny > n - 1) continue
                q.push([nx,ny])
                
            }
        }
        return island
    }
    for(i = 0; i < n; i++){
        for(j = 0; j < m; j++){
            if(grid[i][j]){
                max = Math.max(destroyIsland([j,i]), max)
            }
        }
    }
    return max
}

