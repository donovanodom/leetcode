var solution = function(knows) {
    return function(n) {
        const inDeg = Array(n).fill(0), outDeg = Array(n).fill(0)
        for(i = 0; i <= n - 1; i++){
            for(j = 0; j <= n -1; j++){
                if(i == j) continue
                if(knows(i,j)){
                    inDeg[j]++
                    outDeg[i]++
                }   
            }
        }
        for(i = 0; i <= n - 1; i++){
            if(inDeg[i] == n - 1 && outDeg[i] == 0){
                return i
            }
        }
        return -1
    }
}