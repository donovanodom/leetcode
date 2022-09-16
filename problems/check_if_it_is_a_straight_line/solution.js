const checkStraightLine = function(coordinates) {
    const [x0, y0] = coordinates[0], [x1, y1] = coordinates[1]
    const [a, b, c] = [y0 - y1, x1 - x0, x0 * y1 - x1 * y0]
    for(const [x, y] of coordinates){
        if (a * x + b * y + c) return false
    } 
    return true
}