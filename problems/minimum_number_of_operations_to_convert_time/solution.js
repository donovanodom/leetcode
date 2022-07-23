const convertTime = function(current, correct) {
    const convert = (time) => {
        let hours = Number(time.slice(0,2)), secs = Number(time.slice(3,6))
        secs = (hours * 60) + secs
        return secs
    }
    current = convert(current)
    correct = convert(correct)
    let moves = 0
    if(correct - current >= 60){
        let factor = Math.floor((correct - current) / 60)
        current += 60 * factor, moves += 1 * factor

    }
    if(correct - current >= 15){
        let factor = Math.floor((correct - current) / 15)
        current += 15 * factor, moves += 1 * factor

    }
    if(correct - current >= 5){
        let factor = Math.floor((correct - current) / 5)
        current += 5 * factor, moves += 1 * factor

    }
    if(correct - current >= 1){
        let factor = Math.floor(correct - current)
        current += 1 * factor, moves += 1 * factor

    }
    return moves 
}