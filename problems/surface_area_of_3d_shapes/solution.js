const surfaceArea = function(grid) {
    let block = 0, touching = 0
    for(i = 0; i < grid.length; i++){
        for(j = 0; j < grid[i].length; j++){
            let cur = grid[i][j]
            touching = i ? touching + Math.min(cur, grid[i - 1][j]) : touching
            touching = j ? touching + Math.min(cur, grid[i][j - 1]) : touching
            cur > 1 ? touching += cur - 1 : null
            block += cur
        }
    }
    return block * 6 - touching * 2
}