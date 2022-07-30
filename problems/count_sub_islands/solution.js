const countSubIslands = function(grid1, grid2) {
    let subIslands = 0, destroyed = new Set()
    const destroy = (coordinates) => {
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
        let q = [coordinates], sub = true
        while(q.length){
            const [x,y] = q.shift()
            if(!grid1[y][x]) sub = false
            if(destroyed.has(`${x},${y}`)) continue
            destroyed.add(`${x},${y}`)
            grid2[y][x] = 0       
            for(const [dx,dy] of dirs){
                let nx = dx + x, ny = dy + y
                if(nx < 0 || ny < 0 || nx > grid2[0].length - 1 || ny > grid2.length - 1 || !grid2[ny][nx]) continue
                q.push([nx,ny])
            }
        }
        return sub ? 1 : 0
    }
    for(row = 0; row < grid2.length; row++){
        for(col = 0; col < grid2[0].length; col++){
            if(grid2[row][col] && !destroyed.has(`${col},${row}`)) subIslands += destroy([col,row])
        }
    }
    return subIslands
}

