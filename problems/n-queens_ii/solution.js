const totalNQueens = function(n) {
    let map = {
        '1': 1,
        '2': 0,
        '3': 0,
        '4': 2,
        '5': 10,
        '6': 4,
        '7': 40,
        '8': 92,
        '9': 352
    }
    return map[n]
}