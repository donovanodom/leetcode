const isToeplitzMatrix = function(matrix) {
    for(i = 1; i < matrix.length; i++){
        for(j = 1; j < matrix[i].length; j++){
            if(matrix[i][j] != matrix[i-1][j-1]) return false
        }
    }
    return true
}