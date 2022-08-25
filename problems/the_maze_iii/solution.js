const findShortestWay = (maze, start, destination) => {
    let row = maze[0].length, col = maze.length
    if(row * col == 1) return true
    const directions = {
        'left': [-1,0],
        'down': [0,1],
        'right': [1,0],
        'up': [0,-1]
    }
    let q = [[start,null,'',0,'',null]], answers = [], min = Infinity, seen = new Set()
    while(q.length){
        let [[r,c],motion,x,distance,init] = q.shift()
        if(r == destination[0] && c == destination[1] && distance <= min){
            answers.push(x.replace(/(.)\1+/g, '$1'))
            min = Math.min(min,distance)
        } 
        if(motion === null){
            for(const direction in directions){
                let char = direction[0]
                let nextR = directions[direction][1] + r, nextC = directions[direction][0] + c 
                if(nextR < 0 || nextC < 0) continue
                if(nextR > col - 1 || nextC > row - 1) continue
                if(maze[nextR][nextC] == 1) continue
                if(`${start[0]}:${start[1]}` == `${r}:${c}`) init = direction
                seen.add(`:${init}${r},${c}->${nextR},${nextC}`)
                q.push([[nextR,nextC],direction,x+char,distance+1,init])
            }
        }else{
            let char = motion[0]
            let nextR = directions[motion][1] + r, nextC = directions[motion][0] + c
            if(seen.has(`:${init}${r},${c}->${nextR},${nextC}`)) continue
            if(nextR > col - 1 || nextC > row - 1 || nextR < 0 || nextC < 0 || maze[nextR][nextC] == 1){
                q.push([[r,c],null,x,distance,init])
                seen.add(`:${init}${r},${c}->${nextR},${nextC}`)
                continue
            }
            q.push([[nextR,nextC],motion,x+char,distance+1,init])
        }
    }
    answers.sort((a,b) => a[0] - b[0])
    return answers.length ? answers.sort()[0] :'impossible'
}