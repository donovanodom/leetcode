const generate = (numRows) => {
    let answer = [[1],[1,1]], pointer = 1
    if(numRows == 1) return [[1]]
    if(numRows == 2) return answer
    while(answer.length < numRows){
        let arr = answer[pointer], sub = []
        for(i = 0; i < arr.length - 1; i++){ 
            let sum = arr[i] + arr[i + 1]
            sub.push(sum)
        }
        answer[pointer + 1] = [1, ...sub, 1]
        pointer++
    }
    return answer
}