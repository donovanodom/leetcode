const minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length
    for(i = 0; i < grid.length; i++){
        for(j = 0; j < grid[i].length; j++){
            if(checkValid(m, n, i - 1, j) && checkValid(m, n, i, j - 1)){
                grid[i][j] = Math.min(grid[i - 1][j] + grid[i][j], grid[i][j - 1] + grid[i][j])
            }else if(checkValid(m, n, i - 1, j)){
                grid[i][j] += grid[i - 1][j]
            }else if(checkValid(m, n, i, j - 1)){
                grid[i][j] += grid[i][j - 1]
            }
        }
    }
    return grid.pop().pop()
}

const checkValid = (m, n, a, b) => {
    if(a >= 0 && a < m && b >= 0 && b < n) return true
    return false
}