const spiralOrder = function(mat) {
    let total = mat.length * mat[0].length, ans = [], i = 0, j = 0
    let x = mat[i].length, y = mat.length
    while(total){
        while(j < x){
            if(!total) break
            ans.push(mat[i][j])
            j++
            total--
        }
        j--
        i++
        while(i < y){
            if(!total) break
            ans.push(mat[i][j])
            i++
            total--
        }
        i--
        j--
        while(j >= mat[i].length - x){
            if(!total) break
            ans.push(mat[i][j])
            j--
            total--
        }
        j++
        i--
        x--
        y--
        while(i >= mat.length - y){
            if(!total) break
            ans.push(mat[i][j])
            i--
            total--
        }
        i++
        j++
    }
    return ans
}