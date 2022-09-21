const luckyNumbers  = function(matrix) {
    const cols = new Set()
    for(i = 0; i < matrix[0].length; i++){
        let max = 0
        for(j = 0; j < matrix.length; j++){
            max = Math.max(max, matrix[j][i])
        }
        cols.add(max)
    }
    let ans = []
    for(const row of matrix){
        let min = Math.min(...row)
        if(cols.has(min)) ans.push(min)
    }
    return ans
}