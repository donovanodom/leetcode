const numSpecial = function(mat) {
    let row = Array(mat.length).fill(0), col = Array(mat[0].length).fill(0), ans = 0
    for(i = 0; i < mat.length; i++){
       for(j = 0; j < mat[i].length; j++){
            if(mat[i][j]){
                row[i]++
                col[j]++
            }
        }
    }
     for(i = 0; i < mat.length; i++){
       for(j = 0; j < mat[i].length; j++){
            if(mat[i][j] && row[i] == 1 && col[j] == 1){
                ans++
            }
        }
    }
    return ans
}