const maxSumSubmatrix = (matrix, k) => {
    let max = -Infinity
    for(i = 0; i < matrix.length; i++){
        let arr = Array(matrix[i].length).fill(0)
        for(row = i; row < matrix.length; row++){
            if(max == k){
                return max
            }else{           
                let sum = 0, subMax = -Infinity    
                for(let col = 0; col < matrix[row].length; col++) {
                    arr[col] += matrix[row][col]
                    if(sum < 0) sum = 0
                    sum += arr[col]
                    subMax = Math.max(subMax, sum)
                }
                if(subMax <= k){
                    max = Math.max(subMax, max) 
                }else{
                    subMax = -Infinity
                    for(col = 0; col < matrix[row].length; col++) {
                        sum = 0
                        for(x = col; x < matrix[row].length; x++) {
                            sum += arr[x]
                            if(sum <= k) subMax = Math.max(sum, subMax)
                        }
                    }
                    max = Math.max(subMax, max)
                }
            }
        }
    }
    return max
}