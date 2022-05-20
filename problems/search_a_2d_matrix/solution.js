const searchMatrix = (matrix, target) => {
    matrix = matrix.flatMap((x) => x)
    return matrix.indexOf(target) == -1 ? false : true
}