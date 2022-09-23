const diagonalSum = function(mat) {
    let sum = 0, i = 0, j = 0
    while(i < mat.length){
        sum += mat[i][j]
        i++
        j++
    }
    i = 0
    j--
    while(i < mat.length){
        sum += mat[i][j]
        i++
        j--
    }
    return mat.length % 2 == 0 ? sum : sum - mat[Math.floor(mat.length/2)][Math.floor(mat.length/2)]
}