const judgeCircle = (moves) => {
    let x = 0, y = 0
    for(const char of moves){
        if(char == 'D'){
            y--
        }else if(char == 'U'){
            y++
        }else if(char == 'L'){
             x--
        }else if(char == 'R'){
            x++
        } 
    }
    return !x && !y
}