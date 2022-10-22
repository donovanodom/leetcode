const setZeroes = function(mat) {
    let rows = [], cols = []
    for(i = 0; i < mat.length; i++){
        for(j = 0; j < mat[i].length; j++){
            if(mat[i][j] == 0){
                rows.push(i)
                cols.push(j)
            }
        }
    }
    for(i = 0; i < mat.length; i++){
        for(j = 0; j < mat[i].length; j++){
            if(rows.includes(i) || cols.includes(j)){
                mat[i][j] = 0
            }
        }
    }
    return mat
};