const uniquePathsIII = function(grid) {
    let cells = 0, start, ans = 0
    for(i = 0; i < grid.length; i++){
        for(j = 0; j < grid[0].length; j++){
            if(!grid[i][j] || grid[i][j] == 2) cells++
            if(grid[i][j] == 1) start = [j,i]
        }
    }
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]], m = grid.length, n = grid[0].length, [sx,sy] = start
    let q = [[sx,sy,`->(${sx},${sy})`,0]]
    while(q.length){
        let [x,y,path,moves] = q.shift()
        if(grid[y][x] == 2 && moves == cells) ans++
        dirs.forEach(([dx,dy]) => {
            let nx = dx + x, ny = dy + y
            if(isValid([nx,ny],m,n,grid) && path.indexOf(`->(${nx},${ny})`) < 0){
                q.push([nx,ny,path + `->(${nx},${ny})`,moves + 1])
            }
        })
    }
    return ans
}

const isValid = (node,m,n,grid) => {
    let [x,y] = node
    if(x < 0 || y < 0 || x >= n || y >= m || grid[y][x] == -1) return false
    return true
}

