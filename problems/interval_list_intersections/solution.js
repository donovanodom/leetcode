const intervalIntersection = (firstList, secondList) => {
    if(!firstList.length || !secondList.length) return []
    let answer = [], i = 0, j = 0
    while(i < firstList.length && j < secondList.length){
        if(firstList[i][1] < secondList[j][0]){
            i++
            continue
        } 
        if(secondList[j][1] < firstList[i][0]){
            j++
            continue
        }
        let start = Math.max(firstList[i][0],secondList[j][0])
        let end = Math.min(firstList[i][1],secondList[j][1])
        answer.push([start,end])
        end == firstList[i][1] ? i++ : j++
    }
    return answer
}