const longestIncreasingPath = (matrix) => {
    let row = matrix[0].length, col = matrix.length
    if(row * col == 1) return 1    
    const checkValid = (x,y) => {
        if(x < 0 || y < 0) return false
        if(x > row - 1 || y > col - 1) return false
        return true
    }
    const memo = {}
    const dfs = (point, prev) => {
        const [x,y] = point
        if(!checkValid(x,y)) return 0
        let current = matrix[y][x]
        if(current <= prev) return 0
        if(!memo[`${x}:${y}`]){
            const up = dfs([x,y + 1], current)
            const down = dfs([x,y - 1], current)
            const right = dfs([x + 1,y], current)
            const left = dfs([x - 1,y], current)
            let subMax = Math.max(up,down,right,left) + 1
            memo[`${x}:${y}`] = subMax
        }
        return memo[`${x}:${y}`] 
    }
    let max = 0
    for(i = 0; i < matrix.length; i++){
        for(j = 0; j < matrix[0].length; j++){
            max = Math.max(max, dfs([j,i])) 
        }
    }
    return max
}