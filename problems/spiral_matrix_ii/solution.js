const generateMatrix = function(n) {
    let arr = Array(n * n).fill().map((_,i) => i + 1), mat = Array(n).fill().map((x) => x = Array(n).fill(0)),
        total = n * n, x = n, y = n, i = 0, j = 0
    while(total){
        while(j < x){
            if(!total) break
            mat[i][j] = arr.shift()
            j++
            total--
        }
        j--
        i++
        while(i < y){
            if(!total) break
            mat[i][j] = arr.shift()
            i++
            total--
        }
        i--
        j--
        while(j >= mat[i].length - x){
            if(!total) break
            mat[i][j] = arr.shift()
            j--
            total--
        }
        j++
        i--
        x--
        y--
        while(i >= mat.length - y){
            if(!total) break
            mat[i][j] = arr.shift()
            i--
            total--
        }
        i++
        j++
    }
    return mat
}

