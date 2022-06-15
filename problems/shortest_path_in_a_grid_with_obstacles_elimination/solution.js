const shortestPath = (grid, k) => {
    // set row & column length of grid
    let row = grid[0].length, col = grid.length

    // edge case to determine if m x n = 1 
    if(row * col == 1) return 0
    // set array of possible directions you can move from each cell
    const directions = [[0,1], [0,-1], [1,0], [-1,0]]
    
    // set queue to handle current points, and nextQueue to handle possible directional movements
    // set moves to keep track of total moves taken
    let q = [[0,0,k]], nextQ = [], moves = 0
    
    // set object to keep track of already visited points & add starting point
    let visited = new Set()
    visited.add(`0:0:${k}`)
    
    // while items still in queue
    while(q.length){
        
        // set points to the 'first out' item in queue
        let [x, y, k] = q.shift()
        
        // return number of moves if destination has been reached
        if(x == row - 1 && y == col - 1) return moves

        // iterate through all possible directions
        for(const [directionX, directionY] of directions){
            
            // set variables to determine position of next point on the grid
            let nextX = x + directionX, nextY = y + directionY
            
            
            // if points do not exist on the grid, continue to next iteration
            if(nextX < 0 || nextY < 0) continue
            if(nextX > row - 1|| nextY > col - 1) continue
            
            // set variable for existence of obstacle 
            let obstacle = grid[nextY][nextX]
            
            // if obstacle exists and we have exhausted k, continue to next iteration
            if(obstacle && k < 1) continue
            
            // set k value for next point
            let nextK = obstacle ? k - 1 : k
            
            // set values for the next point, and a string representing the point
            let nextP = [nextX,nextY,nextK], nextV = `${nextX}:${nextY}:${nextK}`

            // check if the point string exists in object of visited points
            // if not, push the next point to the next queue
            // and add the point string to the object of visited points
            if(!visited.has(nextV)){
                nextQ.push(nextP)
                visited.add(nextV)
            }
        }
        
        // after iterating directions, and all current queues 
        // proceed to the next queue and increment the number of moves by one
        if(!q.length){
            q = nextQ
            nextQ = []
            moves++       
        }    
    }
    // if a path to the destination does not exit, return -1
    return -1
}