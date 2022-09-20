const countNegatives = function(grid) {
    grid = grid.flat()
    let count = 0
    for(const num of grid){
        if(num < 0) count++
    }
    return count
}