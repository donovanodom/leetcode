const slidingPuzzle = function(board) {
    const win = '123450', dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    let start
    for(i = 0; i < board.length; i++){
        for(j = 0; j < board[0].length; j++){
            if(!board[i][j]) start = [j,i]
        }
    }
    let q = [[start[0],start[1],0,board]], nq = [], set = new Set([`${board.flat().join('')}`])
    while(q.length){
        let [x,y,moves,grid] = q.shift()
        if(`${grid.flat().join('')}` == win){
            return moves
        }
        for(const [dx,dy] of dirs){
            let nx = dx + x, ny = dy + y
            if(isValid([nx,ny],board) && !grid[y][x]){
                let copy = grid.map((arr) => {
                    return arr.slice()
                })
                const temp = copy[y][x]
                copy[y][x] = copy[ny][nx]
                copy[ny][nx] = temp
                let np = `${copy.flat().join('')}`
                if(!set.has(np)){
                    set.add(np)
                    nq.push([nx,ny,moves + 1,copy])
                }
            }  
        }     
        if(!q.length){
            q = nq
            nq = []
        }
    }
    return -1
}

const isValid = (cell, board) => {
    let [x,y] = cell
    if(x < 0 || y < 0 || x >= board[0].length || y >= board.length) return false
    return true
}