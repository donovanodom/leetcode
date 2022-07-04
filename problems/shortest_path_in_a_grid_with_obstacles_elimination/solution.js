const shortestPath = function(grid, k) {
    let row = grid[0].length, col = grid.length
    if(row * col == 1) return 0
    let q = [[0,0,k]], nextQ = [], visited = new Set(`0:0:${k}`), moves = 0
    const directions = [[1,0],[-1,0],[0,1],[0,-1]]
    while(q.length){
        let [x,y,k] = q.shift()
        if(x == row - 1 && y == col - 1) return moves
        for(const [directionX,directionY] of directions){
            let nextX = directionX + x, nextY = directionY + y
            if(nextX < 0 || nextY < 0) continue
            if(nextX > row - 1 || nextY > col - 1) continue
            let obstacle = grid[nextY][nextX]
            if(obstacle && k < 1) continue
            let nextK = obstacle ? k - 1 : k
            let nextP = [nextX,nextY,nextK], nextV = `${nextX}:${nextY}:${nextK}`
            if(!visited.has(nextV)){
                visited.add(nextV)
                nextQ.push(nextP)
            }
        }
        if(!q.length){
            q = nextQ
            nextQ = []
            moves++
        }
    }
    return - 1
}