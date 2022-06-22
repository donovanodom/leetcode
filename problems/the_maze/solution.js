const hasPath = (maze, start, destination) => {
    let row = maze[0].length, col = maze.length
    if(row * col == 1) return true
    const directions = {
        'right': [1,0],
        'left': [-1,0],
        'up': [0,-1],
        'down': [0,1]
    }
    let q = [[start,null]], walls = new Set()
    while(q.length){
        let [[r,c],motion] = q.shift()
        if(r == destination[0] && c == destination[1] && motion === null) return true
        if(motion === null){
            for(const direction in directions){
                let nextR = directions[direction][1] + r, nextC = directions[direction][0] + c                
                if(nextR < 0 || nextC < 0) continue
                if(nextR > col - 1 || nextC > row - 1) continue
                if(maze[nextR][nextC] == 1) continue
                q.push([[nextR,nextC], direction])
            }
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
    return false
}