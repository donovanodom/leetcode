const tictactoe = function(moves) {
    if(moves.length < 5) return 'Pending'
    let remaining = 9
    let a = [], b = []
    for(i = 0; i < moves.length; i++){ 
        let [x,y] = moves[i]
        if(i % 2 == 0){
            a.push(`${x}${y}`)
        }
        if(i % 2 != 0){
            b.push(`${x}${y}`)
        }
        if(i > 3){
            if(checkwin(a)) return 'A'
            if(checkwin(b)) return 'B'
        }
        remaining--
    }
   
    if(remaining == 0) return 'Draw'
    return 'Pending'
}

const checkwin = (positions) => {
    const wins = [
        ['00','01','02'],
        ['00','10','20'],
        ['10','11','12'],
        ['01','11','21'],
        ['00','11','22'],
        ['02','11','20'],
        ['02','12','22'],
        ['22','21','20']
    ]
    for(const win of wins){
        let check = win.every((pos) => {
            return positions.includes(pos)
        })
        if(check) return true
    }
}