const getRow = function(rowIndex) {
    if(rowIndex == 0) return [1]
    if(rowIndex == 1) return [1,1]
    let result = [], prevRow = getRow(rowIndex - 1)
    result[0] = 1, result[rowIndex] = 1
    for(i = 1; i <= rowIndex - 1; i++) {
        result[i] = prevRow[i-1] + prevRow[i] 
    }
    return result
}
