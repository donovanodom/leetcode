const numRookCaptures = function(board) {
    const dirs = {
        'right':[1,0],
        'left':[-1,0],
        'up':[0,1],
        'down':[0,-1]
    }
    let rook = findR(board), count = 0, q = [[...rook,null]]
    while(q.length){
        let [x,y,dir] = q.shift()
        if(!dir){
            Object.keys(dirs).forEach((key) => {
                let nx = x + dirs[key][0], ny = y + dirs[key][1]
                if(checkValid(nx,ny)){
                    if(board[ny][nx] == 'p'){
                        count++
                    }else if(board[ny][nx] != 'B'){
                        q.push([nx,ny,key])
                    }
                }
               
            })
        }else{
            let nx = x + dirs[dir][0], ny = y + dirs[dir][1]
            if(checkValid(nx,ny)){
               if(board[ny][nx] == 'p'){
                    count++
                }else if(board[ny][nx] != 'B'){
                    q.push([nx,ny,dir])
                }
            } 
        }                
    }
    return count
    
}

const findR = (board) => {
    for(i = 0; i < 8; i++){
        for(j = 0; j < 8; j++){
            if(board[i][j] == 'R') return [j,i]
        }
    }
}

const checkValid = (x,y) => {
    if(x < 0 || y < 0 || x >= 8 || y >= 8) return false
    return true
}