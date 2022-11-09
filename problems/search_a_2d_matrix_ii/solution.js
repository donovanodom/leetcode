const searchMatrix = function(mat, target) {
    let [m, n] = constrain(mat, target), i = 0
    while(i <= m){
        let j = 0
        while(j <= n){
            if(mat[i][j] == target) return true
            j++
        }
        i++
    }
    return false
}

const constrain = (mat, target) => {
    let tr = mat[0].length - 1, bl = mat.length - 1
    while(checkValid([0, tr], mat) && mat[0][tr] > target) tr--
    while(checkValid([bl, 0], mat) && mat[bl][0] > target) bl--
    return [bl, tr]
}

const checkValid = ([i,j], mat) => {
    if(i >= 0 && i < mat.length && j >= 0 && j < mat[i].length) return true
    return false
}