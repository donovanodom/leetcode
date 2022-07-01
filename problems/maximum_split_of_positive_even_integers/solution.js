const maximumEvenSplit = (finalSum) => {
    if(finalSum % 2 != 0) return []
    let answer = [], factor = 2
    while(finalSum >= factor){
        if(factor * 2 >= finalSum){
            answer.push(finalSum)
            break
        }
        answer.push(factor)
        finalSum -= factor
        factor += 2
    }
    return answer
}