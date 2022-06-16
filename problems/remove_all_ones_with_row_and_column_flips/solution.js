const removeOnes = (grid) => {
    // edge case for 1 x 1 matrix
    if(grid[0].length * grid.length == 1) return true
    
    // rotate all rows to make the first column valid
    grid.forEach((col) => {
        if(col[0] == 1){
            for(k = 0; k < col.length; k++){
                col[k] == 1 ? col[k] = 0 : col[k] = 1
            }
        }
        
    })

    // all columns should now have no unique values
    // if they do, return false
    let j = 0, i = 0
    while(i < grid.length && j < grid[0].length){
        let temp = grid[0][j]
        if(grid[i][j] != temp) return false
        i++
        if(i == grid.length){
            i = 0
            j++
        }
    }
    
    // if you make it this far, return true
    return true
}