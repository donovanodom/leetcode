const numIslands = (grid) => {
    let row = grid[0].length, col = grid.length, islands = 0
    if(row * col == 1) return grid[0][0]
    
     const sinkIsland = (x,y) => {
        if(x < 0 || y < 0 || x > row - 1 || y > col - 1) return
        if(grid[y][x] != '1') return
        grid[y][x] = '0'
        sinkIsland(x+1,y)
        sinkIsland(x-1,y)
        sinkIsland(x,y+1)
        sinkIsland(x,y-1)
    }
     
    for(x = 0; x < row; x++){
        for(y = 0; y < col; y++){
            if(grid[y][x] == '1'){
                islands++
                sinkIsland(x,y)
            }
        }
    }
    return islands
}

