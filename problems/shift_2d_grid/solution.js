const shiftGrid = function(grid, k) {
    let m = grid.length, n = grid[0].length, shift = k % (m * n)
    if(shift == 0) return grid
    grid = grid.flat()
    while(shift){
        grid.unshift(grid.pop())
        shift--
    }
    let ans = []
    for(i = 0; i < m * n; i += n){
        ans.push(grid.slice(i, i + n))
    }
    return ans
}