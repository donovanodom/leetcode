const maxIncreaseKeepingSkyline = function(grid) {
    let sum = 0
    for(i = 0; i < grid.length; i++){
        const rowMax = Math.max(...grid[i])
        for(j = 0; j < grid[i].length; j++){
        const colMax = Math.max(...grid.map((row) => row[j]))
        sum += (Math.min(colMax,rowMax) - grid[i][j])    
        }     
    }
    return sum
}