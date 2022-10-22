const exist = function(board, word) {
    let alpha = Array(26).fill(0), i = 0
    while(i < board.length){
        let j = 0
        while(j < board[i].length){
            let char = board[i][j].toLowerCase().charCodeAt(0) - 97
            alpha[char]++
            j++
        }
        i++
    }
    
    for(i = 0; i < word.length; i++){
        let char = word.toLowerCase().charCodeAt(i) - 97
        alpha[char]--
    }
    for(const num of alpha){
        if(num < 0) return false
    }
    i = 0
    while(i < board.length){
        let j = 0
        while(j < board[i].length){
            if(board[i][j] != word[0]){
                j++
                continue
            }else{
                if(dfs(board, word, 0, [i,j])) return true
                j++
            }    
        }
        i++
    }
    return false
}

const dfs = (board, word, index, point, seen = `${point[0]},${point[1]}=>`, str = word[index]) => {
    let q = [[point[0],point[1],`${point[0]},${point[1]}=>`,index,word[index]]]
    while(q.length){
        let [a,b,seen,index,str] = q.shift()
        if(str == word) return true
        if(checkValid(board, [a + 1, b]) && board[a + 1][b] == word[index + 1] && !seen.includes(`${a + 1},${b}=>`)){
        q.push([a + 1, b, seen + `${a + 1},${b}=>`, index + 1, str + word[index + 1]])
        } 
        if(checkValid(board, [a, b + 1]) && board[a][b + 1] == word[index + 1] && !seen.includes(`${a},${b + 1}=>`)){
            q.push([a, b + 1, seen + `${a},${b + 1}=>`, index + 1, str + word[index + 1]])
        } 
        if(checkValid(board, [a - 1, b]) && board[a - 1][b] == word[index + 1] && !seen.includes(`${a - 1},${b}=>`)){
            q.push([a - 1, b, seen + `${a - 1},${b}=>`, index + 1, str + word[index + 1]])
        } 
        if(checkValid(board, [a, b - 1]) && board[a][b - 1] == word[index + 1] && !seen.includes(`${a},${b - 1}=>`)){
            q.push([a, b - 1, seen + `${a},${b - 1}=>`, index + 1, str + word[index + 1]])
        }
    }
    return false
}

const checkValid = (board, point) => {
    let [a,b] = point
    if(a >= 0 && b >= 0 && a < board.length && b < board[a].length) return true
    return false
}