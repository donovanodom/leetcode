const searchMatrix = (matrix, target) => {
    matrix = matrix.flat()
    return matrix.indexOf(target) == -1 ? false : true
}