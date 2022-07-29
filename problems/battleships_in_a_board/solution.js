const countBattleships = function(board) {
    if(board[0].length * board.length == 1) return board[0][0] == 'X' ? 1 : 0   
    const destroyShip = (coordinates) => {
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
        let nq = [coordinates]
        while(nq.length){
            let [x,y] = nq.shift()
            board[y][x] = ''
            for(const [dx,dy] of dirs){
                let nx = dx + x, ny = dy + y 
                if(nx < 0 || ny < 0) continue
                if(nx > board[0].length - 1 || ny > board.length - 1) continue
                if(board[ny][nx] == 'X'){
                    nq.push([nx,ny])
                }
            }
        }
        return 1
    }
    let answer = 0
    for(i = 0; i < board.length; i++){
        for(j = 0; j < board[0].length; j++){
            if(board[i][j] == 'X'){
                let coordinates = [j,i]
                answer += destroyShip(coordinates)
            } 
        }
    }
   return answer
}