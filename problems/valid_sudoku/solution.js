const isValidSudoku = (board) => {
    let answer = true
    let verts = []
    let x = 0
    const matrix = (board) => {
        let vert = []
        for(y = 0; y < board.length; y++){
            vert.push(board[y][x])
        }
        if(y == 9 && x < 9){
            verts.push(vert)
            x++
            matrix(board)
        }
    }
    matrix(board)
    let dummy = board.map(function(arr) {
        return arr.slice()
    })
    let pointer = 5
    for(i = 0; i < 3; i++){
        dummy[i].push(...[...(dummy.splice(3, 1)).flat()])
        dummy[i].push(...[...(dummy.splice(pointer, 1)).flat()])
        pointer--
    }
    let grids = []
    const formGrids = () => { 
        let grid = []
        for(i = 0; i < 3; i++){
            grid.push(...dummy[i].splice(0,3))
        }
        grids.push(grid)
        if(grids.length < 9) formGrids()
    }
    formGrids()
    let numsX = board.map((a) => a.filter((x) => x != '.'))
    let numsY = verts.map((b) => b.filter((y) => y != '.'))
    const testValid = (set) => {
        for(i = 0; i < set.length; i++){
            let onlyNums = set[i].filter((n) => n != '.')
            let uniq = [...new Set(onlyNums)]
            if(onlyNums.length != uniq.length) answer = false
        }
    }
    testValid(grids)
    testValid(numsX)
    testValid(numsY)
    return answer
}