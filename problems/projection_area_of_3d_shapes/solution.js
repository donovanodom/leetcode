const projectionArea = function(grid) {
    let top = 0
    let front = 0, side = 0
    let sides = Array(grid.length).fill(0)
    for(const set of grid){
        front += Math.max(...set)
    }
    for(const set of grid){
        for(t = 0; t < set.length; t++){
            if(set[t]) top += 1
            sides[t] = Math.max(sides[t], set[t])
        }
    }
    sides = sides.reduce((a,b) => a + b)
    return top + front + sides
}