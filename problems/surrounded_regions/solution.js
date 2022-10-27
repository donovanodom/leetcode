const solve = function(board) {
    let safes = new Set()
    for(i = 0; i < board.length; i++){
        for(j = 0; j < board[i].length; j++){
            if(!safes.has(`${i},${j}`) && board[i][j] == 'O' && (i == 0 || i == board.length - 1 || j == 0 || j == board[i].length - 1)){
               findSafes([i,j], board, safes)
            } 
        }
    }
    for(i = 1; i < board.length - 1; i++){
        for(j = 1; j < board[i].length - 1; j++){
            if(board[i][j] == 'O' && !safes.has(`${i},${j}`)) board[i][j] = 'X'
        }
    }
    return board
}

const findSafes = (point, board, list) => {
    let [a,b] = point
    if(checkValid([a + 1, b], board) && board[a + 1][b] == 'O' && !list.has(`${a + 1},${b}`)){
        list.add(`${a + 1},${b}`)
        findSafes([a + 1, b], board, list)
    }
    if(checkValid([a - 1, b], board) && board[a - 1][b] == 'O' && !list.has(`${a - 1},${b}`)){
        list.add(`${a - 1},${b}`)
        findSafes([a - 1, b], board, list)
    } 
    if(checkValid([a, b + 1], board) && board[a][b + 1] == 'O' && !list.has(`${a},${b + 1}`)){
        list.add(`${a},${b + 1}`)
        findSafes([a, b + 1], board, list)
    }
    if(checkValid([a, b - 1], board) && board[a][b - 1] == 'O' && !list.has(`${a},${b - 1}`)){
        list.add(`${a},${b - 1}`)
        findSafes([a, b - 1], board, list)
    }
}

const checkValid = (point, board) => {
    let [a,b] = point, m = board.length, n = board[0].length
    if(a >= 0 && b >= 0 && a < m && b < n) return true
    return false
}