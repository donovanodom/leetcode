const kWeakestRows = function(mat, k) {
    let arr = Array(mat[0].length + 1).fill().map((x) => x = [])
    for(i = 0; i < mat.length; i++){
        let j = 0
        while(mat[i][j] == 1) j++
        arr[j].push(i)
    }
    return arr.flat().slice(0,k) 
}