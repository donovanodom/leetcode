const matrixReshape = (mat, r, c) => {
    let m = mat.length, n = mat[0].length, flat = mat.flat()
    if(m * n != r * c || flat.length % r != 0) return mat
    let answer = [], pointer = 0
    for(i = 0; i < flat.length; i += c){
        answer.push(flat.slice(i, i + c))
    }
    return answer
}