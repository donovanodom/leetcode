const hasPath = (maze, start, destination) => {
    // determine dimensions of matrix
    let row = maze[0].length, col = maze.length
    // egde case for if matrix is 1 x 1 return true
    if(row * col == 1) return true
    // set an object for call possible directions
    const directions = {
        'right': [1,0],
        'left': [-1,0],
        'up': [0,-1],
        'down': [0,1]
    }
    // create a queue for location & direction of ball
    // and a set to keep track of walls already run into
    let q = [[start,null]], walls = new Set()
    // while the queue is not empty, iterate through possible points
    while(q.length){
        // set row, column and directional motion of current position
        let [[r,c],motion] = q.shift()
        // if current position is equivalent to our destination 
        // and the ball is no longer in motion, return true
        if(r == destination[0] && c == destination[1] && motion === null) return true
        // if the ball IS NOT in motion, iterate through directions 
        // to determine which valid directions the ball can move
        if(motion === null){
            for(const direction in directions){
                let nextR = directions[direction][1] + r, nextC = directions[direction][0] + c                
                if(nextR < 0 || nextC < 0) continue
                if(nextR > col - 1 || nextC > row - 1) continue
                if(maze[nextR][nextC] == 1) continue
                q.push([[nextR,nextC], direction])
            }
        // if the ball IS in motion, continue in that direction to determine if the
        // next point is valid. If so, add it to the queue. If not, add the point
        // to our 'walls' set and set motion to null before remitting to our queue
        // so we are able to determine a new direction on the next loop
        }else{
            let nextR = directions[motion][1] + r, nextC = directions[motion][0] + c
            if(walls.has(`${r},${c}`)) continue
            if(nextR > col - 1 || nextC > row - 1 || nextR < 0 || nextC < 0 || maze[nextR][nextC] == 1){
                q.unshift([[r,c],null])
                walls.add(`${r},${c}`)
                continue
            } 
            q.push([[nextR,nextC], motion])
        }
    }
    // if we've made it this far, return false as there 
    return false
}