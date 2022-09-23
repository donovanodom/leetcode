const isPathCrossing = function(path) {
    const dirs = {
        'N' : [0,1],
        'S' : [0,-1],
        'E' : [1,0],
        'W' : [-1,0]
    }
    let seen = new Set(['0:0']), cur = [0,0]
    while(path){
        let [x,y] = cur, [nx,ny] = dirs[path.slice(0,1)]
        path = path.slice(1)
        if(!seen.has(`${x + nx}:${y + ny}`)){
            seen.add(`${x + nx}:${y + ny}`)
            cur = [x + nx, y + ny]
        }else{
            return true
        }
    }  
    return false
}