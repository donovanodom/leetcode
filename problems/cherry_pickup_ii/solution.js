const cherryPickup = function(grid) {
    let memo = new Map(), cols = grid[0].length - 1
    const isValid = (row, col) => {
        if(row < grid.length && row >= 0 && col < grid[row].length && col >= 0) return true
        return false
    }
    const dfs = (row, col1, col2) => {
        let key = `${row}:${col1}:${col2}`, max = 0
        if(memo.has(key)) return memo.get(key)
        if(isValid(row,col1) && isValid(row,col2)){
            let cherries = grid[row][col1]
            cherries += col1 == col2 ? 0 : grid[row][col2] 
            max = cherries + Math.max(
                dfs(row + 1, col1, col2),
                dfs(row + 1, col1, col2 + 1),
                dfs(row + 1, col1, col2 - 1),
                dfs(row + 1, col1 + 1, col2),
                dfs(row + 1, col1 + 1, col2 + 1),
                dfs(row + 1, col1 + 1, col2 - 1),
                dfs(row + 1, col1 - 1, col2),
                dfs(row + 1, col1 - 1, col2 + 1),
                dfs(row + 1, col1 - 1, col2 - 1),
            )
        }
        memo.set(key, max)
        return max
    }
    return dfs(0, 0, cols)
}