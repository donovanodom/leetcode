const allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const grid = Array(rows).fill().map((x) => x = Array(cols).fill(0))
    let ans = [[rCenter,cCenter]], q = [[rCenter,cCenter]]
    grid[rCenter][cCenter] = 1
    while(q.length){
        let [r,c] = q.shift()
        if(checkValid(r + 1, c, rows, cols) && !grid[r + 1][c]){
            ans.push([r + 1, c])
            q.push([r + 1, c])
            grid[r + 1][c] = 1
        }
        if(checkValid(r - 1, c, rows, cols) && !grid[r - 1][c]){
            ans.push([r - 1, c])
            q.push([r - 1, c])
            grid[r - 1][c] = 1
        }
        if(checkValid(r, c + 1, rows, cols) && !grid[r][c + 1]){
            ans.push([r, c + 1])
            q.push([r, c + 1])
            grid[r][c + 1] = 1
        }
        if(checkValid(r, c - 1, rows, cols) && !grid[r][c - 1]){
            ans.push([r, c - 1])
            q.push([r, c - 1])
            grid[r][c - 1] = 1
        }
    }
    return ans
    
};

const checkValid = (a, b, x, y) => {
    if(a < 0 || b < 0 || a >= x || b >= y) return false
    return true
}